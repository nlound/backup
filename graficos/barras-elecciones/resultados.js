var s_w = 290;
var s_h = 10;

var datos = [
				{n: "Partido Uno", v: "11231923" , p: "30.3%"},
				{n: "Partido Dos", v: "2231923" , p: "20.1%"},
				{n: "Partido Tres", v: "331923" , p: "10.2%"},
				{n: "Partido cinco", v: "41953" , p: "4.5%"},
				{n: "Partido seis", v: "31450" , p: "3.2%"},
				{n: "Partido siete", v: "21243" , p: "2.1%"}
			]

		var partidos = d3.select("#barras").append("div");
		var contenido = partidos.selectAll("div")
		    .data(datos);
			
			contenido.enter() //agrego div contenedor del partido
				.append("div")
				.classed("panel",true)

			contenido.selectAll('h1') // H1 nombre del partido
			    .data(function(d) { return [d]; })
			    .enter().append('h1')
			    .text(function(d) { return d.n; });
			
			contenido.selectAll('svg') // DIV datos electorales
			    .data(function(d) { return [d.v]; })
			    .enter().append('svg')
				.attr("width", s_w)
   				.attr("height", s_h);

			contenido.selectAll('h2') // H2 para el desplegable
			    .data(function(d) { return [d]; })
			    .enter()
			    .append('h2')
				.text("Interna");
	
			contenido.selectAll('div') //contenido de la interna
			    .data(function(d) { return [d]; })
			    .enter()
			    .append('div')
				.classed("panelcontent", true)
   				.text("nombre apellido");

 			contenido.exit().remove();
