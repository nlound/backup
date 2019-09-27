#!/usr/bin/env python
# -*- coding: utf-8 -*-

from setuptools import setup
import os

if os.environ.get('OPENSHIFT_PYTHON_DIR'):
    zvirtenv = os.path.join(os.environ['OPENSHIFT_PYTHON_DIR'], 'virtenv', 'bin', 'activate_this.py')
    execfile(zvirtenv, dict(__file__=zvirtenv))

setup(name='dashboard civico',
      version='1.0',
      description='',
      author='',
      author_email='',
      install_requires=['config', 'redis', 'nose', 'python-forecastio', 'suds', "lxml", 'tweepy', 'requests[security]', "googlemaps"]
      )
