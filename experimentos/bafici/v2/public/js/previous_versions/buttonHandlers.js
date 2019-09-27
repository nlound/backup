var nodoInicial = "";
var flag = false;

$("button").click(function() {

	var rand = Math.floor(Math.random() * 1000);

	if (nodoInicial == "") {nodoInicial = rand;}
	graph.addNode(rand); (flag)
	graph.addLink(nodoInicial, rand);
	flag = true;
});


//meter todos los nodos y los links en dos arrays separados para tener la posibilidad de borrarlos luego
