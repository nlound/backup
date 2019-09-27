#!/usr/bin/env python
# -*- coding: utf-8 -*

from api_sensores import api
from getcfg import opencfg, cfgredis
api.log_requests = False

import time
import redis
import json
from datetime import datetime

cfg_redis = cfgredis()
redisTrafico = redis.StrictRedis(host=cfg_redis['host'], port=cfg_redis['port'], db=cfg_redis['db'], password=cfg_redis['pass'])
# checkear que en api.py este configurado el token de conexion

# Traduccion de ids de los data types a las esquinas correspondientes
data_type_translate = {4: "Paseo Colón",
					  5: "Balcarce",
					  6: "Defensa",
					  7: "Bolivar",
					  8: "Perú",
					  9: "Chacabuco",
					  10: "Piedras",
					  11: "Tacuarí"}

# Traduccion de ids a estado del transito
transito_translate = {"1": "Tránsito Fluido", 
                      "2": "Tránsito Lento",
                      "3": "Tránsito Con Demoras", 
                      "4": "Tránsito Congestionado"}

# El sensor que tiene el estado de transito de las 8
# cuadras de independencia entre paseo colon y la 9 de julio
id_sensor = 5

while True:
	
	# Array que publicaremos con el estado de cada esquina
	# sino metemos esto aca, siempre se va a enviar duplicado 
	estado_independencia = []

	last_data = api.Data.get_multiple_lasts(id_sensor)
	for data in last_data:
		id_data_type = data.attrs['id_data_type']
		esquina = data_type_translate[id_data_type]
		estado = data.attrs['data']
		estado_descripcion = transito_translate[data.attrs['data']]
		
		estado_independencia.append({"id_data_type": id_data_type,
									 "esquina": esquina,
									 "estado": estado,
									 "estado_descripcion": estado_descripcion})

	
	timestamp_ahora = datetime.now()
	estado_indep_clave = {"trafico_avIndep": json.dumps(estado_independencia), "timestamp": timestamp_ahora}

	print estado_independencia

	# Buscar el timestamp de la ultima vez que se actualizo la clave
	indep_clave = redisTrafico.hgetall("trafico_avIndep")
	diferencia_seconds = -1

	if indep_clave:
		timestamp_clave = indep_clave["timestamp"]
		# Calcular hace cuanto tiempo fue
		timedelta = timestamp_ahora - datetime.strptime(timestamp_clave, "%Y-%m-%d %H:%M:%S.%f") 
		diferencia_seconds = timedelta.total_seconds()

	# Actualizar las claves de Redis si la ultima vez que se actualizo fue
	# hace mas de una hora
	if (diferencia_seconds > 3600 or diferencia_seconds == -1):
		redisTrafico.hmset("trafico_avIndep", estado_indep_clave)

	redisTrafico.publish("trafico_avIndep", json.dumps(estado_independencia))

	time.sleep(60)