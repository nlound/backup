var w = 1024,
    h = 740,
    nodes = [],
    links = [],
    node, 
    link;

var charger = 0.3;

function charge(d) {
  return -Math.pow(d.size, 2.0) * charger;
}

var force = d3.layout.force()
  .nodes(nodes)
  .links(links)
  .linkDistance(80)
  .size([w, h])
  .on("tick", tick)
  .charge(charge);

var xTcount = 10;
    for(var i = 0; i < xTcount; i++) {
      nodes.push({size: i * 10 % 60});
    }

  /* .charge(function(d) { return d._children ? -d.size / 100 : -30; }) */
  /* .linkDistance(function(d) { return d.target._children ? 80 : 30; }) */

var vis = d3.select("body #force").append("svg")
    .attr("width", w)
    .attr("height", h);

function update() {

  // Update the nodes…
  node = vis.selectAll("circle.node")
      .data(nodes)
      .style("fill", "steelblue")
      .attr("r", function(d) { return d.size; });

  // Enter any new nodes.
  node.enter().append("circle")
      .attr("class", "node")
      .attr("cx", function(d) { return d.x; })
      .attr("cy", function(d) { return d.y; })
      .attr("r", function(d) { return d.size; })
      .style("fill", "steelblue")
      .call(force.drag);

  // Exit any old nodes.
  node.exit().remove();

  link = vis.selectAll("line.link")
      .data(links, function(d) { return d.target.id; });

  // Enter any new links.
  link.enter().insert("line", ".node")
      .attr("class", "link")
      .attr("x1", function(d) { return d.source.x; })
      .attr("y1", function(d) { return d.source.y; })
      .attr("x2", function(d) { return d.target.x; })
      .attr("y2", function(d) { return d.target.y; });

  // Restart the force layout.
  force
    .start();
}

function tick(e) {
  node.attr("cx", function(d) { return d.x; })
    .attr("cy", function(d) { return d.y; });

  link.attr("x1", function(d) { return d.source.x; })
    .attr("y1", function(d) { return d.source.y; })
    .attr("x2", function(d) { return d.target.x; })
    .attr("y2", function(d) { return d.target.y; });
};

// window.onload = function() {
// var gui = new dat.GUI();
// var config = {'charger':0.3, 'gravity':0.1};

// var charger = gui.add(config, 'charger', 0, 0.5);
// charger.onChange(function(value) {
//     charger = value;
//     force.start();
//     });

// var graver = gui.add(config, 'gravity', 0, 1);
// graver.onChange(function(value) {
//     force.gravity(value);
//     force.start();
//     });


update();

setTimeout(function() {
  addNode();
}, 3000);

function addNode(){
  console.log('message');
  nodes.push({size: Math.random()*50});
  update();
}


$('button').click(function(){
  addNode();
});