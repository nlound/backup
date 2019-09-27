:blue_car: :red_car:
# Dashboard Operativo Transito

Desde el Centro de Control de Tránsito los operadores monitorean el sistema de tránsito y toman decisiones en tiempo real con el objetivo de descomprimir el tránsito.
Este dashboard muestra las anomalías de diferentes corredores prioritarios de la ciudad de acuerdo a un análisis periódico basado en información histórica

La vista principal estará siempre visible en un videowall.
El dashboard también se accede desde las computadoras de los operarios para visualizar en detalle la anomalía, comparar los datos con la vista de tráfico de Google Maps y asignarles una causa. Esta data se recolectará para ser usada en un análisis posterior.

## Instalacion bajo Linux

Tener instalado MySQL 5.1

```sh
$ apt-get install mysql-server
```

Instalar Dependencias, en openshift correr

```sh
$ source app-root/runtime/dependencies/python/virtenv/bin/activate
$ sudo python setup install
```

O instalamos las dependecias a mano de la siguiente manera:

```sh
$ sudo pip install bottle==0.10.1
$ sudo pip install bottle-cork==0.11.1
$ sudo pip install gevent==1.1b1
$ sudo pip install gevent-socketio==0.3.5
$ sudo pip install requests==2.7.0
$ sudo pip install requests[security]
$ sudo pip install MySQL-python==1.2.3
$ sudo pip install sqlalchemy==1.0.8
$ sudo pip install sqlalchemy-migrate==0.9.7
$ sudo pip install python-dateutil
$ sudo pip install numpy==1.9.2
$ sudo pip install pandas==0.16.2
$ sudo pip install gunicorn==19.3.0
$ sudo pip install supervisor==3.1.3
```

## Instalacion bajo Mac

```sh
brew install mysql-server
mysql.server start
```

### Dependencias
Instalar las dependencias mencionadas en el archivo setup.py con pip


## Instalacion bajo Windows
Bajar e instalar [Visual C++ for Python 2.7](http://download.microsoft.com/download/7/9/6/796EF2E4-801B-4FC4-AB28-B59FBF6D907B/VCForPython27.msi) y [MySQL for Python](https://github.com/farcepest/MySQLdb1)

```sh
easy_install bottle
easy_install bottle-cork
easy_install gevent
easy_install gevent-socketio
easy_install requests
easy_install MySQL-python
easy_install sqlalchemy
easy_install bottle-cork
$ easy_install supervisor
easy_install pandas
easy_install dateutil
easy_install sqlalchemy-migrate
```

## Corriendo la app 

* Actualizar datos de conexion a base de datos en (un modelo se puede encontrar en analisis/config.py.sample)


* Asegurarse que MySQL está corriendo

```sh
 mysql.server start
 ```

* Configuración de la Base de Datos

  * Creación de las tablas
    Ir a /db_repository y leer README correspondiente
  * Generación de data de causas
```sh
$ python analisis/analisis.py --download_lastmonth
```
  * Generación de data fake (no es necesario en produccion)
```sh
$ python analisis/getDataFake.py
```

  * Configuración del modelo. 

    Para esto hay dos alternativas:

    1. Copiar un modelo existente creando un archivo detection_params.json en el directorio ./analisis
    Un modelo se puede encontrar en /analisis/detection_params.json.sample

    2. Crear un nuevo modelo

        Cargar datos:

            Una forma es bajando datos de Teracode

            $ python analisis.py --download_last_month

            Otra forma forma podría ser cargar un dump de la base, pero no está implementado todavía.

            $ python analisis.py --load_historico historico.json

        Generar Modelo:

            ```sh
            $ python analisis.py --generate_detection_params
            ```


## Configurar script para actualizacón de modelo en cron. 

Se ejecuta una vez al día a las 00hs.

```sh
sudo crontab -e
0 0 * * * /usr/bin/python2.7 /tu_home/tu_user/dashboard-operativo-transito/analisis/dailyUpdate.py
```

## Ejectuar Schedule 

Estos procesos son los encargados para extracción y carga de datos de Teracode de acuerdo a la frecuencia establecida.
La función que se llama periódicamente es executeLoop()

### A mano:

```sh
$ python analisis/schedule.py
```

### Como Demonio:


1. configurar Variables de configuracion en archivo supervisord.conf (al final del archivo)
  * command
  * stdout_logfile
  * stderr_logfile
  * user

2. Correr los procesos. Esto levanta 5 procesos en paralelo de extracción de datos de Teracode


```sh
$ supervisord -c supervisord.conf
```

Para parar todos los procesos procesos correr

```sh
$ supervisorctl stop all
```

* Instanciar Python Server

  ```sh
  $ gunicorn -b 0.0.0.0:8080 --worker-class socketio.sgunicorn.GeventSocketIOWorker app:app 
  or
  $ python app.py
  ```

* Abrir el navegador en [http://127.0.0.1:8080/](http://127.0.0.1:8080/)


## Documentación 

  - [bottle](http://bottlepy.org/docs/dev/index.html)
  - [gevent](http://gevent.org/intro.html)
  - [gevent-socketio](https://gevent-socketio.readthedocs.org/en/latest/)
  - [supervisor](http://supervisord.org/configuration.html)
  - [gunicorn](http://gunicorn.org/#quickstart)

## Licencia
[MIT](http://opensource.org/licenses/MIT)
