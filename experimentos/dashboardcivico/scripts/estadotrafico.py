#!/usr/bin/env python
# -*- coding: utf-8 -*-

from getcfg import opencfg, cfgredis
import urllib
import json
import time
import redis
from datetime import datetime

cfg_redis = cfgredis()
ausacfg = opencfg("config.cfg", "ausa")
clientAusa = redis.StrictRedis(cfg_redis['host'], port=cfg_redis['port'], db=cfg_redis['db'], password=cfg_redis['pass'])
ws = ausacfg["url"]

urlproxy = opencfg('config.cfg', 'proxy')['url']
proxies = {'http': urlproxy}

# Tramos seleccionados
tramos = {"VPM4271": "Acceso Norte Udaondo", 
          "VPM4021": "Acceso Oeste", 
          "VPM4161": "AU 9 de Julio"}
# Array que publicaremos por redis con el estado de los tramos seleccionados
tramos_estados = []

# Traduccion de colores a estado del trafico
traffic_translate = {"FFFFFF": "Tráfico Fluido", 
                     "008000": "Tráfico Lento",
                     "FFFF00": "Tráfico Con Demoras", 
                     "FF0000": "Tráfico Congestionado"}

# Fill in con estados de todos los tramos que devuelve la API de AUSA
ausa_estados = {}

#while True:
# Read de la API de AUSA
try:
    result = urllib.urlopen(ws, proxies=proxies).read()
except:
    print "Error conectandose con el WS de AUSA"
    exit(0) 

# Parsear respuesta por tramos/estado
data = result.split("&")
for i in data:
    pair = i.split("=")
    if len(pair) > 1:
        ausa_estados[pair[0]] = pair[1]

for key, value in tramos.iteritems():
    # Per la documentacion de AUSA, si no hay info del tramo
    # significa que el tramo tiene trafico fluido
    if key not in ausa_estados:
        ausa_estados[key] = "FFFFFF"
    tramo_estado = {"vpm": key,
                    "descripcion": value,
                    "estado": ausa_estados[key],
                    "estado_descripcion": traffic_translate[ausa_estados[key]]}
    tramos_estados.append(tramo_estado)

timestamp_ahora = datetime.now()
estado_ausa_clave = {"estadotrafico": json.dumps(tramos_estados), "timestamp": timestamp_ahora}

print tramos_estados

# Buscar el timestamp de la ultima vez que se actualizo la clave
ausa_clave = clientAusa.hgetall("estadotrafico")
diferencia_seconds = -1

if ausa_clave:
  timestamp_clave = ausa_clave["timestamp"]
  # Calcular hace cuanto tiempo fue
  timedelta = timestamp_ahora - datetime.strptime(timestamp_clave, "%Y-%m-%d %H:%M:%S.%f") 
  diferencia_seconds = timedelta.total_seconds()

# Actualizar las claves de Redis si la ultima vez que se actualizo fue
# hace mas de una hora
if (diferencia_seconds > 3600 or diferencia_seconds == -1):
  clientAusa.hmset("estadotrafico", estado_ausa_clave)
   
clientAusa.publish("estadotrafico", json.dumps(tramos_estados))

    #time.sleep(ausacfg["interval"])