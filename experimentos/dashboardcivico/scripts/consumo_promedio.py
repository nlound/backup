#!/usr/bin/env python
# -*- coding: utf-8 -*-

import redis
from getcfg import cfgredis, opencfg
cfg_redis = cfgredis()
cfg_ce = opencfg('config.cfg', 'consumoenergetico')
redisPromedio = redis.StrictRedis(host=cfg_redis['host'], port=cfg_redis['port'], db=cfg_redis['db'], password=cfg_redis['pass'])
urlproxy = opencfg('config.cfg', 'proxy')['url']
proxies = {'http': urlproxy}

from time import *
from datetime import *

import calendar
import json
import urllib


def listhrs():
	""" genero un diccionario con un rango de hora de 8 a 20"""
	dic = {}
	for key in range(8, 21):
		dic.update({key:""}) # random.randrange(180, 250)
	return dic

def transform(array):
	"""
		entra un array y sale un diccionario que dispone de clave el valor del array y como valor una array
	"""
	rangehrs = listhrs()
	dic = {}
	for key in range(len(array)):
		dic.update({array[key]: rangehrs})
	return dic

def calendar_month(mm):
	"""
		genero un calendario con los dias y sus correspondientes fechas de un mes determinado
	"""
	dias_jun = {'dom': [], 'jue': [], 'lun': [], 'mar': [], 'mier': [], 'sab': [], 'vier': []}
	month = calendar.monthcalendar(2015, mm)

	for semana in month:
		dias_jun['lun'].append(semana[0])
		dias_jun['mar'].append(semana[1])
		dias_jun['mier'].append(semana[2])
		dias_jun['jue'].append(semana[3])
		dias_jun['vier'].append(semana[4])
		dias_jun['sab'].append(semana[5])
		dias_jun['dom'].append(semana[6])

	return month, dias_jun

def range_pochtime(**args):
	"""
		1433750400000 1433751300000
		funcion para calcular epochtime en milisegundos segun una hora y fecha determinada
		ejemplo, para el dia lunes, entre 8hs y 20hs, dame todos los rango de \
		epochtime en milisegundos, de 0 y 15minutos de cada hora
	"""
	update = {}

	if args:
		min_ini = args['start_min']
		min_fin = args['end_min']
		hra_ini = args['start_hra']
		hra_fin = args['end_hra']
		mes = args['mm']
		dia = args['dd']

	for hra in range(hra_ini, hra_fin+1):

		dt_ini = datetime(2015, mes, dia, hra, min_ini, 0, 0)
		dt_fin = datetime(2015, mes, dia, hra, min_fin, 0, 0)
		inicio = int(mktime(dt_ini.timetuple()) * 1000)
		fin = int(mktime(dt_fin.timetuple()) * 1000)
		
		update[hra] = [inicio, fin]

	return update


def lastdays(**args):
	"""
		lastdays(mm="", daysmm="", lastmm="", dayslastmm="")
		retiramos los ultimos 30 dias (con semana, lun, mart, mier, juev, vier)
	"""
	if args:
		lastmm = args['lastmm']
		dayslastmm = args['dayslastmm']
		mm = args['mm']
		daysmm = args['daysmm']

	mayo_len = ""
	lola = []
	total = []
	today = int(strftime("%d-%m-%Y").split('-')[0])

	for value in lastmm+mm:
		for key in value:
			if key != 0:
				total.append(key)

	total = total[today:today+31]

	for i, v in enumerate(total):
		if v == 31 or v == 30:
			mayo_len = i

	junio_len = total[mayo_len:len(total)]
	total_days = []
	total_days = {'dom': [], 'jue': [], 'lun': [], 'mar': [], 'mier': [], 'sab': [], 'vier': []}
	
	for i in total[0:mayo_len+1]:
		for key, value in dayslastmm.iteritems():
			if i in value:
				total_days[key].append(i)

	for i in junio_len:
		for key, value in daysmm.iteritems():
			if i in value:
				total_days[key].append(i)
			if today in value:
				day = key

	return day, total_days


def filtro(proc):
	"""
		filtro vrms entre 190 y 240, # - irms > 0 , # - power > 0
	""" 
	if int(proc['irms']) < 0 or proc['power'] < 0:
		return 0

	if int(proc['vrms']) in range(190, 240):
		return proc['power']
	else:
		return 0.0

def calpromedio(data):
	"""
		recorro todos los datos y retiro el promedio total
	"""
	cal_promedio = []
	if data:
		for d in data['data']:
			cal_promedio.append(filtro(d["proc"]))

		if len(cal_promedio) != 0:
			return (sum(cal_promedio) / len(cal_promedio))
		else:
			raise("sin datos en promedio ")
	else:
		raise("sin datos")

import random
def getrandom():
	datos = {"total": 2,
	"proc": {
		"vrms": random.random(),
		"power": random.random(),
		"power_unit": "W",
		"irms_unit": "A",
		"irms": random.random(),
		"vrms_unit": "V"
	}}
	return datos

def get(_id, desde, hasta):
	"""
		hace un request para traer los datos
	"""
	url = "http://{0}/v1/circuits/{1}/latest/{2}/{3}".format(cfg_ce['ipwsdl'], _id, desde, hasta)
	print "cargando... url {} id".format(url)

	try:
		res = urllib.urlopen(url, proxies=proxies)
		filejson = json.load(res)
	except:
		filejson = {}
		filejson['total'] = 0

	if filejson['total'] > 0:
		promedio = calpromedio(filejson)
		return promedio
	else:
		return 0.0

def check_values(listborneras):
	"""
		me fijo que valores no tienen promedio, para uqe iteren de nuevo
	""" 
	delkeys = []
	notindex = {}

	for key, value in listborneras.iteritems():
		notindex[key] = []
		for index, prom in value.iteritems():
			if prom == 0.0 or prom == None:
				notindex[key].append(index)

	for key, value in notindex.iteritems():
		if len(value) != 0:
			copy_value = value
			notindex[key] = {}
			for i in value:
				notindex[key][i] = ''
		else:
			delkeys.append(key)

	for key in delkeys:
		del notindex[key]

	return notindex


def calfechas():
	"""
		genero calendario de fechas de los ultimos 30 dias, segun la fecha del dia de hoy
	"""
	mes_actual = int(strftime("%d-%m-%Y").split('-')[1])
	actual, actual_dias = calendar_month(mes_actual)
	mespasado, mespasado_dias = calendar_month(mes_actual-1)
	day, ultimos30dias = lastdays(mm=actual, daysmm=actual_dias, lastmm=mespasado, dayslastmm=mespasado_dias)
	ultimasfechas = ultimos30dias[day]
	return fechaspormes(ultimasfechas, mes_actual), mes_actual

def mergetotal(total):
	""" genero un merge de todos los resultados """
	first = total[0]
	length = len(total)-1
	if not length == 0:
		for i in range(length):
			for circuit, result in total[i].iteritems():
				for hra, value in result.iteritems():
					first[circuit][hra] = value
	else:
		return total[0]
	return first
	
def sumo(listborneras):
	"""genero suma entre arrays de diferentes horas"""
	prom_hra = {}
	loc = []
	for i in range(8, 21):
		for key in listborneras.keys():
			loc.append(listborneras[key][i])
		prom_hra[str(i)] = sum(loc)
		loc = []
	return prom_hra

def calculototal(listborneras, **borneras):
	"""calculototal([], aire=borneras_aire_5t, luz=borneras_luz_5t, corrientes=borneras_tomas_5t)"""
	promedios = {"aire": [], "luz": [], "corrientes": []}
	listborneras_corrientes = {}
	listborneras_luz = {}
	listborneras_aire = {}
	for circuit, value in listborneras.iteritems():
		if circuit in borneras.get('corrientes'):
			listborneras_corrientes[circuit] = {}
			for hra, result in value.iteritems():
				listborneras_corrientes[circuit][hra] = result
		elif circuit in borneras.get('luz'):
			listborneras_luz[circuit] = {}
			for hra, result in value.iteritems():
				listborneras_luz[circuit][hra] = result			
		elif circuit in borneras.get('aire'):
			listborneras_aire[circuit] = {}
			for hra, result in value.iteritems():
				listborneras_aire[circuit][hra] = result
		else:
			break

	promedios['luz'] = sumo(listborneras_luz)
	promedios['aire'] = sumo(listborneras_aire)
	promedios['corrientes'] = sumo(listborneras_corrientes)
	return promedios

def fechaspormes(ultimasfechas, mes_actual):
	"""
		dividido las fechas por mes
	"""
	length = 0
	first = ultimasfechas[0]
	total = ultimasfechas[0:len(ultimasfechas)-1]
	result = {mes_actual-1: [], mes_actual: []}

	while length != 4:
		if first > total[length]:
			result[mes_actual].append(total[length])
		else:
			result[mes_actual-1].append(total[length])
		length += 1

	return result

def set_redis(key, value):
	"""
		seteo las variables de promedios en redis
	"""
	for hra, promedio in value.iteritems():
		set_key = "{0}:{1}".format(key, hra)
		#print set_key, promedio
		redisPromedio.set(set_key, promedio)

if __name__ == '__main__':

	borneras_aire_5t = ["9061", "9062", "9063"]
	borneras_luz_5t = ["9014", "9016"]
	borneras_tomas_5t = ["9013", "9015", "9064", "9071", "9072", "9074", "9075"]
	
	ultimasfechasmes, mes_actual = calfechas()
	ultimasfechas = ultimasfechasmes[mes_actual-1] + ultimasfechasmes[mes_actual]

	listborneras = {}
	listbornerastwo = {}
	totalresult = []

	for bornera in [borneras_aire_5t, borneras_tomas_5t, borneras_luz_5t]:
		listborneras.update(transform(bornera))

	for dd in reversed(ultimasfechas):
		
		if len(listborneras) != 0:
			
			listbornerastwo = {}

			if dd in ultimasfechasmes[mes_actual]:
				last_week_range_time = range_pochtime(mm=mes_actual, dd=dd, start_min=0, end_min=15, start_hra=8, end_hra=20)
			else:
				last_week_range_time = range_pochtime(mm=mes_actual-1, dd=dd, start_min=0, end_min=15, start_hra=8, end_hra=20)

			for circuit, rango in listborneras.iteritems():
				listbornerastwo[circuit] = {}
				for hra, rangetime in last_week_range_time.iteritems():
					if hra in rango.keys():
						promedio = get(circuit, rangetime[0], rangetime[1])
						print (circuit, hra, promedio)
						listbornerastwo[circuit][hra] = promedio
		else:
			break

		totalresult.append(listbornerastwo)
		listborneras = check_values(listbornerastwo)

	result = mergetotal(totalresult)
	promedios = calculototal(result, aire=borneras_aire_5t, luz=borneras_luz_5t, corrientes=borneras_tomas_5t)

	for key, value in promedios.iteritems():
		if "corrientes" == key:
			set_redis(key, value)
		if "aire" == key:
			set_redis(key, value)
		if "luz" == key:
			set_redis(key, value)