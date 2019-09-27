#!/usr/bin/env python
# -*- coding: utf-8 -*-

import forecastio
from getcfg import opencfg, cfgredis
import redis
import time
import json
from datetime import datetime

cfg_redis = cfgredis()
climacfg = opencfg("config.cfg", "estadoclima")

redisWidgetMin = redis.StrictRedis(host=cfg_redis['host'], port=cfg_redis['port'], db=cfg_redis['db'], password=cfg_redis['pass'])
redisWidgetMax = redis.StrictRedis(host=cfg_redis['host'], port=cfg_redis['port'], db=cfg_redis['db'], password=cfg_redis['pass'])

estados = {
	"clearday" : "Dia despejado",
	"clearnight" :  "Noche despejada",
	"rain" : "Lluvia",
	"snow" :  "Nieve",
	"sleet" : "Aguanieve",
	"wind" : "Viento",
	"fog" : "Niebla", 
	"cloudy" : "Nublado", 
	"partlycloudyday" : "Dia parcialmente nublado",
	"partlycloudynight" : "Noche parcialmente nublada"
}

def yanketoargento(cielo):

	for key, value in estados.iteritems():
		if cielo.replace("-", "") == key:
			return value

def epochtime(epoch):

	result = time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(epoch))
	return result

def getCurrently(forecast):

	currently = forecast.currently()

	print currently

	send_climaCurrently = {
		"time": currently.time.strftime('%Y-%m-%d %H:%M:%S'),
		#"summary": currently.summary,
		"cielo": yanketoargento(currently.icon),
		"intensidadPrecipitacion" : currently.precipIntensity,
		"probabilidadPrecipitacion" : currently.precipProbability,
		"temperatura": currently.temperature,
		"sensacionTermica": currently.apparentTemperature,
		"humedad": currently.humidity
	}

	return send_climaCurrently


def getDaily(forecast):
	
	Daily = forecast.daily()
	send_climaDaily = {
		"temperaturaMin" : Daily.data[0].temperatureMin,
		"temperaturaMinTime": epochtime(Daily.data[0].temperatureMinTime),
		"temperaturaMax": Daily.data[0].temperatureMax,
		"temperaturaMaxTime": epochtime(Daily.data[0].temperatureMaxTime)
	}

	return send_climaDaily

def getHourly(forecast):

	hourly = forecast.hourly()
	send_climaHourly = []

	for data in hourly.data[0:7]:
		send_climaHourly.append({
			"time": data.time.strftime('%Y-%m-%d %H:%M:%S'),
			#"summary": data.summary,
			"cielo": yanketoargento(data.icon),
			"intensidadPrecipitacion": data.precipIntensity,
			"probabilidadPrecipitacion" : data.precipProbability,
			"temperatura": data.temperature,
			"sensacionTermica": data.apparentTemperature,
			"humedad": data.humidity
		})

	return send_climaHourly



def main():

	"""
		2 cosas,
		actualizar las tres variables bajo diferentes intervalos
		enviarla una por separado, y cuaando pido, las tres juntas
	"""

	api_key = climacfg['key']
	lat = climacfg['lat']
	lng = climacfg['long']
	
	forecast = forecastio.load_forecast(api_key, lat, lng)

	while True:
		
		forecast = forecastio.load_forecast(api_key, lat, lng)
		
		# Load los climas de ahora, del dia, y por hora
		clima_currently = getCurrently(forecast)
		clima_daily = getDaily(forecast)
		clima_hourly = getHourly(forecast)

		# Agregarle el max y min al publish por redis
		clima_publish = clima_currently
		clima_publish['temperaturaMax'] = clima_daily['temperaturaMax']
		clima_publish['temperaturaMin'] = clima_daily['temperaturaMin']
		
		timestamp_ahora = datetime.now()
		estado_clima_clave = {"estadoclima": json.dumps(clima_publish), "timestamp": timestamp_ahora}

		print clima_publish

		# Buscar el timestamp de la ultima vez que se actualizo la clave
		clima_clave = redisWidgetMin.hgetall("estadoclima")
		diferencia_seconds = -1

		if clima_clave:
			timestamp_clave = clima_clave["timestamp"]
			# Calcular hace cuanto tiempo fue
			timedelta = timestamp_ahora - datetime.strptime(timestamp_clave, "%Y-%m-%d %H:%M:%S.%f") 
			diferencia_seconds = timedelta.total_seconds()

		# Actualizar las claves de Redis si la ultima vez que se actualizo fue
		# hace mas de una hora
		if (diferencia_seconds > 3600 or diferencia_seconds == -1):
			redisWidgetMin.hmset("estadoclima", estado_clima_clave)

		redisWidgetMin.publish('estadoclima', json.dumps(clima_publish))

		#if redisWidgetMax.get("climadetails") == "true":
			# forecast = forecastio.load_forecast(api_key, lat, lng)		
		send_climaTodo = {}
		#send_climaCurrently = getCurrently(forecast)
		send_climaTodo.update({"Diario":clima_daily})
		send_climaTodo.update({"CadaHora":clima_hourly})
		# cuando va todo junto, tambien solicitar send_climaCurrently
		send_climaTodo.update({"Actualmente":clima_currently})

		#print send_climaTodo ENVIAR TODO ESTO COMO UN HASH 
		redisWidgetMax.hmset('CLIMAWIDGETMAX', {"clima":json.dumps(send_climaTodo)})
		time.sleep(climacfg["interval"])

if __name__ == '__main__':
	main()