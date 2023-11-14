from django.db import models
from django.conf import settings

# Create your models here.
class Testers(models.Model):
    uid = models.CharField('uid', primary_key=True, max_length=64)
    age = models.IntegerField('age', null=False)
    gender = models.BooleanField('gender', default=True) # True: female, False: male

    class Meta:
        db_table = 'testers'

# Create your models here.
class Records(models.Model):
    audio = models.FilePathField('audio path', path=settings.LOCAL_FILE_DIR, max_length=128)
    category = models.CharField('category', max_length=64)
    tester = models.ForeignKey(Testers, on_delete=models.CASCADE)
    test_time = models.DateTimeField('test time', auto_now=True)
    filtered = models.BooleanField('filtered', default=False)

    class Meta:
        db_table = 'records'
        unique_together = ('category', 'tester', 'filtered')
