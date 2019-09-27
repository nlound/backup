'use strict';

ss.event.on('lineas_subtes', function(message){
  console.log("lineas_subtes:", message);
});

ss.event.on('estadosubtes', function(message){
  console.log(message);

  // Renderizar el widget chico y grande
  var html = ss.tmpl['widgets-subtes'].render();
  $("#subtesChico").html(html);
  $("#subtesGrande").html(html);

  // Armar la lista de problemas en el subte
  var i;
  for (i = 0; i < message.length; i++) {
    var clase = "good";
    if (message[i].estado != "Normal") {
      clase = "bad";
    }

    $('.lista_subte').append(ss.tmpl['model-subte'].render({linea: message[i], clase: clase}));
  }
});

ss.event.on('close', function(){
  console.log("cerramos los eventos de subtes");
});

function cargoSubtes(){
  ss.rpc("subtes.getSubtes");
}

// Llamar valor guardado en redis en la ultima hora para 
// Arrancar el dashboard hasta que entre la primer publicacion
cargoSubtes();
