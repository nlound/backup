var radius = 10,
    max_length = 200,
    node_count = 50, //300
    offset = 500,
    nodes = [],
    node_layer,
    node_style = {
        fillColor: '#fff'
    },
    edge_style = {
        strokeColor: '#fff',
        strokeWidth: 1.2
    },
    edges = [],
    edge_layer;

function Network() {

    this.init = function() {
        paper.install(window);
        paper.setup('canvas');
        edge_layer = new Layer();
        node_layer = new Layer();

        // Create nodes
        for (var i = 0; i < node_count; i++) {
            setTimeout(this.add_node, 100 * i);
        }

        // Set drawing loop
        view.onFrame = this.draw;
    };

    this.draw = function() {
        var i;
        edge_layer.removeChildren();

        for (i = 0; i < edges.length; i += 1) {
            edges[i].update();
        }

        for (i = 0; i < nodes.length; i += 1) {
            nodes[i].wander();
            nodes[i].update();
            nodes[i].checkBounds();
        }
    };

    this.add_node = function(x, y) {
        var node = new Node();
        node.init(x, y);
        nodes.push(node);
    };

    this.removeAll = function() {
        var i;
        edge_layer.removeChildren();
    }
};

function Edge() {
    this.init = function(node1, node2) {
        this.start = node1;
        this.end = node2;
    };

    this.update = function() {
        var length = distance(this.start.location.x, this.start.location.y, this.end.location.x, this.end.location.y),
            line;

        if (length < max_length) {
            line = new Path();
            line.add(this.start.location, this.end.location);
            line.opacity = 1 - (length / max_length);
            line.style = edge_style;

            edge_layer.addChild(line);
        }
    };

    this.remove = function() {
        edge_layer.removeChildren();
    };
};

function Node() {
    project.activeLayer = node_layer;

    var maxSpeed = Math.random() * 0.5 + 0.5,
        maxForce = 0.1,
        angle = Math.random() * 90,
        wrapAngle = (Math.PI / 2) + angle,
        wanderTheta = 0,
        lastLocation,
        x = random_int(-offset, view.size.width + offset),
        y = random_int(-offset, view.size.height + offset);

    this.path = new Path.Circle({
        center: [0, 0],
        radius: random_int(2, radius)
    });
    this.location = new Point(x, y);
    this.velocity = new Point(Math.random() * 10, Math.random() * 50);
    this.acceleration = new Point(Math.random() * 20, Math.random() * 20);

    this.init = function(x, y) {
        var i,
            edge;

        if (typeof x !== 'undefined' && typeof y !== 'undefined') {
            this.location = new Point(x, y);
        }

        // this.path.opacity = Math.random() * .9;
        this.path.style = node_style;

        // Create edges to every other node
        for (i = 0; i < nodes.length; i += 1) {
            edge = new Edge();
            edge.init(this, nodes[i]);
            edges.push(edge);
        }
    };

    this.remove = function() {
        node_layer.removeChildren();
    };

    this.update = function() {
        lastLocation = this.location.clone();

        this.velocity.x += this.acceleration.x;
        this.velocity.y += this.acceleration.y;
        this.velocity.length = Math.min(maxSpeed, this.velocity.length);

        this.location.x += this.velocity.x;
        this.location.y += this.velocity.y;

        this.acceleration.length = 0;

        // Change node path position, without this it won't move
        this.path.position = this.location.clone();
    };

    this.steer = function(target, slowdown) {
        var steer,
            desired = new Point(target.x - this.location.x, target.y - this.location.y),
            dist = desired.length;

        if (dist > 0) {
            if (slowdown && dist < 100) {
                desired.length = maxSpeed * (dist / 100);
            } else {
                desired.length = maxSpeed;
            }

            steer = new Point(desired.x - this.velocity.x, desired.y - this.velocity.y);
            steer.length = Math.min(maxForce, steer.length);
        } else {
            steer = new Point(0, 0);
        }

        return steer;
    };

    this.seek = function(target) {
        var steer = this.steer(target, false);
        this.acceleration.x += steer.x;
        this.acceleration.y += steer.y;
    };

    this.wander = function() {
        var wanderR = 5,
            wanderD = 50,
            change = 0.1,
            circleLocation,
            circleOffset,
            target;

        wanderTheta += Math.random() * (change * 2) - change;
        circleLocation = this.velocity.clone();
        circleLocation = circleLocation.normalize();
        circleLocation.x *= wanderD;
        circleLocation.y *= wanderD;
        circleLocation.x += this.location.x;
        circleLocation.y += this.location.y;
        circleOffset = new Point(wanderR * Math.cos(wanderTheta), wanderR * Math.sin(wanderTheta));
        target = new Point(circleLocation.x + circleOffset.x, circleLocation.y + circleOffset.y);
        this.seek(target);
    };

    this.checkBounds = function() {
        if (this.location.x < -offset) {
            this.location.x = view.size.width + offset;
        }
        if (this.location.x > view.size.width + offset) {
            this.location.x = -offset;
        }
        if (this.location.y < -offset) {
            this.location.y = view.size.height + offset;
        }
        if (this.location.y > view.size.height + offset) {
            this.location.y = -offset;
        }
    };
};

var random_int = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

var distance = function(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
};

var network = new Network();

window.onload = function() {
    var container = $('#creative-content'),
        canvas = $('<canvas id="canvas" resize></canvas>').appendTo(container);
    network.init();
}
