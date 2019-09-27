var flag = false;
var nodoInicial = "";

$("button").click(function() {
	var rand = Math.floor(Math.random() * 1000);
	if (nodoInicial == "") nodoInicial = rand;
	graph.addNode(rand); (flag)
	graph.addLink(nodoInicial, rand);
	flag = true;
});



function leGraph(el) {
	
	//agrogo un nodo con un ID random VER CLUSTER
	this.addNode = function(id) { 
		nodes.push({
			"id" : id
		});
		update();
	};
	
	// en caso que tengamos que volar nodos con pop
    this.removeNode = function (id) { 
        var i = 0;
        var n = findNode(id);
        while (i < links.length) {
            if ((links[i]['source'] == n)||(links[i]['target'] == n)) links.splice(i,1);
            else i++;
        }
        nodes.splice(findNodeIndex(id),1);
        update();
	};
	
	//agrogo el link entre esos dos nodos
	this.addLink = function(source, target) { 
		links.push({
			"source" : findNode(source),
			"target" : findNode(target)
		});
		update();
	};

	//los busco por id que el el random
	var findNode = function(id) {
		for (var i in nodes) {
			if (nodes[i]["id"] === id) 
				return nodes[i]
		};
	};

	var findNodeIndex = function(id) {
		for (var i in nodes) {
			if (nodes[i]["id"] === id)
				return i
		};
	};

	var w = $(el).innerWidth(), h = $(el).innerHeight();

	var vis = this.vis = d3.select(el).append("svg:svg").attr("width", w).attr("height", h);
	
	//parametros de entorno
	var force = d3.layout.force().gravity(.05).distance(20).charge(-200).size([w, h]); 

	var nodes = force.nodes(), links = force.links();

	var update = function() {

		var link = vis.selectAll("line.link").data(links, function(d) {
			return d.source.id + "-" + d.target.id;
		});

		link.enter().insert("line").attr("class", "link");

		link.exit().remove();

		var node = vis.selectAll("g.node").data(nodes, function(d) {
			return d.id;
		});

		var nodeEnter = node.enter().append("g").attr("class", "node").call(force.drag);

		nodeEnter.append("circle").attr("cx", -10).attr("r", 10).style("fill", "red");

		node.exit().remove();

		force.on("tick", function() {
			link.attr("x1", function(d) {
				return d.source.x;
			}).attr("y1", function(d) {
				return d.source.y;
			}).attr("x2", function(d) {
				return d.target.x;
			}).attr("y2", function(d) {
				return d.target.y;
			});

			node.attr("transform", function(d) {
				return "translate(" + d.x + "," + d.y + ")";
			});
		});

		force.start();
	};
	update();
}

graph = new leGraph("#grafico");

