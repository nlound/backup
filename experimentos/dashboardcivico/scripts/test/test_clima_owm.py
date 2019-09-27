#!/usr/bin/env python
# -*- coding: utf-8 -*-

import unittest
from clima import *

class Clima(unittest.TestCase):

  def test_clima(self):
    print 70*"-"
    print "UNIT TEST CLIMA {0}".format(API_CLIMA)
    clima = GET_CLIMA()
    self.assertIn(clima['cielo'], cielo.values())

if __name__ == '__main__':
    unittest.main()