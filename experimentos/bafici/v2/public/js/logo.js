function myGraph(el) {

    this.addNode = function (id,radio) {
        nodes.push({"id":id, "radio":radio});
        update();
    };

    this.addLink = function (source, target) {
        links.push({"source":findNode(source),"target":findNode(target)});
        update();
    };

    var findNode = function(id) {
        for (var i in nodes) {if (nodes[i]["id"] === id) return nodes[i];};
    };

    var findNodeIndex = function(id) {
        for (var i in nodes) {if (nodes[i]["id"] === id) return i;};
    };

    var w = $(el).innerWidth(),
        h = $(el).innerHeight();

    var vis = this.vis = d3.select(el).append("svg:svg")
        .attr("width", w)
        .attr("height", h);


    // bounding box
    vis.append("svg:rect")
		.attr("width", w)
		.attr("height", h)
		.attr("viewBox", "0 0 100% 100%")
		.style("opacity", "0");

    var force = d3.layout.force()
        .gravity(0)
        .distance(50)
        .charge(0)
        .size([w, h]);

    var nodes = force.nodes(),
        links = force.links();

    var update = function () {

        var link = vis.selectAll("line.link")
            .data(links, function(d) { return d.source.id + "-" + d.target.id; });

        link.enter().insert("line")
            .attr("class", "link");

        var node = vis.selectAll("g.node")
            .data(nodes, function(d) { return d.id;});

        var nodeEnter = node.enter().append("g")
            .attr("class", "node");

        nodeEnter
        	.append("circle")
           	.attr("r", function(d){ return d.radio; })
            .style("fill", "rgba(255,255,255,0)")
            .style("stroke", "rgba(255,255,255,0.5)")
            .style("stroke-width", "4");

        nodeEnter
        	.append("text")
            .attr("dx", "0em")
            .attr("dy", "0.25em")
            .style("fill", "rgba(255,255,255,0.7)")
            .attr("text-anchor", "middle")
            .text(function(d) {return d.id;});

		node.attr("transform", function(d,i) { return "translate(" + Math.floor(Math.random() * (50 - 55) + 50)*(i+1) + "," + Math.floor(Math.random() * (60 - 70) + 60)  + ")"; });

        force.start();

    };

}


graph = new myGraph("#logo");

graph.addNode("¿Qué", 26);
graph.addNode("te", 20);
graph.addNode("produjo", 40);
graph.addNode("la", 20);
graph.addNode("película?", 45);
graph.addLink("¿Qué", "te");
graph.addLink("te", "produjo");
graph.addLink("produjo", "la");
graph.addLink("la", "película?");
