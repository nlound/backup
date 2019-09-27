# instalacion

```bash

pip install virtualenv
virtualenv --no-site-packages env
source env/bin/activate

apt-get install libxml2-dev libxslt-dev python-dev
python setup.py install



python consumoenergetico.py
python clima.py

nosetests . 
or
nosetests test_consumoenergetico.py
nosetests test_clima.py

export user_proxy="http://user@buenosaires.gob.ar:pass@10.200.72.33:8080"
forever start estadotrafico.js


Feed Clima: 10 sec
Feed Consumo: 10 sec
Feed Bicis: 5 min
Feed Ausa: 3 min
Feed Subtes: 7 min
Feed Trafico Independencia: 2 min
Distancias: 3 min

```
