#!/usr/bin/env python
# -*- coding: utf-8 -*

from api_sensores import api
from getcfg import opencfg, cfgredis

import random
import time
from datetime import datetime
import redis
import json

# Get archivos de configuracion
cfg_redis = cfgredis()
redisClimaInterno = redis.StrictRedis(host=cfg_redis['host'], port=cfg_redis['port'], db=cfg_redis['db'], password=cfg_redis['pass'])
climacfg = opencfg('config.cfg', "climainterno")

#while True:

# Obtener sensor
id_sensor = climacfg.id_sensor

# Pedir el ultimo dato del sensor

#sensor = api.Sensor.get(id_sensor)
#last_data = sensor.get_last_data()
#clima_actual_labgcba = last_data.attrs['data'] # ???

timestamp_ahora = datetime.now()
clima_actual_labgcba = {"climainterno": round(random.uniform(15, 25), 1), "timestamp": timestamp_ahora}

print clima_actual_labgcba

# Buscar el timestamp de la ultima vez que se actualizo la clave
clima_clave = redisClimaInterno.hgetall("climainterno")
diferencia_seconds = -1

if clima_clave:
	timestamp_clave = clima_clave["timestamp"]
	# Calcular hace cuanto tiempo fue
	timedelta = timestamp_ahora - datetime.strptime(timestamp_clave, "%Y-%m-%d %H:%M:%S.%f") 
	diferencia_seconds = timedelta.total_seconds()

# Actualizar las claves de Redis si la ultima vez que se actualizo fue
# hace mas de una hora
if (diferencia_seconds > 3600 or diferencia_seconds == -1):
	redisClimaInterno.hmset("climainterno", clima_actual_labgcba)

# Publicar el ultimo dato del sensor
redisClimaInterno.publish("climainterno", clima_actual_labgcba["climainterno"])
#	time.sleep(co2cfg.interval)