FROM node:boron
MAINTAINER  David Holm <david.holm@rga.com>

ARG ENV
# Create app directory
RUN mkdir -p /opt/node/app
WORKDIR /opt/node/app

# Install app dependencies
RUN npm i gulp-cli -g
RUN npm i pug-doc -g
RUN npm i pug-doc-markdown -g 

COPY package.json /opt/node/app/
RUN npm install

# Bundle app source
COPY . /opt/node/app/
RUN npm install -g gulp
ENV NODE_ENV=${ENV:-dev}
ENV BUILD_VERSION=default
ENV BUILD_DATE=default
RUN /bin/bash -c "gulp build"

EXPOSE 5000

CMD [ "node", "src/app.js" ]