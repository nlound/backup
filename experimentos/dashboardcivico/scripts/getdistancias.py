#!/usr/bin/env python
# -*- coding: utf-8 -*-

import googlemaps
import redis
import time
import json
from getcfg import opencfg, cfgredis
from datetime import datetime

cfg_redis = cfgredis()
cfg_distancias = opencfg("config.cfg", "distancias")

redisDistancia = redis.StrictRedis(host=cfg_redis['host'], port=cfg_redis['port'], db=cfg_redis['db'], password=cfg_redis['pass'])

origen = {
	"lat": cfg_distancias['origen'][0],
	"lng": cfg_distancias['origen'][1]
}

distancias = {
	"pte_savedra": cfg_distancias["pte_savedra"],
	"retiro": cfg_distancias["retiro"],
	"constitucion": cfg_distancias["constitucion"]
}

client = googlemaps.Client(client_id=cfg_distancias["client_id"], client_secret=cfg_distancias['client_secret'])

distancias_publish = {}

#while True:

for key, value in distancias.iteritems():
	
	lat = value[0]
	lng = value[1]

	destino = {
		"lat": lat,
		"lng": lng
	}

	result = client.distance_matrix(origen, destino)

	if result["status"] == u"OK":
		duracion = result['rows'][0]['elements'][0]['duration']['text']
		distancias_publish[key] = duracion.split(" ")[0] + u'\u2019'
	else:
		distancias_publish[key] = ""
		continue

timestamp_ahora = datetime.now()
estado_distancias_clave = {"distanciastrafic": json.dumps(distancias_publish), "timestamp": timestamp_ahora}

print distancias_publish

# Buscar el timestamp de la ultima vez que se actualizo la clave
distancias_clave = redisDistancia.hgetall("distanciastrafic")
diferencia_seconds = -1

if distancias_clave:
	timestamp_clave = distancias_clave["timestamp"]
	# Calcular hace cuanto tiempo fue
	timedelta = timestamp_ahora - datetime.strptime(timestamp_clave, "%Y-%m-%d %H:%M:%S.%f") 
	diferencia_seconds = timedelta.total_seconds()

# Actualizar las claves de Redis si la ultima vez que se actualizo fue
# hace mas de una hora
if (diferencia_seconds > 3600 or diferencia_seconds == -1):
	redisDistancia.hmset("distanciastrafic", estado_distancias_clave)

redisDistancia.publish("distanciastrafic", json.dumps(distancias_publish))
#time.sleep(90)