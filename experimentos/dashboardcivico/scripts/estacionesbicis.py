#!/usr/bin/env python
# -*- coding: utf-8 -*-

import logging
import config
import time
import redis
import unicodedata

from suds.client import Client

from getcfg import opencfg, cfgredis
cfg_redis = cfgredis()

#redisBicis = redis.StrictRedis()
redisBicis = redis.StrictRedis(host=cfg_redis['host'], port=cfg_redis['port'], db=cfg_redis['db'], password=cfg_redis['pass'])


bicicfg = opencfg("config.cfg", "estacionesbicis")
#logging.basicConfig(level=logging.INFO)
#logging.getLogger('suds.client').setLevel(logging.DEBUG)

ID = bicicfg["id"]
ws = bicicfg["wsdl"]
user = bicicfg["user"]
pwd = bicicfg["pass"]


def remove_accents(input_str):
    nkfd_form = unicodedata.normalize('NFKD', input_str)
    return u"".join([c for c in nkfd_form if not unicodedata.combining(c)])


def main():

	
	client = Client(ws)

	#while True:

	result = client.service.BicicletasWS(ID, user, pwd)

	assert isinstance(result, type(client.service.BicicletasWS))

	if  hasattr(result, 'Bicicletas'):

		#print result

		if hasattr(result['Bicicletas'], "Error"):
			print "script status 504"
			time.sleep(60)
			result = client.service.BicicletasWS(ID, user, pwd)

		if hasattr(result['Bicicletas'], "Estaciones"):
			print "script status 200"
			length = len(result['Bicicletas']['Estaciones']['Estacion'])
			estaciones = []
		else:
			length = 0

		# http://redis.io/commands/hmget
		for index in range(length):

			estacion = result['Bicicletas']['Estaciones']['Estacion'][index]
			estacion_id = estacion["EstacionId"]
			
			redisBicis.hmset("estacion:{}".format(estacion_id), {
				"Id":estacion_id,
				"EstacionNombre": remove_accents(estacion["EstacionNombre"]),
				"BicicletaDisponibles": estacion["BicicletaDisponibles"],
				"Lugar": remove_accents(estacion["Lugar"]),
				"AnclajesTotales": estacion["AnclajesTotales"],
				"AnclajesDisponibles": estacion["AnclajesDisponibles"]
			})

		#time.sleep(bicicfg['interval'])

if __name__ == '__main__':
	main()
