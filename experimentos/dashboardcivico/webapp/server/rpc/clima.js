//'use strict';
// Server-side Code
var config = require('../../config.js')['redis'];
var client = require('redis').createClient(config["port"], config["host"]);

if (config["auth"]) 
  client.auth(config["auth"]);

exports.actions = function(req, res, ss) {
  // Example of pre-loading sessions into req.session using internal middleware
	req.use('session');

	return {
		detallado: function() {
			ss.db.hgetall('CLIMAWIDGETMAX', function(err, result){
				if (result){
					ss.publish.all('clima_detallado', JSON.parse(result['clima']))
				} else {
					ss.publish.all('clima_detallado', {'clima':[]})
				}
			});
		},
		getClima: function() {
			client.hgetall('estadoclima', function(err, object) {
		        var serializejson = JSON.parse(object["estadoclima"])
		        ss.publish.all('estadoclima', serializejson)
			});
		}
	}
}