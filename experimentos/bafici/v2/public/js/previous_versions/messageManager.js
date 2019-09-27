// socket recibe los mensajes que llegan a localhost:3000
var socket = io.connect('//localhost:3000');

socket.on('message', function(message) {
	var msg = message;
	var i = msg.indexOf(":");
	var _sensor = msg.charAt(i - 1);
	var _radio = msg.slice(i + 1, msg.length);
});
