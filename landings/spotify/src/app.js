const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const config = require('../gulp/config');
var basicauth = require('basic-auth');

console.log(process.env.NODE_ENV);
const routes = require('./api/routes');

const port = 3000;
const app = express();
const logger = morgan('short');

app.use('/status', function (req, res) {
    res.status(200).json({
      BUILD_VERSION: process.env.BUILD_VERSION,
      BUILD_DATE: process.env.BUILD_DATE,
      ENVIRONMENT: process.env.NODE_ENV,
      REGION: process.env.BUILD_REGION,
      status: 'ok'
    })
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger);

var auth = function (req, res, next) {
    //if (process.env.NODE_ENV === "prd" || process.env.NODE_ENV === "dev" || process.env.NODE_ENV === "local" || process.env.NODE_ENV == undefined){
    if (process.env.NODE_ENV === "prd" || process.env.NODE_ENV === "local" || process.env.NODE_ENV == undefined){
        return next();        
    }
    function unauthorized(res) {
      res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
      return res.sendStatus(401);
    };
  
    var user = basicauth(req);
  
    if (!user || !user.name || !user.pass) {
      return unauthorized(res);
    };
  
    if (user.name === 'tbny' && user.pass === 'Ver1z0n') {
      return next();
    } else {
      return unauthorized(res);
    };
};

var hideprod = function (req, res, next) {
  if (process.env.NODE_ENV === "prd"){
    res.sendfile('build/temp.html');        
  } else {
    return next();
  }
};

app.use(auth);  
//app.use(hideprod);  
app.use('/loaderio-4b7ec7bb618e5bc9e4b4a3cee7b6ff34', function (req, res, next) {
  res.send('loaderio-4b7ec7bb618e5bc9e4b4a3cee7b6ff34');
});

app.use('/streamline/api', routes);

app.use('/streamline',express.static('build'));
app.use('/',function (req, res, next) {
  res.redirect('/streamline');
});

app.listen(config.express.port, function () {
    console.log("Server is running on "+ config.express.port +" port");
});