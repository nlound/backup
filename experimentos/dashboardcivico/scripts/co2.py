#!/usr/bin/env python
# -*- coding: utf-8 -*

from api_sensores import api
from getcfg import opencfg, cfgredis

import time
import redis
import json
import random
from datetime import datetime

# Get archivos de configuracion
cfg_redis = cfgredis()
redisCo2 = redis.StrictRedis(host=cfg_redis['host'], port=cfg_redis['port'], db=cfg_redis['db'], password=cfg_redis['pass'])
co2cfg = opencfg('config.cfg', "co2")

#while True:

# # Obtener sensor
# id_sensor = co2cfg.id_sensor
# sensor = api.Sensor.get(id_sensor)

# # Pedir el ultimo dato del sensor
# last_data = sensor.get_last_data()
# co2_actual = last_data.attrs['data']

timestamp_ahora = datetime.now()

co2_actual = random.randrange(600, 1200)
co2 = {"co2": co2_actual, "timestamp": timestamp_ahora}

print co2
# Buscar el timestamp de la ultima vez que se actualizo la clave
co2_clave = redisCo2.hgetall("co2")
diferencia_seconds = -1

if co2_clave:
	timestamp_clave = co2_clave["timestamp"]
	# Calcular hace cuanto tiempo fue
	timedelta = timestamp_ahora - datetime.strptime(timestamp_clave, "%Y-%m-%d %H:%M:%S.%f") 
	diferencia_seconds = timedelta.total_seconds()

# Actualizar las claves de Redis si la ultima vez que se actualizo fue
# hace mas de una hora
if (diferencia_seconds > 3600 or diferencia_seconds == -1):
	redisCo2.hmset("co2", co2)

# Publicar el ultimo dato del sensor
redisCo2.publish("co2", co2["co2"])
	
#	time.sleep(co2cfg.interval)