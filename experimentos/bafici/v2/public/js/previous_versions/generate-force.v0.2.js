var width = 1280,
	height = 720,
	padding = 10, // separation between same-color nodes
	clusterPadding = 25, // separation between different-color nodes
	maxRadius = 30,
	n = 50, // total number of nodes dejar 50 porque hay un bug al crear los nodos corregido en v0.3
	m = 6, // number of distinct clusters
	color = d3.scale
		.ordinal()
		.domain(m)
		.range( [ "#FEE412", "#FCD719", "#FACA1E", "#F8BE22", "#F6B124", "#F4A426" ] ),
	emotions = ["Sorpresa", "Felicidad","Indiferencia","Tristeza","Entusiasmo","Envidia"];		
	clusters = new Array(m); // The largest node for each cluster.



var nodes = d3.range(n).map(function() {
	var i = Math.floor(Math.random() * m), r = Math.sqrt((i + 1) / m * -Math.log(Math.random())) * maxRadius, d = {
		cluster : i,
		radius : 0, //necesito tener al menos los nodos que inicializan los clusters radio 0 para que no aparezcan.
		x : Math.cos(i / m * 2 * Math.PI) * 10 + width / 2 + Math.random(),
		y : Math.sin(i / m * 2 * Math.PI) * 10 + height / 2 + Math.random()
	};
	if (!clusters[i] || (r > clusters[i].radius))
		clusters[i] = d;
	return d;
});

var force = d3.layout.force()
					.nodes(nodes)
					.size([width, height])
					.gravity(0.005)
					.charge(0.005)
					.on("tick", tick)
					.start();

var svg = d3.select("body")
			.append("svg")
			.attr("width", "100%")
			.attr("height", "100%")
			.attr("viewBox", "0 0 1280 720");

var node = svg.selectAll("circle")
				.data(nodes)
				.enter()
				.append("circle")
				.attr("class", "node")
				.style("fill", function(d) {
					return color(d.cluster);
				})
				.call(force.drag);

node.transition()
	.duration(1000)
	.delay(function(d, i) {
		return i * .5;
	})
	.attrTween("r", function(d) {
		var i = d3.interpolate(0, d.radius);
		return function(t) {
		return d.radius = i(t);
	};
});

function tick(e) {
	node.each(cluster(3 * e.alpha * e.alpha))
		.each(collide(.08))
		.attr("cx", function(d) {
			return d.x;
		})
		.attr("cy", function(d) {
			return d.y;
		}
	);
}

// Move d to be adjacent to the cluster node.
function cluster(alpha) {
	return function(d) {
		var cluster = clusters[d.cluster];
		if (cluster === d)
			return;
		var x = d.x - cluster.x, y = d.y - cluster.y, l = Math.sqrt(x * x + y * y), r = d.radius + cluster.radius;
		if (l != r) {
			l = (l - r) / l * alpha;
			d.x -= x *= l;
			d.y -= y *= l;
			cluster.x += x;
			cluster.y += y;
		}
	};
}

// Resolves collisions between d and all other circles.
function collide(alpha) {
	var quadtree = d3.geom.quadtree(nodes);
	return function(d) {
		var r = d.radius + maxRadius + Math.max(padding, clusterPadding),
			nx1 = d.x - r,
			nx2 = d.x + r,
			ny1 = d.y - r,
			ny2 = d.y + r;

		quadtree.visit(function(quad, x1, y1, x2, y2) {
			if (quad.point && (quad.point !== d)) {
				var x = d.x - quad.point.x,
					y = d.y - quad.point.y,
					l = Math.sqrt(x * x + y * y),
					r = d.radius + quad.point.radius + (d.cluster === quad.point.cluster ? padding : clusterPadding);
		
				if (l < r) {
					l = (l - r) / l * alpha;
					d.x -= x *= l;
					d.y -= y *= l;
					quad.point.x += x;
					quad.point.y += y;
				}
			}
			return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
		});
	};
}

function update() {

	// Update the nodes…
	node = svg.selectAll("circle.node").data(nodes);

	// Enter any new nodes.
	node.enter().append("circle").attr("class", "node").attr("cx", function(d) {
		return d.x;
	}).attr("cy", function(d) {
		return d.y;
	}).attr("r", function(d) {
		return d.radius;
	}).style("fill", function(d) {
		return color(d.cluster);
	}).call(force.drag);

	// Exit any old nodes.
	node.exit().remove();

	// Restart the force layout.
	force.start();
}

function addNode(clust, rad) {
	nodes.push({
		cluster : clust,
		radius : rad,
		x : Math.cos(3 / 4 * 2 * Math.PI) * 200 + width / 2 + Math.random(),
		y : Math.sin(5 / 4 * 2 * Math.PI) * 200 + height / 2 + Math.random()
	});
	update();
}



// CODIGO DE ARDUINO
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
	
//		$("#sensor"+s).html(r);
//		$("#ay").html("ay: " + mensajes);
		
		mensajes[s] =  parseInt(r);
		
	} else {
		
		if ( msg.charAt(11) == 1){
			// mientras mantengo presionado el sensor
			if (mensajes[msg.charAt(9)] == 50){
				console.log ("Soltar el sensor y dejar de escuchar");
				// llamar solo una vez
				// sensorSoltado(msg.charAt(9),mensajes[msg.charAt(9)]);
			}

		}else{
			if (mensajes[msg.charAt(9)] != 0){
				sensorSoltado( msg.charAt(9) ,   mensajes[msg.charAt(9)]);
			}
		}
	}
	

});

function sensorSoltado(sensor,valor){
	addNode(sensor, valor);
	mensajes[sensor] = 0; //vacio el valor
}

