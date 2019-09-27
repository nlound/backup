#!/usr/bin/env python
# -*- coding: utf-8 -*-

# python consumoenergetico.py > /dev/null 2>&1 &
# chmod a+x 

import time
import urllib
import json
import httplib
import os
import datetime
import types
import redis

from getcfg import cfgredis, opencfg
from datetime import datetime

cfg_redis = cfgredis()
cfg_ce = opencfg('config.cfg', 'consumoenergetico')

redisConsumo = redis.StrictRedis(host=cfg_redis['host'], port=cfg_redis['port'], db=cfg_redis['db'], password=cfg_redis['pass'])
API_LESS = cfg_ce["wsdl"]
httplib.HTTPConnection.debuglevel = 0

urlproxy = opencfg('config.cfg', 'proxy')['url']
proxies = {'http': urlproxy}

def GET(url):

    # hace peticion a api en amazon, y api clima
    result = []
    try:
        response = urllib.urlopen(url, proxies=proxies)
    except:
        print "failed host {0}".format(url)
        return 0
    else:
        if response.code == 200:
            result = dict(json.load(response))
            # print result
            if result.has_key('data') and result.get('total') == 1:
                return result['data'][0]['proc']["power"]
            elif result.has_key('weather') and result.has_key('main'):
                return result
            else:
                return 0
        elif response.code == 500:
            return 0
        else:
            return 0

def transform(array):

    dic = {}
    for key in range(len(array)):
        dic.update({array[key]: 0})
    return dic


def main(borneras_aire=[], borneras_luz=[], borneras_tomas=[]):

    while True:
        
        r_luz, r_aire, r_tomas = [], [], []
        suma_aire, suma_luz, suma_tomas, suma_total = 0, 0, 0, 0

        # loopear por borneras de aire
        for _id in borneras_aire.keys():
            power = GET(API_LESS.format(_id))
            if type(power) != types.NoneType:
                borneras_aire[_id] = power
                r_aire.append(power)
            else:
                r_aire.append(borneras_aire[_id])

        # loopear por borneras de luz
        for _id in borneras_luz.keys():
            power = GET(API_LESS.format(_id))
            if type(power) != types.NoneType:
                borneras_luz[_id] = power
                r_luz.append(power)
            else:
                r_luz.append(borneras_luz[_id])

        # loopear por borneras de tomas
        for _id in borneras_tomas.keys():
            power = GET(API_LESS.format(_id))
            if type(power) != types.NoneType:
                borneras_tomas[_id] = power
                r_tomas.append(power)
            else:
                r_tomas.append(borneras_tomas[_id])

        suma_aire = sum(r_aire)
        suma_luz = sum(r_luz)
        suma_tomas = sum(r_tomas)
        consumo = { "total": suma_total,
                    "tomas": suma_tomas,
                    "aires": suma_aire,
                    "luces": suma_luz }

        print consumo

        timestamp_ahora = datetime.now()
        estado_consumo_clave = {"consumoenergetico": json.dumps(consumo), "timestamp": timestamp_ahora}

        # Buscar el timestamp de la ultima vez que se actualizo la clave
        consumo_clave = redisConsumo.hgetall("consumoenergetico")
        diferencia_seconds = -1

        if consumo_clave:
            timestamp_clave = consumo_clave["timestamp"]
            # Calcular hace cuanto tiempo fue
            timedelta = timestamp_ahora - datetime.strptime(timestamp_clave, "%Y-%m-%d %H:%M:%S.%f") 
            diferencia_seconds = timedelta.total_seconds()

        # Actualizar las claves de Redis si la ultima vez que se actualizo fue
        # hace mas de una hora
        if (diferencia_seconds > 3600 or diferencia_seconds == -1):
            redisConsumo.hmset("consumoenergetico", estado_consumo_clave)

        redisConsumo.publish('consumoenergetico', json.dumps(consumo))
        time.sleep(cfg_ce['interval'])

if __name__ == '__main__':

    borneras_aire = transform(cfg_ce["borneras_aire"])
    borneras_luz = transform(cfg_ce["borneras_luz"])
    borneras_tomas = transform(cfg_ce["borneras_tomas"])

    main(borneras_aire, borneras_luz, borneras_tomas)