
if (muestroWidgets){ 
	
	
	setInterval(function(){
		console.log("opase");
		var ssr = Math.floor(Math.random() * (5 - 0)) + 0;
		var rad = Math.floor(Math.random() * (maxRadius - minRadius)) + minRadius;
		addNode(ssr, rad);
				// UPDATEA LAS ESTADISTICAS
		statistics ( nodes.length , radioAcumulado , width * height , supCirculos );	
	},100);

	// Variables de nodos etc.

	var newdiv = document.createElement("div");
	var monASD = document.getElementsByTagName("header")[0].appendChild(newdiv);
		newdiv.setAttribute("id", "numeros");
		monASD = document.getElementById("numeros");


	// Control de gravedad.
	 
	var controlesGUI = document.createElement("div");
	var contGUI = document.getElementsByTagName("footer")[0].appendChild(controlesGUI);
	contGUI.setAttribute("id", "control");

	var gui = new dat.GUI({autoPlace: false});
	
	var customContainer = document.getElementById('control');
	customContainer.appendChild(gui.domElement);
	
	var config = {'charge':0.05, 'gravity':0.05, 'friction':0.9, 'linkStrength':2.75};
	
	var charger = gui.add(config, "charge", -5, 5);
	charger.onChange(function(value) {
	    force.charge(value);
	    force.start();
	    });
	
	var graver = gui.add(config, 'gravity', 0, 1);
	graver.onChange(function(value) {
	    force.gravity(value);
	    force.start();
	    });
	
	var frictionazer = gui.add(config, 'friction', -0.5, 1);
	frictionazer.onChange(function(value) {
	    force.friction(value);
	    force.start();
	    });
	
	var linker = gui.add(config, 'linkStrength', -3, 3);
	linker.onChange(function(value) {
	    force.linkStrength(value);
	    force.start();
	    });
	
	
	// Estadisticas de benchmark
	var stats = new Stats();
	stats.setMode(0);
	
	stats.domElement.style.position = 'absolute';
	stats.domElement.style.right = '0px';
	stats.domElement.style.top = '-0.2px';
	stats.domElement.style.zIndex = '500';
	
	document.body.appendChild( stats.domElement );
	
	setInterval( function () {
	    stats.begin();
	    stats.end();
	}, 1000 / 40 );



}
