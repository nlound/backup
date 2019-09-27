//'use strict';
// Server-side Code
var config = require('../../config.js')['redis'];
var client = require('redis').createClient(config["port"], config["host"]);

if (config["auth"]) 
  client.auth(config["auth"]);

// Define actions which can be called from the client using ss.rpc('demo.ACTIONNAME', param1, param2...)
exports.actions = function(req, res, ss) {
  
  // Example of pre-loading sessions into req.session using internal middleware
  req.use('session');

  return {

    getFrecuencia: function(){
      var subtes_estaciones = ["A", "B", "C", "D", "E", "H", "P", "U"]
      for(var i = 0; i<subtes_estaciones.length;i++){
        ss.db.get(subtes_estaciones[i], function(err, result){
          var result = {"estacion": result.split(":")[0], "frecuencia": result.split(":")[1]}
          ss.publish.all('lineas_subtes', result)
        })
      }
    },

    getSubtes: function(){
      client.hgetall('estadosubtes', function(err, object) {
        var serializejson = JSON.parse(object["estadosubtes"])
        ss.publish.all('estadosubtes', serializejson)
      });      
    }
  }

};