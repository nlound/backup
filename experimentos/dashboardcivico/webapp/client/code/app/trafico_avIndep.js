'use strict';

ss.event.on('trafico_avIndep', function(message){
  console.log(message);

  var html = ss.tmpl['widgets-trafico_avIndep'].render();
  $("#trafico_avIndep").html(html);


  // Armar la lista de tramos de Independencia
  var i;
  for (i = 0; i < message.length; i++) {
    var clase = "fluido";


    if ($.inArray(message[i].esquina, ["Paseo Colón", "Perú", "Tacuarí"]) >= 0) {
      switch (message[i].estado) {
        case "2":
          clase = "lento";
          break;
        case "3":
          clase = "demorado";
          break;
        case "4":
          clase = "congestionado";
          break;  
      }

      $('.lista_independencia').append(ss.tmpl['model-independencia'].render({esquina: message[i], clase: clase}));

    }
  }
});

function cargoTrafico(){
  ss.rpc("trafico_avIndep.getTrafico");
}

// Llamar valor guardado en redis en la ultima hora para 
// Arrancar el dashboard hasta que entre la primer publicacion
cargoTrafico();