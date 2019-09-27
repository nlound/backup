'use strict';

ss.event.on('distanciastrafic', function(message){

	console.log(message);
	var html = ss.tmpl['widgets-distancias'].render({
    	constitucion: message.constitucion,
    	pte_savedra: message.pte_savedra,
    	retiro: message.retiro
	});

	return $("#distancias").html(html);
});

function cargoDistancias(){
  ss.rpc("distancias.getDistancias");
}

// Llamar valor guardado en redis en la ultima hora para 
// Arrancar el dashboard hasta que entre la primer publicacion
cargoDistancias();