#!/usr/bin/env python
# -*- coding: utf-8 -*-

import unittest
from consumoenergetico import *

borneras_aire = transform(["9061", "9062", "9063"])
borneras_luz = transform(["9014", "9016"])
borneras_tomas = transform(["9013", "9015", "9064", "9071", "9072", "9074", "9075"])

class ConsumoEnergetico(unittest.TestCase):

  def test_aire(self):
    print 70*"-"
    print "BORNERA AIRE {0}".format(API_LESS.format(_id))
    for _id in borneras_aire.keys():
        power = GET(API_LESS.format(_id))
        self.assertEqual(type(power), float)

  def test_luz(self):
    print 70*"-"
    print "BORNERA LUZ {0}".format(API_LESS.format(_id))
    for _id in borneras_luz.keys():
        power = GET(API_LESS.format(_id))
        self.assertEqual(type(power), float)

  def test_tomas(self):
    print 70*"-"
    print "BORNERAS CORRIENTES {0}".format(API_LESS.format(_id))
    for _id in borneras_tomas.keys():
        power = GET(API_LESS.format(_id))
        self.assertEqual(type(power), float)

if __name__ == '__main__':
    unittest.main()