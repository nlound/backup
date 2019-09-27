'use strict';

var estacionesARR = [];

ss.event.on('cercanas_amiestacion', function(message){
  var bicis =  message;
  console.log("cercanas_amiestacion:" , message)

  bicis.BicicletaDisponibles = extraCerosBicis(bicis.BicicletaDisponibles,2)

  var html = ss.tmpl['widgets-estacionbici'].render({
    estaciones: bicis
  });

  //estaciones.push(message);
  if (estacionesARR.length === 10){
    return $("#estacionbici").html(html);    
  }

})

ss.event.on('estacionbici', function(message){
  var bicis =  message;
  console.log("estacionbici:" , message)

  bicis.BicicletaDisponibles = extraCerosBicis(bicis.BicicletaDisponibles,2)

   var html = ss.tmpl['widgets-estacionbici'].render({
     estacion: bicis
   });
  
   return $("#estacionbici").html(html);

});

window.setInterval(function(){
  traigoEstaciones();
}, 60000);

/* funciones para invovcar si el widget esta presente */

// pide todas las estaciones.
function traigoEstaciones(){
  ss.rpc("bicis.misEstaciones");
}


function extraCerosBicis( num , cant ){
  return ("0000" + num).slice(-cant);
}