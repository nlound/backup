function runForceDemo(){

var width = 1280,
    height = 720,
    padding = 20, // separation between same-color nodes
    clusterPadding = 30, // separation between different-color nodes
    maxRadius = 30;

var n = 200,
    m = 6;

var color = d3.scale.ordinal()
     .domain(m)
     .range( ["sorpresa", "felicidad","indiferencia","tristeza","entusiasmo","envidia"] );

var clusters = new Array(m);


var nodes = d3.range(n).map(function() {
  var i = Math.floor(Math.random() * m),
      r = Math.sqrt((i + 1) / m * -Math.log(Math.random())) * maxRadius,
      d = {
        cluster: i,
        radius: r,
        x: Math.cos(i / m * 2 * Math.PI) * 200 + width / 2 + Math.random(),
        y: Math.sin(i / m * 2 * Math.PI) * 200 + height / 2 + Math.random()
      };
  if (!clusters[i] || (r > clusters[i].radius)) clusters[i] = d;
  return d;
});

var force = d3.layout.force()
    .nodes(nodes)
    .size([width, height])
    .gravity(0.005)
    .charge(0.005)
    .on("tick", tick)
    .start();

var svg = d3.select("#force-demo").append("svg")
    .attr("width", "100%")
    .attr("height", "100%")
    .attr("viewBox", "0 0 1280 720");

var node = svg.selectAll("g.node")
    .data(nodes);

var nodeEnter = node.enter().append("g")
    .attr("class", "node")
    .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

nodeEnter.append("circle")
            .attr("cx", -10)
            .attr("r", 20)
            .attr("class", function (d) {return color(d.cluster);});

var circles = svg.selectAll("circle");
    //text = svg.selectAll("text");


node.call(force.drag).exit().remove();




circles.transition()
    .duration(1000)
    .delay(function(d, i) { return i * .5; })
    .attrTween("r", function(d) {
      var i = d3.interpolate(0, d.radius);
      return function(t) { return d.radius = i(t); };
    });

function tick(e) {
     
  node
   .each(cluster(3 * e.alpha * e.alpha))
   .each(collide(.08))
   .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
      
}

// Move d to be adjacent to the cluster node.
function cluster(alpha) {
  return function(d) {
    var cluster = clusters[d.cluster];
    if (cluster === d) return;
    var x = d.x - cluster.x,
        y = d.y - cluster.y,
        l = Math.sqrt(x * x + y * y),
        r = d.radius + cluster.radius;
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
};