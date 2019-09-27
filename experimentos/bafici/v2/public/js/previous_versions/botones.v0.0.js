var socket = io.connect('http://localhost:3000');
var mensajes = [0,0,0,0,0,0];

//escucha todos los mensajes del arduino y storea en el ay.
socket.on('message', function(message) {

	/*
	/bSensor_0: [0,1] estado sensor 
	/sensor_0: [0-50] valor del sensor
	*/
	var esta = message.search("bS") ;

	var msg = message;
	var i = msg.indexOf(",");

	if ( esta <  0 ){

		var s = msg.charAt(i - 1);
		var r = msg.slice(i + 1, msg.length);
	
		$("#sensor"+s).html(r);
		$("#ay").html("ay: " + mensajes);
		
		mensajes[s] =  parseInt(r);
		
	} else {
		
		if ( msg.charAt(11) == 1){
			// mientras mantengo presionado el sensor
			$("#sensorMSG").html( "Sensor" + msg.charAt(9) + " MA: "+ mensajes);
			if (mensajes[msg.charAt(9)] == 50){
				console.log ("SOLTÁ CARAJO!!!!!!!!!!!!");
			}

		}else{
			if (mensajes[msg.charAt(9)] != 0){
				sensorSoltado( msg.charAt(9) ,   mensajes[msg.charAt(9)]);
			}
		}
	}
	

});

function sensorSoltado(sensor,valor){

	$("#mensaje").html( "solté el sensor " + sensor + " valiendo " + valor );
	mensajes[sensor] = 0; //vacio el valor

}
