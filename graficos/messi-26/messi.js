//Cargp los JSONs
var dataset, datasetJ1, datasetJ2, datasetJ3, datasetJ4;
var colores = ["#e0494b", "#000000"]; // ["#e0494b","#73c8e8"]; seleccion / equipo
var golesMessi= new Array();
var golesMaradona= new Array();
var golesPele= new Array();
var golesDistefano= new Array();


d3.json("messi.json", function(json) {
	datasetJ1 = json;
	visualizar("messi");
	d3.select("#fotoIZ")
		.style("opacity", .0)
		.transition()        
           	.duration(500)      
            .style("opacity", 1);      
	
	d3.select("#lineasI")
		.classed ("messiLabels", true)
		.style("opacity", .0)
		.transition()        
           	.duration(700)      
            .style("opacity", 1);      
});

d3.json("maradona.json", function(json) {
	
	datasetJ2 = json;
	visualizar("maradona");
	d3.select("#fotoDE")
		.style("opacity", .0)
		.transition()        
           	.duration(500)      
            .style("opacity", 1);      

	d3.select("#lineasD")
		.classed ("maradonaLabels", true)
		.style("opacity", .0)
		.transition()        
           	.duration(700)      
            .style("opacity", 1);      
});

d3.json("pele.json", function(json) {
	datasetJ3 = json;
});

d3.json("distefano.json", function(json) {
	datasetJ4 = json;
});

function visualizar(nombre) {
	
	var panel, panelDiv;
	
	if (nombre == "messi"){			 // dependiendo el jugador cambio el panel y dataset para mostrar la info
		if (nombre == "messi"){	dataset = datasetJ1;}
			panel = "#lineasI div";
		}else{
			
			if (nombre == "maradona"){ dataset = datasetJ2; }
			if (nombre == "pele"){ dataset = datasetJ3; }
			if (nombre == "distefano"){dataset = datasetJ4; }
			panel = "#lineasD div";
	}
	
	var ttp = d3.select("#tool")   
		.attr("class", "tool")
		.style("opacity", 0);

	d3.select(panel).selectAll("div")
	.data(dataset)
  	.enter()
  	.append("div")
    .classed ("goles",true)
    .selectAll("div")
    .data( function(d){ return ( d.jugador.goles) } )	    
	.enter()
	.append("div") //bolita de gol
    .classed ("gol",true)
  	.style ("background-color", function(d){ if (d.seleccion == "SI"){ return colores[0]}else{ return colores[1]}})
  	.style ("height", function(d){ return ( parseInt(d.cant) * 7) + "px" })
  	.on("mouseover", function(d) {
		var displacement = 10;
			var mousex = d3.event.pageY;
			if (mousex > 600){displacement = -150}
			ttp.html(textoTooltip(d.club , d.gEquipo , d.rival , d.gRival , d.fecha, d.torneo ))
        	ttp.transition()        
            	.duration(00)      
                .style("opacity", 1)      
                .style("left", (d3.event.pageX - 75 ) + "px")     
                .style("top", (d3.event.pageY + displacement) + "px");
            })
    .on("mouseout", function(d) {       
         ttp.transition()        
             .duration(500)      
             .style("opacity", 0);
    });
     
     pongoEtiqutas(nombre,panel)
     
}

function visualizarUpdate(nombre){

	d3.select("#fotoDE")
		.style("opacity", .0)
		.classed( "maradona", false)
		.classed( "distefano", false)
		.classed( "pele", false)
		.classed( nombre, true)
		.transition()        
	            	.duration(500)      
	                .style("opacity", 1);      

	var p = d3.select("#lineasD div")
        .remove();
	        
	d3.select("#lineasD")
		.append("div")
		.style("opacity", .0)
		.classed("graficoDE", true)
				.transition()        
	            	.duration(700)      
	                .style("opacity", 1);      

	visualizar(nombre)	
}

function textoTooltip(l1,l2,v1,v2,l,f){

return "<table border='0' width='100%'><tr><td colspan='2' class='par'> Partido</td></tr>" +
		"<tr><td class='loc'>" + l1 + "</td><td class='loc' align='right'>" + l2 + " </td></tr>" +	
		"<tr><td class='vis'>" + v1 + "</td><td class='vis' align='right'>" + v2 + "</td></tr>" +	
		"<tr><td colspan='2' class='lug'>" + l + "</td></tr>" +
		"<tr><td colspan='2' class='fec'>"+f+"</td></tr></table>"	
}

function pongoEtiqutas(nombre, panel){
	if (nombre == "maradona"){ 
		d3.select("#lineasD")
			.classed ("distefanoLabels", false)
			.classed ("peleLabels", false)
			.classed ("maradonaLabels", true)
			.style("opacity", .0)
			.transition()        
	           	.duration(700)      
	            .style("opacity", 1);
	}
	
	if (nombre == "pele"){ 
		d3.select("#lineasD")
			.classed ("maradonaLabels", false)
			.classed ("distefanoLabels", false)
			.classed ("peleLabels", true)
			.style("opacity", .0)
			.transition()        
	           	.duration(700)      
	            .style("opacity", 1);
	}
	if (nombre == "distefano"){
		d3.select("#lineasD")
			.classed ("maradonaLabels", false)
			.classed ("peleLabels", false)
			.classed ("distefanoLabels", true)
			.style("opacity", .0)
			.transition()        
	           	.duration(700)      
	            .style("opacity", 1);
	}
}
