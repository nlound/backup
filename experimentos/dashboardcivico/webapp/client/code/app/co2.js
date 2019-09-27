'use strict';

ss.event.on('co2', function(message){
  console.log(message);
  var clase = "good";	

  if (message > 1000) { clase = "bad"; }

  var html = ss.tmpl['widgets-co2'].render({
  	co2: message,
  	clase: clase
  });
  $("#calidadAire").html(html);  
});

function cargoCo2(){
	ss.rpc("co2.getCo2");
}

// Llamar valor guardado en redis en la ultima hora para 
// Arrancar el dashboard hasta que entre la primer publicacion
cargoCo2();