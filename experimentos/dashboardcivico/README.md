#  Introduccion

scripts, carpeta donde estaran los scripts que extraen los datos de ws
webap, aplicacion web para consumo de los datos extraidos desde scripts


#  Instalacion

```bash
set variable de entorno
export VM_NODEJS_IP=""


NodeJS 10.3
### http://stackoverflow.com/questions/23393707/how-to-update-npm
apt-get install nodejs
npm install npm -g

Python 2.7


Redis 3.0.1
doc http://www.redis.io/download

wget http://download.redis.io/releases/redis-3.0.1.tar.gz
tar xzf redis-3.0.1.tar.gz
cd redis-3.0.1
make

src/redis-server
src/redis-cli
```

Estructura en OpenShift

scripts, nodo openshift con python-2.7 y base de datos redis
webapp, nodo openshift con nodejs y conexion a base de datos redis en nodo-scripts
