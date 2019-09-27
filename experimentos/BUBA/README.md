### Servidor

NodeJS

Node.js es un entorno de programación en la capa del servidor basado en el lenguaje de programación Javascript, con I/O de datos en una arquitectura orientada a eventos y basado en el motor Javascript V8.

[NodeJS](http://www.nodejs.org)
[Instalacion en RHEL/CentOS/Scientific Linux 6](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager)

Node.js and npm are available from the Fedora Extra Packages for Enterprise Linux (EPEL) repository. If you haven't already done so, first enable EPEL.

To check if you have EPEL, run

```
yum repolist
sudo rpm --import https://fedoraproject.org/static/0608B895.txt
sudo rpm -Uvh http://download-i2.fedoraproject.org/pub/epel/6/i386/epel-release-6-8.noarch.rpm
sudo yum install nodejs npm --enablerepo=epel
```

### DB - NOSQL

MongoDB

MongoDB is the leading NoSQL database, empowering businesses to be more agile and scalable. 

[Que es MongoDB?](http://www.mongodb.com/mongodb-overview)
[Install MongoDB on Red Hat Enterprise, CentOS, Fedora](http://docs.mongodb.org/manual/tutorial/install-mongodb-on-red-hat-centos-or-fedora-linux/)

Cuando usted instala los paquetes, puede decidir si instalar la versión actual o una versión anterior. Este paso proporciona los comandos para ambos.

```
touch /etc/yum.repos.d/mongodb.repo

[mongodb]
name=MongoDB Repository
baseurl=http://downloads-distro.mongodb.org/repo/redhat/os/x86_64/
gpgcheck=0
enabled=1

If you are running a 32-bit system, which is not recommended for production deployments, use the following configuration:

[mongodb]
name=MongoDB Repository
baseurl=http://downloads-distro.mongodb.org/repo/redhat/os/i686/
gpgcheck=0
enabled=1
```

Install the MongoDB packages and associated tools.¶

```
sudo yum install mongodb-org
sudo yum install mongodb-org-2.6.1 mongodb-org-server-2.6.1 mongodb-org-shell-2.6.1 mongodb-org-mongos-2.6.1 mongodb-org-tools-2.6.1
```

### Instalar dependencias de NodeJS con NPM

Bower is a package manager for the web. It offers a generic, unopinionated solution to the problem of front-end package management, while exposing the package dependency model via an API that can be consumed by a more opinionated build stack. There are no system wide dependencies, no dependencies are shared between different apps, and the dependency tree is flat.

```
npm install -g bower
```

### Instalar dependencias de la Aplicacion con package.json

```
npm install
```

### Instalar dependencias de bower.json

```
bower install
```

### Correr servidor en modo debug
Express uses the debug module internally to log information about route matches and application mode. To see this information, simply set the DEBUG environment variable to express:* when launching your app and the debug information will appear on the console.

[ExpressJS WEBPAGE](http://expressjs.com/guide.html#debugging-express)

```
DEBUG=express:* node server.js
```

### Correr servidor en modo Produccion


Forever: A simple CLI tool for ensuring that a given script runs continuously (i.e. forever).
Forever-Monitor: The core monitoring functionality of forever without the CLI

[FOREVER GITHUB](https://github.com/nodejitsu/forever)
[FOEVER-MONITOR GITHUB](https://github.com/nodejitsu/forever-monitor)

```
forever start -l boletaunica-prod.log server.js
forever list
```

### PID APP

```
ps axl | grep node
```

### Stopping and restarting with Forever

```
forever stop 0
kill number-pid
forever start -l boletaunica-prod2.log server.js
forever list
```
