'use strict';
ss.event.on('consumoenergetico', function(message){
	var consumo_actual = message;

	// Render todo dentro del callback del RPC. 
	ss.rpc("consumoenergetico.calcularPromedios", function(result){
		var estados = {"luces": "good", "tomas": "good", "aires": "good"};

		// Comparar el consumo actual con los promedios por categoria
		// Y setear los estados correspondientes
		if (consumo_actual.luces > result.luces) { estados.luces = "bad"; }
		if (consumo_actual.tomas > result.tomas) { estados.tomas = "bad"; }
		if (consumo_actual.aires > result.aires) { estados.aires = "bad"; }

		// Agrego los extra ceros aca porque necesito que sean numeros para
		// hacer la comparacion con los promedios
		for(var k in consumo_actual) {
			consumo_actual[k] = extraCerosConsumo( Math.round(consumo_actual[k]) , 4 )
		}

		// Render el html de consumo pasando las variables relevantes
		var html = ss.tmpl['widgets-consumoenergetico'].render({
			consumo: consumo_actual,
			estados: estados
		});
		
		return $("#consumoenergetico").html(html);
	});
})

function extraCerosConsumo( num , cant ){
	return ("0000" + num).slice(-cant);
}

function cargoConsumo(){
  ss.rpc("consumoenergetico.getConsumo");
}

// Llamar valor guardado en redis en la ultima hora para 
// Arrancar el dashboard hasta que entre la primer publicacion
cargoConsumo();