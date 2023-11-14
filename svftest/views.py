from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from django.conf import settings
import os
# import uuid
import wave
from TestModel.models import Records,Testers
from flask import Flask, request
from google.cloud import storage
import logging

import numpy as np
from scipy.io.wavfile import read
from scipy.io.wavfile import write
from scipy.signal import butter, sosfilt

def index(request):
  return  render(request, "index.html")

def upload(request):

    logging.basicConfig(level=logging.DEBUG,
                    format='%(asctime)s - %(filename)s[line:%(lineno)d] - %(levelname)s: %(message)s')
    
    logger = logging.getLogger(__name__)
    print(request)
    # get category name
    category = request.POST.get('category')
    # get user ID, default: -1 (no existing id)
    uid = request.POST.get('uid', "-1")
    first = request.POST.get('first', True)

    # if uid == "-1":
    #   uid = uuid.uuid4()
    # else:
    #   first = False

    # get wav file
    blob = request.FILES['audioFile']
    logger.info("Start to Open the Audio File.")
    # generate the wav file name
    path_origin = "test-"+str(uid)+"-origin.wav"
    # create a new file in temporary folder
    audio = wave.open(os.path.join("/tmp",path_origin), 'wb')
    # set audio file parameters
    audio.setnchannels(1)
    audio.setsampwidth(2)
    audio.setframerate(44100)
    # write orginal wav file to the temporary storage
    audio.writeframes(blob.read())
    # load and upload the filtered file to the cloud storage
    f = open(os.path.join("/tmp",path_origin), 'rb')

    # Create a Cloud Storage client.
    gcs = storage.Client(project="svf-main")
    # Get the bucket that the file will be uploaded to.
    bucket = gcs.get_bucket("svf-turkish.appspot.com")
    # Create a new blob
    blob = bucket.blob(path_origin)
    blob.upload_from_file(
        f,
        content_type="audio/wav"
    )
    logger.info("Audio File Saved.")

    # filtering
    path_filtered = "test-"+str(uid)+"-filtered.wav"
    (freq, arr) = read(os.path.join("/tmp",path_origin))
    sos = butter(10, [60, 2000], 'bandpass', fs=freq, output='sos')
    y = sosfilt(sos, arr)
    # save the filtered wav file in temporary storage
    write(os.path.join("/tmp",path_filtered), freq, y.astype(np.int16))
    
    # load and upload the filtered file to the cloud storage
    f = open(os.path.join("/tmp",path_filtered), 'rb')
    # Create a new blob
    blob = bucket.blob(path_filtered)
    blob.upload_from_file(
        f,
        content_type="audio/wav"
    )
    audio.close()
    

    # write into database
    tester = None
    if first == "true": # if the first test or the uid does not exist  
      tester = Testers.objects.create(
        age = 22,
        gender = True,
        uid = uid
      )
      # Records.objects.create(
      #   tester = tester,
      #   audio = path_origin,
      #   category = category,
      #   filtered = False
      # )
      # Records.objects.create(
      #   tester = tester,
      #   audio = path_filtered,
      #   category = category,
      #   filtered = True
      # )
    else: # if uid exists or the user exists
      tester = Testers.objects.filter(uid=uid).first()
    Records.objects.create(
      tester = tester,
      audio = path_origin,
      category = category,
      filtered = False
    )
    Records.objects.create(
      tester = tester,
      audio = path_filtered,
      category = category,
      filtered = True
    )
    logger.info("Records Saved.")
    return HttpResponse(uid)
