#!/usr/bin/env python
# -*- coding: utf-8 -*-

from lxml import etree
from getcfg import opencfg, cfgredis
import urllib
import time
import json
import redis
from datetime import datetime

cfg_redis = cfgredis()
subtecfg = opencfg("config.cfg", "estadosubtes")
clientSubte = redis.StrictRedis(cfg_redis['host'], port=cfg_redis['port'], db=cfg_redis['db'], password=cfg_redis['pass'])
ws = subtecfg["wsdl"]

urlproxy = opencfg('config.cfg', 'proxy')['url']
proxies = {'http': urlproxy}

#while True:

try:
	result = urllib.urlopen(ws, proxies=proxies).read()
	parser = etree.XMLParser(strip_cdata=False)
	root = etree.XML(result, parser)
except Exception as e:
	print e
	root = []

estado_subtes = []
total_subtes = len(root)

for i in range(total_subtes):

	if i == 8:
		break

	nombre = root[i][0].text
	estado = root[i][1].text
	frecuencia = root[i][2].text

	# Guarda clave-valor con frecuencia de cada linea
	linea_subte = str(nombre.split(" ")[1].decode())
	clientSubte.set(linea_subte, frecuencia)

	# Si no hay info sobre la linea, asumimos que esta OK
	if len(estado) < 4:
		estado = "Normal"
	estado_subte = { "nombre": linea_subte,
					 "estado": estado,
					 "frecuencia": frecuencia }
	estado_subtes.append(estado_subte)

timestamp_ahora = datetime.now()
estados_clave = {"estadosubtes": json.dumps(estado_subtes), "timestamp": timestamp_ahora}

print estado_subtes

# Buscar el timestamp de la ultima vez que se actualizo la clave
subtes_clave = clientSubte.hgetall("estadosubtes")
diferencia_seconds = -1

if subtes_clave:
	timestamp_clave = subtes_clave["timestamp"]
	# Calcular hace cuanto tiempo fue
	timedelta = timestamp_ahora - datetime.strptime(timestamp_clave, "%Y-%m-%d %H:%M:%S.%f") 
	diferencia_seconds = timedelta.total_seconds()

# Actualizar las claves de Redis si la ultima vez que se actualizo fue
# hace mas de una hora
if (diferencia_seconds > 3600 or diferencia_seconds == -1):
	clientSubte.hmset("estadosubtes", estados_clave)

clientSubte.publish("estadosubtes", json.dumps(estado_subtes))
#	time.sleep(subtecfg["interval"])