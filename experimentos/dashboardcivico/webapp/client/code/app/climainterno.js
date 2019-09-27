'use strict';

ss.event.on('climainterno', function(message) {
	console.log(message);
	var html = ss.tmpl['widgets-climaInterno'].render({
    	clima: message
	});
	return $("#climaInterno").html(html);
});

function cargoClima(){
	ss.rpc("climainterno.getClima");
}

// Llamar valor guardado en redis en la ultima hora para 
// Arrancar el dashboard hasta que entre la primer publicacion
cargoClima();