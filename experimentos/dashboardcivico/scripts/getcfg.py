#!/usr/bin/env python
# -*- coding: utf-8 -*-

import os
import config

def opencfg(filename, namecfg=None):

	mydir = "/home/dashboard/dashboard/scripts/"
	if os.path.exists(mydir):
		fileopen = os.path.join(mydir, filename)
	else:
		fileopen = filename

	with file(fileopen) as f:
		
		cfg = config.Config(f)

		if namecfg:
			return cfg[namecfg]
		else:
			return cfg

def cfgredis():

	if os.environ.get('OPENSHIFT_PYTHON_DIR'):
	    zvirtenv = os.path.join(os.environ['OPENSHIFT_PYTHON_DIR'], 'virtenv', 'bin', 'activate_this.py')
	    execfile(zvirtenv, dict(__file__=zvirtenv))
	    cfg = {
				"host":os.environ['OPENSHIFT_REDIS_HOST'],
				"port": int(os.environ['OPENSHIFT_EXTREDIS_DB_PORT']),
				"db": int(os.environ['OPENSHIFT_EXTREDIS_DB_NAME']),
				"pass": os.environ["OPENSHIFT_EXTREDIS_DB_PASSWORD"]
	    	}
	    return cfg
	else:
		cfg = {"host": "localhost", "port": 6379, "db": 0, "pass": None}
		return cfg