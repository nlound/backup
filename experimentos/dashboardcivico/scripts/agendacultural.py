#!/usr/bin/env python
# -*- coding: utf-8 -*-

from lxml import etree
from urllib import urlencode
from datetime import datetime
from dateutil.relativedelta import relativedelta
from getcfg import opencfg, cfgredis

import urllib2
import redis
import json
import unicodedata
import time

cfg_redis = cfgredis() 
redisAgenda = redis.StrictRedis() #(host=cfg_redis['host'], port=cfg_redis['port'], db=cfg_redis['db'], password=cfg_redis['pass']
agendacfg = opencfg("config.cfg", "agendacultural")

url = agendacfg["wsdl"] 

def remove_accents(input_str):
    nkfd_form = unicodedata.normalize('NFKD', input_str)
    return u"".join([c for c in nkfd_form if not unicodedata.combining(c)])

def query_args(inicio, final):
	
	args_urlencode = "&IdEvento=&IdEstadoEvento=2&Titulo=&Resumen=&Descripcion=&FechaInicio={}&FechaFin={}&FechaPublicacionDesde=&FechaPublicacionHasta=&FechaProximoEventoDesde=&FechaProximoEventoHasta=&DestacadoHome=&MarcaProximosEventos=&Imagen=&AlbumFlickr=&Facebook=&Youtube=&Twitter=&IdEventoPadre=&IdEventosRelacionados=&Hora=&Minutos=&IdTipoEvento=&DestacadoBoxPrimario=&Latitud=51.503307&Longitud=-0.127711&OrdenarPor=FechaFin&Orden=ASC&Limit=50&Offset=0".format(inicio, final)

	return args_urlencode


def GET_AGENDA(url, start, end):

	try:
		args_urlencode = query_args(start, end)
		print url+args_urlencode
		request = urllib2.Request(url+args_urlencode)
		result = urllib2.urlopen(request).read()
		parser = etree.XMLParser(strip_cdata=False)
	except:
		result = ''
	else:
		if result:
			all_eventos = etree.XML(result, parser)
			return all_eventos
		else:
			all_eventos = []
			return all_eventos

def event_append(lista, evento):

	lista.append({
		"id": evento[0].text,
		"nombre": evento[2].text,
		"resumen" : remove_accents(evento[3].text),
		"lugares" : evento[28].text,
		"inicio": evento[5].text,
		"fin": evento[6].text
	})


def main():

	today = datetime.today().strftime('%Y-%m-%d')
	next30_days = (datetime.today() + relativedelta(days=30)).strftime('%Y-%m-%d')
	tomorrow = (datetime.today() + relativedelta(days=1)).strftime('%Y-%m-%d')
	max_eventos = agendacfg["max_eventos"]

	all_eventos = GET_AGENDA(url, today, next30_days)
	length = len(all_eventos)
	list_today = []
	next_days = []

	if all_eventos is not None:
		
		for evento in all_eventos[0:max_eventos]:

			if evento[6].text == today:
				event_append(list_today, evento)
			else:
				event_append(next_days, evento)

		length_eventos = len(next_days)
		redisAgenda.set('length_eventos', length_eventos)

		for index in range(length_eventos):
			
			redisAgenda.hmset('evento:{}'.format(index), next_days[index])

		redisAgenda.publish("eventos_hoy", json.dumps(list_today))

	else:

		print "fall"


if __name__ == '__main__':
	while True:
		main()
		time.sleep(agendacfg.interval)