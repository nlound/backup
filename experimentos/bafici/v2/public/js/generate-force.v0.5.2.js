/*
 *	v0.5.2
 * 	
 *  se quitó el latido al circulo con maxRadius
 * 	se movieron las variables de statistics a config.js
 *	se corrigieron coordenadas de entrada
 *  se agrega exit por Overflow.
 * 
 */

//Si no pasa en tiempoDeEspera segundos nada llamo a pasivo
var salvaPantallas;

var    header = new TimelineMax({paused:true});

        header.from(logo, .95, {css:{x:-250,y:150, z:0.01, zoom: 1.5},ease:Quad.easeInOut});
        header.from(objetosSlides.tag, 1.75, {css:{opacity:0, y:220, z:0.01},ease:Quad.easeInOut});

        header.staggerFrom(emociones, 0.8, {css:{opacity:0}}, 0.03, "emociones");
        header.staggerFrom(emociones, 0.8, {rotationY:"90deg", transformOrigin: "50% 50% -80", ease:Quad.easeInOut}, 0.1, "emociones");


function quitoOverflow (){
		node = svg.select(".nuevo").remove();
		nodes.splice(6,1);
		node = svg.selectAll(".nuevo").data(nodes);
		update();
}

function statistics (nodos,radio,sCan, sCir){
	var cond = "";
	var sacado = "";
	
	if ( limitePorcentaje < ( sCir * 100 / sCan )){
		cond = "pop porc";
		quitoOverflow(); 
	}
	
	if  (limiteNodos < nodos){
		cond = "pop cant";
		quitoOverflow(); 
	}	
	
	if (muestroWidgets){
		monASD.innerHTML = "<small>Nodos: " + nodos +
							"<br>Radio: " + radio +
							"<br>Sup. Canvas: " + sCan +
							"<br> Sup. Circulos: " + sCir + "(" + (sCir * 100 / sCan).toFixed(2) +" %) </small>" + cond;
	}
}

var socket = io.connect('http://localhost:3000');
	mensajes = [0,0,0,0,0,0], // valores de los mensajes 
	sensores = [0,0,0,0,0,0], // estado de los sensores
	pointers = [0,0,0,0,0,0], // pointers a los sensores
    position = [0,0,0,0,0,0], // pointers a los sensores
	clusters = new Array(m),
	offset = 100,
	

	entrada = [offset,(width/m)*1+offset,(width/m)*2+offset,(width/m)*3+offset,(width/m)*4+offset,(width/m)*5+offset]; 


	// Inicializacion de nodos 
	nodes = d3.range(n).map(function(data) {
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
					.friction(.7)
					.linkStrength(1)
					.on("tick", tick)
					.start();

var svg = d3.select("#force")
			.append("svg")
			.attr("width", "100%")
			.attr("height", "100%")
			.attr("shape-rendering","optimizeSpeed")
			.attr("color-rendering","optimizeSpeed")
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
	node.enter().append("circle").attr("class", "nuevo").attr("cx", function(d) {
		return d.x;
	}).attr("cy", function(d) {
		return d.y;
	}).attr("r", function(d) {
		return d.radius;
	}).style("fill", function(d) {
		return color(d.cluster);
	});
	node.exit().transition().duration(1000).style("opacity",0).remove();
	force.start();
}

//Agrega un nuevo nodo al grafico
function addNode(clust, rad) {
	nodes.push({
		cluster : clust,
		radius: rad,
		x : entrada[clust], // coordenadas desde donde entran
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

			// se apreto un sensor
			clearTimeout (salvaPantallas);

			console.log("NL: Sensor apretado.");
			$("#force-demo").hide();
			$("#force").show();
			baficiActivo();
			
			pointers[msg.charAt( i - 1 )] //creo el nodo con los valores iniciales
				.style("stroke-width", 5)
				.style("stroke-alpha", 1)			
				.style("stroke", "white")
				.style("fill", "white")
				.style("alpha", 0)
				.transition()
				.duration(500)
				.style("fill", function(d) {
					return color(d.cluster);
				});				

		}
		
		if ( msg.charAt( i +  1 ) == 0 && sensores[msg.charAt( i - 1 )] == 1){ // se solto el sensor
			
			console.log("NL: Suelta sensor.");
			
		
			sensores[msg.charAt( i - 1 )] = 0;

			pointers[msg.charAt( i - 1 )]
				.transition()
				.duration(duration)
				.style("stroke-width", 0)
				.style("fill", function(d) {
					return color(d.cluster);
				});


				try{
					radioAcumulado = radioAcumulado + Math.floor( nodes [ position[msg.charAt( i - 1 )]]["radius"] );		
					supCirculos = Math.floor(supCirculos +  (Math.PI * ( nodes [ position[msg.charAt( i - 1 )]]["radius"]  * nodes [ position[msg.charAt( i - 1 )]]["radius"] )));
  				} catch(err) {
   					//el elemento dejo de existir y no tengo que updatear nodes
  				}

			// UPDATEA LAS ESTADISTICAS
			statistics ( nodes.length , radioAcumulado , width * height , supCirculos );
			salvaPantallas = setTimeout(
						function(){
							console.log("segundo timeout");
							$("#force-demo").show();
							$("#force").hide();
							baficiPasivo();
							//console.log("NL: Activa video.");
						},tiempoDeEspera*1000);

		}

	} else {

		if ( sensores[msg.charAt( i - 1 )] == 1){
			
			if ( msg.slice(i + 1, msg.length) < maxRadius){ // el sensor esta apretado
			
				var radio = translate( msg.slice(i + 1.5, msg.length) , 1 , maxRadius , minRadius, maxRadius);

				pointers[msg.charAt( i - 1 )]
					.attr("r", radio );

				try{
					nodes[ position[msg.charAt( i - 1 )]]["radius"] = radio;
  				} catch(err) {
   					//el elemento dejo de existir y no tengo que updatear nodes
  				}

				if (radio >= 49){ // el sensor llega al máximo

					pointers[msg.charAt( i - 1 )]
						.transition()
						.duration(duration)
						.style("stroke-width", 0)
						.attr("r", radio + 10 );
				}
			}
		}
	}
});

// limita y escala un numero dado un rango limitado.
function translate(sensor_val, in_from, in_to, out_from, out_to) {
    var out_range = out_to - out_from;
    var in_range = in_to - in_from;
    var in_val = sensor_val - in_from;
    val = ( in_val / in_range) * out_range; 
    var out_val = out_from+val;
    return out_val;
}

