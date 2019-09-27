import os

if os.environ.get('OPENSHIFT_MYSQL_DIR'):
    mysql = dict(
        user=os.environ.get('OPENSHIFT_MYSQL_DB_USERNAME'),
        password=os.environ.get('OPENSHIFT_MYSQL_DB_PASSWORD'),
        host=os.environ.get('OPENSHIFT_MYSQL_DB_HOST'),
        db='dashboardoperativo'
    )
else:
    server = dict(
        ip='127.0.0.1',
        port=8080
    )
    db = dict(
        engine='mysql',
        user='root',
        password='password',
        host='localhost',
        db='dashboardoperativo'
    )
    db_url = db['engine'] + "://" + db['user'] + ":" + \
        db['password'] + "@" + db['host'] + "/" + db['db']
    captcha_site_key = "6Lcd2wwTAAAAAMfz3yJhphSG74U54MJhRMu-_Vyp"
    captcha_secret = '6Lcd2wwTAAAAALP0ZBvoLJlSxjF5qytxJJ19Z2iE'
