/*
 *	v0.5 
 * 	add: latido al alcanzar maxRadius
 *  add: cambiar estilo al ingresar al grafico
 *  add: cambiar estilo al soltar el pulsador
 */

var size_stroke_inicial;
var alpha_stroke_inicial;
var color_stroke_inicial;

var alpha_circulo_inicial;
var color_circulo_inicial;

var duration = 60;




// variables de manejo de socket.io - arduino
var socket = io.connect('http://localhost:3000');
var mensajes = [0,0,0,0,0,0]; // valores de los mensajes 
var sensores = [0,0,0,0,0,0]; // estado de los sensores
var pointers = [0,0,0,0,0,0]; // pointers a los sensores
var position = [0,0,0,0,0,0]; // pointers a los sensores

var	clusters = new Array(m),

	entrada = [(width/m)*0,(width/m)*1,(width/m)*2,(width/m)*3,(width/m)*4,(width/m)*5]; 

// Inicializacion de nodos 
var nodes = d3.range(n).map(function(data) {
	var i = data,
		r = Math.sqrt((i + 1) / m * -Math.log(Math.random())) * maxRadius,
		d = {
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
					.gravity(0.05)
					.charge(0.05)
					.on("tick", tick)
					.start();

var svg = d3.select("#force")
			.append("svg")
			.attr("width", "100%")
			.attr("height", "100%")
			.attr("viewBox", "0 0 1280 720");

	// bounding box
	svg.append("svg:rect")
		.attr("width", "100%")
		.attr("height", "100%")
		.attr("viewBox", "0 0 1280 720")
	    .style("opacity", "0");

var node = svg.selectAll("circle")
				.data(nodes)
				.enter()
				.append("circle")
				.attr("class", "node")
				.style("fill", function(d) {
					return color(d.cluster);
				})
				.call(force.drag);


function tick(e) {
	node.each(cluster(.5 * e.alpha * e.alpha * e.alpha))
		.each(collide(.08))
		.attr("cx", function(d) {
			return d.x;
		})
		.attr("cy", function(d) {
			return d.y;
		}
	);

	//bounding box
	node.attr("cx", function(d) { return d.x = Math.max(maxRadius, Math.min(width - maxRadius, d.x)); })
        .attr("cy", function(d) { return d.y = Math.max(maxRadius, Math.min(height - maxRadius, d.y)); });  	
	
}

// mueve el nuevo nodo al cluster correspondiente
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

// resuelve colisiones entre el nuevo nodo y los demas
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


// Updatea, Enter nuevos nodos, Exit viejos nodos, y restartea el force layout
function update() {

	node = svg.selectAll("circle").data(nodes);

	node.enter().append("circle").attr("cx", function(d) {
		return d.x;
	}).attr("cy", function(d) {
		return d.y;
	}).attr("r", function(d) {
		return d.radius;
	}).style("fill", function(d) {
		return color(d.cluster);
	}).call(force.drag);

	/*
	
	node.transition()
	    .duration(750)
	    .delay(function(d, i) { return i * 5; })
	    .attrTween("r", function(d) {
	      var i = d3.interpolate(0, d.radius);
	      return function(t) { return d.radius = i(t); };
	    });
	
	*/

	node.exit().remove();
	
	force.on("tick", tick);

	force.start();
}

//Agrega un nuevo nodo al grafico
function addNode(clust, rad) {

	nodes.push({
		cluster : clust,
		radius: rad,
		x : width - (entrada[clust]), // coordenadas desde donde entran
		y : height
	});
	update();
}

//escucha todos los mensajes del arduino
socket.on('message', function(message) {

	var msgSensor = message.search("bS");
	var msg = message;
	var i = msg.indexOf(",");

	if ( msgSensor >  0 ){
		if ( msg.charAt( i + 1 ) == 1 && sensores[msg.charAt( i - 1 )] == 0){
			sensores[msg.charAt( i - 1 )] = 1;
			addNode(msg.charAt( i - 1 ), 1);
			pointers[msg.charAt( i - 1 )] = svg.select("circle:last-child");
			position[msg.charAt( i - 1 )] = nodes.length - 1;

			pointers[msg.charAt( i - 1 )]
				.style("fill", "white")
				.style("stroke-width", 10)
				.style("stroke", function(d) {
					return color(d.cluster);
				});
				
		}
		
		if ( msg.charAt( i +  1 ) == 0 && sensores[msg.charAt( i - 1 )] == 1){
			sensores[msg.charAt( i - 1 )] = 0;
			
			pointers[msg.charAt( i - 1 )]
				.transition()
				.style("stroke-width", 0)
				.style("fill", function(d) {
					return color(d.cluster);
				});

			// pointers[msg.charAt( i - 1 )]
	    		// .style("stroke", null);
		}

	} else {

		if ( sensores[msg.charAt( i - 1 )] == 1){
			
			if ( msg.slice(i + 1, msg.length) < maxRadius){
			
				var radio = translate( msg.slice(i + 1, msg.length) , 1 , maxRadius , minRadius, maxRadius);
	
				pointers[msg.charAt( i - 1 )]
					.transition()
					.duration(0)
					.attr("r", radio );
				
				nodes [ position[msg.charAt( i - 1 )]]["radius"] = radio;
				console.log ("updating nodes");
				

				if (radio >= 49){

				pointers[msg.charAt( i - 1 )]
					.transition()
					.duration(duration)
					.style("stroke-width", 0)
					.attr("r", radio + 15 )
					.ease("out")
					.each("end", animo);
				
				}

			} else {


			}
		}

	}
});

function animo(){
    d3.select(this)
      .transition()
        .duration(1500)
        .ease("in")
        .attr("r", maxRadius);
};

// limita y escala un numero dado un rango limitado.
function translate(sensor_val, in_from, in_to, out_from, out_to) {
    var out_range = out_to - out_from;
    var in_range = in_to - in_from;
    var in_val = sensor_val - in_from;
    val = ( in_val / in_range) * out_range; 
    var out_val = out_from+val;
    return out_val;
}

// Control de gravedad.
 
var gui = new dat.GUI({autoPlace: false});

var customContainer = document.getElementById('control');
customContainer.appendChild(gui.domElement);

var config = {'charge':-300, 'gravity':0.1, 'collide':0.08};

var charger = gui.add(config, "charge", -500, 0);
charger.onChange(function(value) {
    force.charge(value);
    force.start();
    });

var graver = gui.add(config, 'gravity', 0, 1);
graver.onChange(function(value) {
    force.gravity(value);
    force.start();
    });

var collider = gui.add(config, 'collide', 0.01, 2);
collider.onChange(function(value) {
    collide(value);

    //force.collide(value);
    force.start();
    });

var stats = new Stats();
stats.setMode(0);

stats.domElement.style.position = 'absolute';
stats.domElement.style.right = '0px';
stats.domElement.style.top = '-0.2px';
stats.domElement.style.zIndex = '500';

document.body.appendChild( stats.domElement );

setInterval( function () {

    stats.begin();

    // your code goes here

    stats.end();

}, 1000 / 60 );
    