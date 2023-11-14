# SVF
This project is a UoE Master Dissertation. The frameworks of frontend and backends are Vue.js and Django, respectively.

## Organisation
* Audios: stores audio files
* svftest: backend codes
  * settings:\
    - if running on the cloud:
    ```
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.mysql',
            'HOST': '/cloudsql/[YOUR-CONNECTION-NAME]',
            'NAME': '[YOUR-DATABASE]',
            'USER': '[YOUR-DATABASE-USERNAME]',
            'PASSWORD': '[YOUR-DATABASE-PASSWORD]'
        }
    }
    ```
    - if running locally:
    ```
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.mysql',
            'HOST': '127.0.0.1',
            'NAME': '[YOUR-DATABASE]',
            'USER': '[YOUR-DATABASE-USERNAME]',
            'PASSWORD': '[YOUR-DATABASE-PASSWORD]',
            'PORT': 3306
        }
    }
    ```
  
  * views.py: handle HTTP requests
    2. get audio files and filter them
    3. save audio files to the cloud storage
    4. insert records into database.
* templates: frontend codes
* TestModel: database configuration
  1. Testers class: uid, age, gender
  2. Records class: audio file path, category, test date, tester_uid, filtered
* app.yaml: Cloud Build configuration file.
* requirements.txt: packages required in this project
* cloud_sql_proxy.exe: Cloud SQL auth proxy

## Run on Django server locally
```
manage.py runserver
```

## Download Google Cloud SDK
https://cloud.google.com/sdk/docs/install

```
gcloud init

cloud_sql_proxy.exe -instances="svf-turkish:europe-west1:svf"=tcp:5432
```

## Update database
```
manage.py makemigrations 
manage.py migrate
```

## Deploy the app to the App Engine standard environment
```
gcloud app deploy
```

## Commands in building frontend
Run on the local server:
```
npm run serve
```

Deploy the frontend:
```
npm run build
```

## Integration of frontend and backend
After the build command, the deployed version code of frontend will be generated in ths **dist folder**. 

### Modify the built frontend code
Before copy the files into backend project, please ensure you change the pathes of static files first:
1. dist/index.html: change 
```
static/css/xxxxxx

static/js/xxxxxx 
```
to 
```
https://storage.googleapis.com/staging.svf-turkish.appspot.com/static/css/xxxxx

https://storage.googleapis.com/staging.svf-turkish.appspot.com/static/js/xxxxx
```
2. dist/static/css/chunk-vendors.xxx: change 
```
url(../../static/fonts/element-icons.535877f5.woff) format("woff"),url(../../static/fonts/element-icons.732389de.ttf)
```
to
```
url(https://storage.googleapis.com/staging.svf-main-321410.appspot.com/static/fonts/element-icons.535877f5.woff) format("woff"),url(https://storage.googleapis.com/staging.svf-main-321410.appspot.com/static/fonts/element-icons.732389de.ttf)
```

### Move the frontend files into backend project
Then you can copy the <u>css, js, font folders</u>, and <u>favicon.ico</u> into <u>static folder</u> and <u>templates/static folder</u>. And copy <u>index.html</u> to <u>templates folder</u>.

Notice: If you just modify the config.js in the backend, you don't need to deploy the whole project to the server again. Just upload the config file to the specific bucket in Cloud Storage. Don't use command "gcloud app deploy".


# Useful References
https://cloud.google.com/python/django/appengine#gcloud
https://cloud.google.com/sql/docs/postgres/sql-proxy
https://vuejs.org/v2/guide/
https://www.djangoproject.com/start/