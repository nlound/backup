(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.torso3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6F00C8").s().p("AAKAnQgGhPgKgWQgLgRgBAAQgCgegNgCIAXgEQANAAANAgQgCAKgCgBQAVAbABA3QAAA4gUA0QAAgkgEgpg");
	this.shape.setTransform(25.7,16.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1C203A").s().p("AipGrQATjZAIhrQALi4gYiIQgIgxADgVQADghAcgdQAUgUAGgEIAagPQAEgDANgSQALgRACAAIArARQAsAaAPAqQAWBDAMA3QAHAdAEAiIABhxQAAg/gHgZQAnAoAMCtQAIBygEBaQAAAPAHCDIAPDdg");
	this.shape_1.setTransform(17.1,43.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AggEhQgagLgbgdIgXgaIAcnKIAWgUIALgnQBQAcAWAaQAHAJAAAGIADgJIgHgRQAEADAEAAQACACADAKIAVAdQALAfAEA+QAIB6ghCeQgbCBg7AAQgNAAgPgGg");
	this.shape_2.setTransform(17.7,29.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,34.2,86.3);


(lib.torso2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1C203A").s().p("Ai6GrIAXj4IgPjcIg8jsQAOgiAbgZIAIgFIADgDIACgCQAXgPAjgOIBggQIAMgbQAEgIAEgBIAEABQAGACABAEQgEAHADAVIAAAUQAGAdAMAwIAtCRIAkCJIAfiAQAJhpgPhUIgSg+IATAEIAsALIAKADQANAGAMANQAiApACBgQgWE9gDgTIAAgBIgBgLIgBBrIAaD8g");
	this.shape.setTransform(24,42.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6F00C8").s().p("AgpDHQALgfANhAQAXh9AIifQgLgVgBAAIAIgyIAXAAQAKAzgBABIgMATQAOCggKB9QgFBAgIAgIgiAzIAAAAIgcg1gAAKj7IAAAAIAAAAg");
	this.shape_1.setTransform(30.1,31.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ah1D7IAonKIAhgTIALgZIAbAVQAIAJAbAOIAcAAIAAggQATAIAJAYIAhAAIgoHKg");
	this.shape_2.setTransform(27.1,26);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,48,85.6);


(lib.torso1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1C203A").s().p("AjWGrIAaj4IgRjcIhFjsQAQgiAggZIAIgFIAEgDIACgCQAcgQAngNIBAgQIAOgbQAGgIAEgBIAFABQAGACADAEQgFAHACAVQABALACAJQAFAbAQAyIAwCRIArCJIAjiAQALhsgShRIgUg+IAVAEQAfAGATAFIAUAFIAJADQAKADALAIQAPAKAQAWIASAiIAdBKQgZE9gDgTIAAgBIgCgLIAABrIAdD8g");
	this.shape.setTransform(27.6,42.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6F00C8").s().p("AgjDHIATl6QgMgXgCABQAKgwgBgCIAZAAQAMAzgBACIgOASQAlF+gCgBIgmAzIAAAAIghg1g");
	this.shape_1.setTransform(33.4,31.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhwD7IAAnKIAmgTIAMgZIAfAVQAKAHAfAQIAgAAIAAggQAWAIALAYIAmAAIAAHKg");
	this.shape_2.setTransform(28.9,26);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,55.2,85.6);


(lib.thigh = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1B213B").s().p("AhxEZIgHnXQABgtAjgfQAjggAxgBQAyAAAjAhQAkAfAAAtQAAAJgBAIIgtHZg");
	this.shape.setTransform(10.3,25.4,0.845,0.845);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20.6,50.8);


(lib.shadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999DA9").s().p("AmvANQizgFAAgIQAAgGCzgGQC1gGD6AAQD7AAC1AGQCzAGAAAGQAAAIizAFQizAGj9AAQj8AAizgGg");
	this.shape.setTransform(61.2,1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,122.4,3.9);


(lib.Tween14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1B213B").s().p("AgEAAQAAgGAEAAQAAAAAAAAQABAAAAAAQABABAAAAQABABAAAAQACACAAACQAAADgCACQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgEAAAAgHg");
	this.shape.setTransform(4.6,-1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1B213B").s().p("AhFBuQAAgMgMgZQgOgdgDgVQgIg/AggaQAdgYBPgHQAEgBAQgHQANgGAVACQAMAAAAARQABAQgMAPIhVANIAJAMQAJAPACAUQADAegLAPIgIACQgDgJgFgIQgLgPgNAJQgVAOAQAdQAJAPAMAMQgPALgTAEQgKADgIAAIgJgBg");
	this.shape_1.setTransform(-1.8,-4.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A77C64").s().p("AgdCKIhJgfIAAhAIAAgDQAAgDAHgSQAHgOgFgIIgBhSQAFgVAGgJQAIgPAOgHIB1AMIAvB4IgnABIAABHIhAASIgCA1g");
	this.shape_2.setTransform(1.6,1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.9,-15.7,23.8,31.4);


(lib.Tween13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1B213B").s().p("AgEAAQAAgGAEAAQAAAAAAAAQABAAAAAAQABABAAAAQABABAAAAQACACAAACQAAADgCACQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgEAAAAgHg");
	this.shape.setTransform(4.6,-1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1B213B").s().p("AhFBuQAAgMgMgZQgOgdgDgVQgIg/AggaQAdgYBPgHQAEgBAQgHQANgGAVACQAMAAAAARQABAQgMAPIhVANIAJAMQAJAPACAUQADAegLAPIgIACQgDgJgFgIQgLgPgNAJQgVAOAQAdQAJAPAMAMQgPALgTAEQgKADgIAAIgJgBg");
	this.shape_1.setTransform(-1.8,-4.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A77C64").s().p("AgdCKIhJgfIAAhAIAAgDQAAgDAHgSQAHgOgFgIIgBhSQAFgVAGgJQAIgPAOgHIB1AMIAvB4IgnABIAABHIhAASIgCA1g");
	this.shape_2.setTransform(1.6,1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.9,-15.7,23.8,31.4);


(lib.Tween12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A77C64").s().p("AhMFCIAdg/Igqq6ICMAAIgoK6IAwB4IAfAsQABABgNAQg");
	this.shape.setTransform(11.5,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A77C64").s().p("AhYFAIAWg+QgBhEAFlBIAGk2ICRAAIhgK6IAqB8IAeAtQAAABgNAPg");
	this.shape_1.setTransform(-11.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.5,-44.2,41.1,88.5);


(lib.Tween11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A77C64").s().p("AhMFCIAdg/Igqq6ICMAAIgoK6IAwB4IAfAsQABABgNAQg");
	this.shape.setTransform(11.5,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A77C64").s().p("AhYFAIAWg+QgBhEAFlBIAGk2ICRAAIhgK6IAqB8IAeAtQAAABgNAPg");
	this.shape_1.setTransform(-11.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.5,-44.2,41.1,88.5);


(lib.Tween8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A77C64").s().p("AgeBEIgigoIAgg+IAEgiIBCAAIgGAiIAdAiIAEAhIgOAJIgIAbg");
	this.shape.setTransform(-35.6,-1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A77C64").s().p("AgyAqIgNgJIADghIAdgiIgGgiIBCAAIAFAiIAeA+IggAoIhKABg");
	this.shape_1.setTransform(35.7,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.1,-7.9,84.4,16);


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A77C64").s().p("AgeBEIgigoIAgg+IAEgiIBCAAIgGAiIAdAiIAEAhIgOAJIgIAbg");
	this.shape.setTransform(-35.6,-1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A77C64").s().p("AgyAqIgNgJIADghIAdgiIgGgiIBCAAIAFAiIAeA+IggAoIhKABg");
	this.shape_1.setTransform(35.7,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.1,-8,84.4,16);


(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiCFaIAGjmIgkjVIhmB9IgvDNIhZAAIAmjVQAFgaAMgSICOjZQAMgTANgGQAygcA6gOIgGgFIAiggIAIgBIAyAcQApAAA1AUQAkAOAiAUQATAMANAXICCDkQANAUAFAaIAAAAIAlDbIhOAAIg1jXIhJhjIgFCaIAeDyg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.9,-34.7,79.9,69.4);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiCFaIAGjmIgkjVIhmB9IgvDNIhZAAIAmjVQAFgaAMgSICOjZQAMgTANgGQAygcA6gOIgGgFIAiggIAIgBIAyAcQApAAA1AUQAkAOAiAUQATAMANAXICCDkQANAUAFAaIAAAAIAlDbIhOAAIg1jXIhJhjIgFCaIAeDyg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.9,-34.7,79.9,69.4);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1A2139").s().p("AgMAEIAEgCIAEADQAEACADgDQAIgEgEgHIAEgCQAFALgLAGQgEACgBAAQgHAAgFgGg");
	this.shape.setTransform(3,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1A2139").s().p("AgMCMQgXgSgOgTQgtg8Axg0IgEABQABgFAIgKQAIgJACgGQACgIgCgPQgBgLACgIIADgMIABANQABAJADAGQAGgKAAgTIgDgVQgBgNAIgNQAAAQAFAJIAGANQADAIAAALQACgEgCgMQgCgNABgGQADgRAKgKQgFAOAHAOIAJASQgFgNACgNIAGgQQAEgLgCgLQAIALACAMQACAOADAGIAGAGQAEAEABADIADAHIABAAIAHANQAGASgEAPIhdA4IAPgCQAPgCALADQAMALAHANQAPAagBAWQgJgFgLgBQgVgFgGASQgEARAUAOQALAHAMAEQAAARgNANQgKAJgLADQgEgKgRgOg");
	this.shape_1.setTransform(-4.6,-3.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A77C64").s().p("AguBhIgGgXIABgCQAAABgBAAQAAAAAAgBQAAAAAAgBQgBAAAAgBQgCgEAAgRQgBgPgHgGIgjhFQgDgUAAgMQABgPAJgMIBigsIBdBYIggAXIATAjQgWANgUgCIgQgGIgEAGIAHAEQAJAEAKAAQATAAAUgMIAMAVIgvAkIAABMIgcADg");
	this.shape_2.setTransform(1.6,5.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A77C64").s().p("AgaAVIgUAFIBdg5IgrA/QgIgMgWABg");
	this.shape_3.setTransform(-2.3,-5.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1B213B").s().p("AgMAqIAAgYQAAgMgDgJQgGgVAHgUQACgGAFgGIAFgFIgBAPQgBARADAJQABAGAFAKIAJANQAGAPgCAPQgBAUgQADg");
	this.shape_4.setTransform(1.8,-14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.8,-20.2,23.7,40.5);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1A2139").s().p("AgMAEIAEgCIAEADQAEACADgDQAIgEgEgHIAEgCQAFALgLAGQgEACgBAAQgHAAgFgGg");
	this.shape.setTransform(3,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1A2139").s().p("AgMCMQgXgSgOgTQgtg8Axg0IgEABQABgFAIgKQAIgJACgGQACgIgCgPQgBgLACgIIADgMIABANQABAJADAGQAGgKAAgTIgDgVQgBgNAIgNQAAAQAFAJIAGANQADAIAAALQACgEgCgMQgCgNABgGQADgRAKgKQgFAOAHAOIAJASQgFgNACgNIAGgQQAEgLgCgLQAIALACAMQACAOADAGIAGAGQAEAEABADIADAHIABAAIAHANQAGASgEAPIhdA4IAPgCQAPgCALADQAMALAHANQAPAagBAWQgJgFgLgBQgVgFgGASQgEARAUAOQALAHAMAEQAAARgNANQgKAJgLADQgEgKgRgOg");
	this.shape_1.setTransform(-4.6,-3.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A77C64").s().p("AguBhIgGgXIABgCQAAABgBAAQAAAAAAgBQAAAAAAgBQgBAAAAgBQgCgEAAgRQgBgPgHgGIgjhFQgDgUAAgMQABgPAJgMIBigsIBdBYIggAXIATAjQgWANgUgCIgQgGIgEAGIAHAEQAJAEAKAAQATAAAUgMIAMAVIgvAkIAABMIgcADg");
	this.shape_2.setTransform(1.6,5.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A77C64").s().p("AgaAVIgUAFIBdg5IgrA/QgIgMgWABg");
	this.shape_3.setTransform(-2.3,-5.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1B213B").s().p("AgMAqIAAgYQAAgMgDgJQgGgVAHgUQACgGAFgGIAFgFIgBAPQgBARADAJQABAGAFAKIAJANQAGAPgCAPQgBAUgQADg");
	this.shape_4.setTransform(1.8,-14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.8,-20.2,23.7,40.5);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6B23CA").s().p("AAvEXQhXgKg0g/Qg2hBAQhNQAFgUANglQANgeABgNQACgXgQgjQgQgiACgdQADgdAfgyQAPgZAPgUIAAB0QAAARANAoQAMAjgEApQgCAYgbA/QgSBBAgA1QAYAnAuAUQAfANAkADIAHgUIAcgDIASAfIgHAVQgUAFgXAAQgSAAgTgDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.5,-28.2,27,56.5);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6B23CA").s().p("AAvEXQhXgKg0g/Qg2hBAQhNQAFgUANglQANgeABgNQACgXgQgjQgQgiACgdQADgdAfgyQAPgZAPgUIAAB0QAAARANAoQAMAjgEApQgCAYgbA/QgSBBAgA1QAYAnAuAUQAfANAkADIAHgUIAcgDIASAfIgHAVQgUAFgXAAQgSAAgTgDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.5,-28.2,27,56.5);


(lib.tiestraight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6B23CA").s().p("AALCrQgBAAg+k7QgOgPgCABIgDgrIAWgGQAVAogBABIgHASQBtExgBAAIgXAyIAAABIgmglgAhHjJIAAAAIAAAAg");
	this.shape.setTransform(7.2,20.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14.5,41.6);


(lib.shirtsmall = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgxgSIAAggQABAIAkAVQAQALASAJIAbAAIAAA0g");
	this.shape.setTransform(8.2,0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhfDQIAAmEIAhgQIAgAQIBCAAIAAgbQASAGAKAVIAfAAIAAGEg");
	this.shape_1.setTransform(9.6,18.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-4.9,19.2,43.9);


(lib.pants = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1B213B").s().p("Aj9HuIAAhSIgNAAIAhuFQAHgDCqgBICoABIAFAVQAGAeADAsQAHBkAABzIAACEQANDmARDoIgMAAIAlAeIAwAMQATAEAFAOIAHAVIj/AAIAAhRIgFAAIgzrJIg0LJIgSAAIAlAeIAwAMQATAEAFAOIAFAWg");
	this.shape.setTransform(26.8,51.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,2.1,53.6,98.9);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAWCmIgOhtIgQBtIiqAAIAVkSICMAAQAaAAAUgdQALgOAFgPIAMAdQATAdAYAAIA4AAIAXESg");
	mask.setTransform(17.9,16.7);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCF02C").s().p("AgNAOQgGgGAAgIQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAIgGAGQgGAGgIAAQgGAAgHgGg");
	this.shape.setTransform(2.8,10.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCF02C").s().p("AgNAOQgGgGAAgIQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAIgGAGQgGAGgIAAQgHAAgGgGg");
	this.shape_1.setTransform(21.8,22.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FCF02C").s().p("AgNAOQgGgGAAgIQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAIgGAGQgGAGgIAAQgHAAgGgGg");
	this.shape_2.setTransform(8.3,6.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FCF02C").s().p("AgNAOQgGgGAAgIQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAIgGAGQgGAGgIAAQgHAAgGgGg");
	this.shape_3.setTransform(18,5.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FCF02C").s().p("AgNAOQgGgGAAgIQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAIgGAGQgGAGgIAAQgHAAgGgGg");
	this.shape_4.setTransform(28.5,8.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FCF02C").s().p("AgNAOQgGgGAAgIQAAgGAGgHQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAIgGAGQgGAGgIAAQgHAAgGgGg");
	this.shape_5.setTransform(24,31.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FCF02C").s().p("AgNAOQgGgGAAgIQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAIgGAGQgGAGgIAAQgHAAgGgGg");
	this.shape_6.setTransform(33.1,28.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FCF02C").s().p("AgNAOQgGgGAAgIQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAIgGAGQgGAGgIAAQgHAAgGgGg");
	this.shape_7.setTransform(29.2,21.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FCF02C").s().p("AgNAOQgGgGAAgIQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAIgGAGQgGAGgIAAQgHAAgGgGg");
	this.shape_8.setTransform(32.7,14.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FCF02C").s().p("AgNAOQgGgGAAgIQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAIgGAGQgGAGgIAAQgHAAgGgGg");
	this.shape_9.setTransform(4.2,17.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FCF02C").s().p("AgNAOQgGgGAAgIQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAIgGAGQgGAGgIAAQgHAAgGgGg");
	this.shape_10.setTransform(14.1,12.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FCF02C").s().p("AgNAOQgGgGAAgIQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAIgGAGQgGAGgIAAQgHAAgGgGg");
	this.shape_11.setTransform(4.2,25.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FCF02C").s().p("AgNAOQgGgGAAgIQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAIgGAGQgGAGgIAAQgHAAgGgGg");
	this.shape_12.setTransform(16.2,29.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FCF02C").s().p("AgNAOQgGgGAAgIQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAIgGAGQgGAGgIAAQgHAAgGgGg");
	this.shape_13.setTransform(8.3,32.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FCF02C").s().p("AgNAOQgGgGAAgIQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAIgGAGQgGAGgIAAQgHAAgGgGg");
	this.shape_14.setTransform(13.7,21.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FCF02C").s().p("AgNAOQgGgGAAgIQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAIgGAGQgGAGgIAAQgHAAgGgGg");
	this.shape_15.setTransform(21.7,14.7);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = this.shape_6.mask = this.shape_7.mask = this.shape_8.mask = this.shape_9.mask = this.shape_10.mask = this.shape_11.mask = this.shape_12.mask = this.shape_13.mask = this.shape_14.mask = this.shape_15.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.8,3.8,34.4,29.7);


(lib.jacket = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1B213B").s().p("AgTAAIAQgdQADgHADAAIARgBIgIBLg");
	this.shape.setTransform(29.6,1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1B213B").s().p("AjtFfIAVjTIgOi5IhMBjIAJDmIhWAAIgdjsQgBgQADgSQADgTAGgNIBwjkQAOgdAbgUIAHgFIADgCIACgCQAXgOAigKIBTgWQAAAZAVBAIArB7IAhB0IAehsQAKhbgPhFIgSg1IATADQAWAFAUAEIARAFIAHACQAIADALAGQANAJAMATIAPAdIAZA+IBIDQICkC9IguBNIi7ivQgWgWgFgYIAAgCIgBgJIgBBcIAZDVg");
	this.shape_1.setTransform(41.4,35.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1.9,82.8,72.2);


(lib.hand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AglgRIA+gHIAPAqIhPAHg");
	this.shape.setTransform(6.2,0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A77C64").s().p("AgmAuIAKAgIgPgFIgRgwIAaheIADggIA6AAIAIAdIAZAoIABAsIgPgBIgDgRIgOgYIgBA3IARBCIg0ALg");
	this.shape_1.setTransform(6.2,10.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1.7,12.3,22.1);


(lib.fist = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgoASIANgXIBEgRIAAAsg");
	this.shape.setTransform(6.8,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A77C64").s().p("AgeBEIgigoIAgg+IAEgiIBCAAIgGAiIAdAiIAEAhIgOAJIgIAbg");
	this.shape_1.setTransform(6.5,7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-2.4,13,16.3);


(lib.background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D1D3D8").s().p("Egu3AnEMAAAhOHMBdvAAAMAAABOHg");
	this.shape.setTransform(300,250);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.openhand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgmAPIgFgdIBUAAIADAdg");
	this.shape.setTransform(7.3,1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A77C64").s().p("AguA2IAOAnIgUgHIgTg4IAfhwIACglIBGAAIAJAhIAdAwIACA0IgSgCIgDgUIgRgbIgBBAIAVBOIg/ANg");
	this.shape_1.setTransform(7.3,14.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14.5,26.4);


(lib.head = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1B213B").s().p("AgEAAQAAgGAEAAQAAAAAAAAQABAAAAAAQABABAAAAQABABAAAAQACACAAACQAAADgCACQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgEAAAAgHg");
	this.shape.setTransform(16.5,14);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1B213B").s().p("AhFBuQAAgMgMgZQgOgdgDgVQgIg/AggaQAdgYBPgHQAEgBAQgHQANgGAVACQAMAAAAARQABAQgMAPIhVANIAJAMQAJAPACAUQADAegLAPIgIACQgDgJgFgIQgLgPgNAJQgVAOAQAdQAJAPAMAMQgPALgTAEQgKADgIAAIgJgBg");
	this.shape_1.setTransform(10.1,11.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A77C64").s().p("AhiBZIgEgjIAAgDQAAgEAHgRQAHgOgFgKIgBhQQAFgVAGgKQAIgOAOgHIB1AMIAvB2IgnAAIAABKIhAASIAAAYQgOAHgPAAQgjAAgigmg");
	this.shape_2.setTransform(13.5,16.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,23.8,29.3);


(lib.forearm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1B213B").s().p("AgfC9IgjkVQgBgSADgWQADgYAIgPQAEgJAQgHQATgIAQAEQAxAMAGBfIAKENg");
	this.shape.setTransform(5.7,16,0.845,0.845);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,11.5,32.1);


(lib.foot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1B213B").s().p("AibBKIAVhmQADgQAVgOQAXgOAdgBQAgAAAWAQQAPANAEAQIAtAuIBAATQAQAFAGAKIAKAWg");
	this.shape.setTransform(13.3,6.3,0.845,0.845);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,26.5,12.6);


(lib.closedhand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgmAPIgFgdIBUAAIADAdg");
	this.shape.setTransform(5.5,1.3,0.845,0.845);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A67C65").s().p("Ag7AyIgQgKIADgnIAigpIgHgoIBNgCIAGAqIAmBIIgmAvIhXAEg");
	this.shape_1.setTransform(6.5,9.2,0.845,0.845);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13,16.2);


(lib.calf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1B213B").s().p("AiHEdIBSn5IAAAAIAAAAQADgdAegTQAbgSAoADQAnADAaAXQAaAXgDAdIhiHqg");
	this.shape.setTransform(11.5,24.1,0.845,0.845);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,23,48.3);


(lib.briefcase = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5F6375").s().p("AgdgOIA7AAIgeAdg");
	this.shape.setTransform(19.5,7.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5F6375").s().p("AgdAPIAdgdIAeAdg");
	this.shape_1.setTransform(19.5,37.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5F6375").s().p("AgOAPIAdgdIAAAdg");
	this.shape_2.setTransform(25.3,37.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5F6375").s().p("AgNAOIAAgcIAbAcg");
	this.shape_3.setTransform(1.5,37.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5F6375").s().p("AgOgOIAdAAIAAAdg");
	this.shape_4.setTransform(25.3,7.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5F6375").s().p("AgOgOIAdAAIgdAdg");
	this.shape_5.setTransform(1.5,7.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5F6375").s().p("AAACkIAAlHIABAAIAAFHg");
	this.shape_6.setTransform(23.1,22.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1B213B").s().p("AiFDCIAAlHIBOAAIATg9IBUAAIAOA9IBHAAIAAFHgAAniFIgJglIgyAAIgLAlIBGAAg");
	this.shape_7.setTransform(13.4,19.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,26.8,39);


(lib.bicep = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1B213B").s().p("AiCDuQgqgLAAgdQABg3AMgYICFkMQARgjAdgXIAAgBIAPgKIAAABQAYgQAPgEQAbgHAYAPQAhAUAKAXQAOAigeAxIhuC8IhZB5QgdAigjAAQgJAAgKgCg");
	this.shape.setTransform(14.6,20.4,0.845,0.845);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,29.3,40.7);


(lib.Tween10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(0,0.5,1,1,0,0,0,17.9,17.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#97CF22").s().p("AAWCnIgOhuIgQBuIipAAIAUkTICMAAQAaAAAUgcQALgPAFgOIAMAdQATAcAYAAIA4AAIAXETg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.9,-16.7,35.8,34.3);


(lib.Tween9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(0,0.5,1,1,0,0,0,17.9,17.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#97CF22").s().p("AAWCnIgOhuIgQBuIipAAIAUkTICMAAQAaAAAUgcQALgPAFgOIAMAdQATAcAYAAIA4AAIAXETg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.9,-16.7,35.8,34.3);


(lib.shirt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween6("synched",0);
	this.instance.setTransform(39.9,34.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,79.9,69.4);


(lib.Symbol1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// head
	this.instance = new lib.head();
	this.instance.setTransform(142,73.7,1,1,0,0,0,11.9,15.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(87).to({_off:false},0).wait(1).to({x:149.9,y:74.2},0).wait(1).to({x:153.8,y:73.9},0).to({x:166.8,y:74.2},2).to({x:185.9,y:77},4).to({x:199.4,y:78.7},4).to({x:216,y:80.5},4).to({x:233.6,y:78.1},4).to({x:250.5,y:76},4).to({x:269,y:74.5},4).to({x:285.3,y:77},4).to({x:303.8,y:78.3},4).to({x:316.1,y:77.1},4).to({x:335.3,y:71.4},4).to({x:353.9,y:74.2},3).wait(8));

	// forearm
	this.instance_1 = new lib.forearm();
	this.instance_1.setTransform(108.9,130.3,1,1,0,0,0,5.7,16);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(87).to({_off:false},0).to({regY:16.1,rotation:-16,x:151.4,y:135.9},4).to({regX:5.8,regY:16,scaleX:1,scaleY:1,rotation:2,x:163.1,y:136.8},4).to({rotation:15,x:173.6,y:141},4).to({rotation:20.8,x:187,y:139.6},4).to({regX:5.9,rotation:7,x:213.9,y:141.2},4).to({rotation:-15,x:240.5,y:140.1},4).to({regY:16.1,rotation:-38.8,x:269},4).to({scaleX:1,scaleY:1,rotation:-61.8,x:299.2,y:137.2},4).to({scaleX:1,scaleY:1,rotation:-63.8,x:313.8,y:134.7},4).to({regY:16.2,rotation:-56.8,x:323.7,y:137.5},4).to({rotation:-45,x:335.9,y:135.7},4).to({regX:5.7,regY:16.1,scaleX:1,scaleY:1,rotation:-16,x:338.5,y:135.9},3).wait(8));

	// bicep
	this.instance_2 = new lib.bicep();
	this.instance_2.setTransform(117.8,106,1,1,0,0,0,14.6,20.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(87).to({_off:false},0).to({rotation:-16,x:153.2,y:110},4).to({rotation:-8,x:169.6,y:111.8},4).to({rotation:-5,x:183.4,y:116.5},4).to({rotation:0.8,x:199.1,y:116.3},4).to({regY:20.3,scaleX:1,scaleY:1,rotation:-13,x:220,y:115.6},4).to({regY:20.4,rotation:-26,x:238.8,y:113.3},4).to({rotation:-39.8,x:258.5,y:113.4},4).to({regX:14.7,scaleX:1,scaleY:1,rotation:-55.8,x:281.5,y:115.1},4).to({rotation:-48,x:300.2,y:114.1},4).to({rotation:-44,x:311.3,y:115.2},4).to({rotation:-37.2,x:326.6,y:110.8},4).to({regX:14.6,scaleX:1,scaleY:1,rotation:-16,x:340.3,y:110},3).wait(8));

	// closedhand
	this.instance_3 = new lib.openhand();
	this.instance_3.setTransform(110.7,153.7,0.84,0.84,0,0,0,6.5,8.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(87).to({_off:false},0).to({rotation:-16,x:159.5,y:157.7},4).to({scaleX:0.84,scaleY:0.84,rotation:2,x:164,y:160.1},4).to({regX:6.6,scaleX:0.84,scaleY:0.84,rotation:26,x:168.5,y:162.4},4).to({regX:6.5,regY:8.3,scaleX:0.84,scaleY:0.84,rotation:23,x:180.5,y:160.4},4).to({regY:8.2,rotation:9.2,x:212.5,y:162.9},4).to({rotation:-12.8,x:247.3,y:160.7},4).to({rotation:-42,x:283.5,y:156.2},4).to({regX:6.6,scaleX:0.84,scaleY:0.84,rotation:-65,x:318.9,y:146.4},4).to({regX:6.5,rotation:-67,x:333.8,y:143.3},4).to({rotation:-60,x:342.5,y:148.4},4).to({regY:8.1,rotation:-48.2,x:352.1,y:150.2},4).to({regY:8.2,scaleX:0.84,scaleY:0.84,rotation:-16,x:346.6,y:157.7},3).wait(8));

	// torso1
	this.instance_4 = new lib.torso1();
	this.instance_4.setTransform(137.7,119.4,0.845,0.845,0,0,0,27.6,42.8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(87).to({_off:false},0).to({_off:true},1).wait(54));

	// torso2
	this.instance_5 = new lib.torso2();
	this.instance_5.setTransform(141.9,119.4,0.845,0.845,0,0,0,24,42.8);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(88).to({_off:false},0).to({_off:true},1).wait(53));

	// torso3
	this.instance_6 = new lib.torso3();
	this.instance_6.setTransform(148.6,119.1,0.845,0.845,0,0,0,17.1,43.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(89).to({_off:false},0).to({x:161.8,y:119.7},2).to({x:180.9,y:122.5},4).to({x:195,y:124.3},4).to({x:211.6,y:126.1},4).to({x:229.2,y:123.7},4).to({x:246.1,y:121.6},4).to({x:264.6,y:120.1},4).to({x:280.9,y:122.7},4).to({x:299.4,y:124},4).to({x:311.7,y:122.8},4).to({x:330.9,y:117.1},4).to({x:348.9,y:119.7},3).wait(8));

	// foot copy
	this.instance_7 = new lib.foot();
	this.instance_7.setTransform(130.2,239.1,1,1,0,0,0,13.2,6.2);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(87).to({_off:false},0).to({rotation:31,x:161.2,y:234.2},4).to({scaleX:1,scaleY:1,rotation:-13,x:210.3,y:235.7},4).to({rotation:-31.8,x:243.6,y:232.4},4).to({regX:13.3,rotation:-13.6,x:246.8,y:235.2},4).to({regX:13.2,regY:6.3,rotation:0,x:248.6,y:239},4).to({y:238.1},4).to({y:238.7},4).to({regY:6.4,rotation:14,x:249.9,y:234.9},4).to({regY:6.3,rotation:27,x:253.7,y:232.2},4).to({regX:13.1,regY:6.2,rotation:67,x:265.7,y:224.2},4).to({rotation:60,x:301.9,y:222.5},4).to({regX:13.2,scaleX:1,scaleY:1,rotation:31,x:348.3,y:234.2},3).wait(8));

	// calf copy
	this.instance_8 = new lib.calf();
	this.instance_8.setTransform(130.3,212.6,1,1,0,0,0,11.5,24.1);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(87).to({_off:false},0).to({rotation:25,x:169.2,y:207.1},4).to({scaleX:1,scaleY:1,rotation:-9,x:202.4,y:208.8},4).to({regY:24,rotation:-35,x:225.7,y:209.1},4).to({regY:23.9,rotation:-16.8,x:237.5,y:207.4},4).to({scaleX:1,scaleY:1,rotation:0,x:245.8,y:210.2},4).to({regX:11.3,rotation:2,x:249.3},4).to({regX:11.4,rotation:8,x:251.1},4).to({rotation:21,x:256,y:209.1},4).to({rotation:34,x:266.8,y:208.2},4).to({regX:11.3,rotation:53,x:289.1,y:204.6},4).to({regX:11.4,rotation:46,x:322.8,y:200.1},4).to({regX:11.5,regY:24.1,rotation:25,x:356.3,y:207.1},3).wait(8));

	// thigh copy
	this.instance_9 = new lib.thigh();
	this.instance_9.setTransform(135.3,170.1,1,1,0,0,0,10.2,25.4);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(87).to({_off:false},0).to({regY:25.3,rotation:-22,x:170.3,y:168.8},4).to({rotation:-31,x:191.3,y:168.9},4).to({rotation:-36.8,x:203.7,y:169.9},4).to({rotation:-40,x:221.7,y:170.2},4).to({rotation:-27,x:239.6},4).to({regY:25.4,rotation:-13,x:249.9,y:170.8},4).to({rotation:6,x:261.2,y:169.6},4).to({regX:10.3,rotation:17,x:274.2,y:171.2},4).to({rotation:21,x:290.3,y:172.7},4).to({regX:10.2,rotation:6,x:308.5,y:172.6},4).to({rotation:-13,x:333,y:167.8},4).to({regY:25.3,rotation:-22,x:357.4,y:168.8},3).wait(8));

	// foot
	this.instance_10 = new lib.foot();
	this.instance_10.setTransform(156.3,239.1,1,1,0,0,0,13.2,6.2);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(87).to({_off:false},0).to({scaleY:1.01,skewX:7.5,x:156.7},4).to({scaleY:1,rotation:10,skewX:0,x:156.4,y:237.5},4).to({rotation:26,x:156.7,y:234.7},4).to({regX:13.1,rotation:51,x:163.9,y:231.2},4).to({rotation:62,x:189.1,y:221.7},4).to({scaleX:1,scaleY:1,rotation:25,x:229.9,y:223.1},4).to({scaleX:1,scaleY:1,rotation:4,x:284.1,y:230.8},4).to({scaleX:1,scaleY:1,rotation:-25.8,x:325,y:228.5},4).to({rotation:-30,x:339.4,y:232.6},4).to({rotation:0,x:341.2,y:238.5},4).to({x:341.8,y:239.1},4).to({regX:13.2,scaleX:1,scaleY:1.01,skewX:7.5,x:343.8},3).wait(8));

	// calf
	this.instance_11 = new lib.calf();
	this.instance_11.setTransform(151.8,212.5,1,1.011,0,-8.3,0,11.5,24.1);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(87).to({_off:false},0).to({scaleY:1,skewX:-0.9,x:155.6},4).to({regX:11.6,regY:24.2,skewX:13.1,skewY:14,x:158.3,y:211.8},4).to({regX:11.5,skewX:25.1,skewY:26,x:164.6,y:209.9},4).to({regX:11.6,regY:24.1,rotation:34,skewX:0,skewY:0,x:178.6,y:208.2},4).to({rotation:53,x:212.1,y:203.1},4).to({regX:11.5,scaleX:1,scaleY:1,rotation:39,x:245.8,y:201.7},4).to({regX:11.6,regY:24.2,scaleX:1,scaleY:1,rotation:3,x:284.4,y:204.3},4).to({scaleX:1,scaleY:1,rotation:-26.9,x:312,y:205.4},4).to({rotation:-26,x:326.5,y:207},4).to({rotation:-10,x:335,y:209.3},4).to({regY:24.3,rotation:-3,x:341.4,y:210.7},4).to({regX:11.5,regY:24.1,scaleX:1,scaleY:1,rotation:0,skewX:-0.9,x:342.7,y:212.5},3).wait(8));

	// thigh
	this.instance_12 = new lib.thigh();
	this.instance_12.setTransform(150.7,170,0.996,1.006,0,-8.1,-5.5,10.2,25.3);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(87).to({_off:false},0).to({scaleX:1.01,scaleY:1,skewX:-0.7,skewY:-5.4,x:160.2},4).to({scaleY:1,skewX:13.3,skewY:8.6,x:173,y:171.6},4).to({skewX:21.3,skewY:16.6,x:185.7,y:172.9},4).to({regY:25.4,skewX:28.3,skewY:23.6,x:204,y:174.1},4).to({scaleX:1,scaleY:1,skewX:0,skewY:0,x:228.8,y:174.2},4).to({regX:10.1,scaleX:1,scaleY:1,rotation:-18,x:252.8,y:170.1},4).to({regX:10.2,regY:25.3,rotation:-36,x:277.4,y:170.4},4).to({rotation:-41.8,x:292.8,y:170.5},4).to({rotation:-34.8,x:309.7,y:169.3},4).to({regX:10.1,regY:25.2,rotation:-33,x:323.7,y:171.7},4).to({regX:10.2,regY:25.3,rotation:-18,x:338,y:169.2},4).to({scaleX:1.01,scaleY:1,rotation:0,skewX:-0.7,skewY:-5.4,x:347.3,y:170},3).wait(8));

	// forearm
	this.instance_13 = new lib.forearm();
	this.instance_13.setTransform(166.8,133.1,0.999,0.999,-43.9,0,0,5.6,16.1);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(87).to({_off:false},0).to({x:176.3},4).to({scaleX:1,scaleY:1,rotation:-50.9,x:195.1,y:137.1},4).to({regX:5.4,regY:16.2,scaleX:1,scaleY:1,rotation:-62.9,x:206.1,y:133.8},4).to({rotation:-54.9,x:222.4,y:134.1},4).to({rotation:-36.9,x:227.7,y:137},4).to({regY:16.3,rotation:-10.7,x:234.9},4).to({regX:5.3,regY:16.4,rotation:3.3,x:243.1,y:139},4).to({regX:5.4,regY:16.3,rotation:14,x:256.2,y:135.3},4).to({regY:16.4,rotation:19,x:272.4,y:135.4},4).to({rotation:17,x:286.9,y:132.8},4).to({rotation:1,x:316.2,y:130.4},4).to({regX:5.6,regY:16.1,rotation:-43.9,x:363.4,y:133.1},3).wait(8));

	// bicep
	this.instance_14 = new lib.bicep();
	this.instance_14.setTransform(156.4,109.3,0.999,0.999,-43.9,0,0,14.6,20.4);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(87).to({_off:false},0).to({x:165.9},4).to({regX:14.7,regY:20.3,scaleX:1,scaleY:1,rotation:-50.9,x:181.9,y:114.6},4).to({regX:14.6,regY:20.4,scaleX:1,scaleY:1,rotation:-41.9,x:195.6,y:113.9},4).to({regX:14.5,regY:20.3,rotation:-33.9,x:214.6,y:113},4).to({regY:20.4,rotation:-15.9,x:226.8,y:114.7},4).to({regX:14.6,rotation:-6.7,x:240.5,y:111.5},4).to({rotation:-7,x:251,y:112.6},4).to({rotation:-3,x:267,y:111.7},4).to({rotation:2,x:285.3,y:112.7},4).to({x:298.6,y:111.5},4).to({regX:14.7,rotation:-14,x:321.6,y:106.8},4).to({regX:14.6,rotation:-43.9,x:353,y:109.3},3).wait(8));

	// briefcase
	this.instance_15 = new lib.briefcase();
	this.instance_15.setTransform(192.3,169.7,1,1,-23,0,0,13.4,19.4);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(87).to({_off:false},0).to({x:201.7},4).to({rotation:-29.9,x:224.8,y:170.3},4).to({rotation:-41.9,x:242,y:160},4).to({regX:13.5,regY:19.5,rotation:-33.9,x:254.4,y:165.1},4).to({rotation:-15.9,x:248.6,y:176.5},4).to({_off:true},1).wait(34));

	// closedhand
	this.instance_16 = new lib.closedhand();
	this.instance_16.setTransform(184.8,148.2,0.999,0.999,-43.9,0,0,6.5,8.2);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(87).to({_off:false},0).to({x:194.3},4).to({regX:6.4,scaleX:1,scaleY:1,rotation:-50.9,x:214.9,y:149.9},4).to({scaleX:1,scaleY:1,rotation:-62.9,x:228.1,y:142.2},4).to({regX:6.5,regY:8.1,rotation:-54.9,x:242.9,y:145.3},4).to({rotation:-36.9,x:243.8,y:154.1},4).to({regX:6.4,rotation:-10.7,x:241.8,y:159.3},4).to({rotation:3.3,x:244.4,y:162.3},4).to({regX:6.5,rotation:17.3,x:252.6,y:158.7},4).to({regY:8.2,rotation:30.3,x:266.8,y:158.3},4).to({regY:8.1,scaleX:1,scaleY:1,rotation:20.3,x:282.9,y:155.4},4).to({regX:6.6,regY:8.2,rotation:-4.7,x:320,y:154.3},4).to({regX:6.5,scaleX:1,scaleY:1,rotation:-43.9,x:381.4,y:148.2},3).wait(8));

	// shadow
	this.instance_17 = new lib.shadow();
	this.instance_17.setTransform(152.5,247.4,1,1,0,0,0,61.1,1.9);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(87).to({_off:false},0).to({x:347.1},47).wait(8));

	// head
	this.instance_18 = new lib.Tween13("synched",0);
	this.instance_18.setTransform(138.9,83.8);
	this.instance_18._off = true;

	this.instance_19 = new lib.Tween14("synched",0);
	this.instance_19.setTransform(138.9,72.4);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(37).to({_off:false},0).to({_off:true,y:72.4},1).wait(104));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(37).to({_off:false},1).wait(26).to({startPosition:0},0).to({rotation:49,x:188.3,y:114.5},11).to({rotation:0,x:138.9,y:72.4},11).to({_off:true},1).wait(55));

	// briefcase
	this.instance_20 = new lib.briefcase();
	this.instance_20.setTransform(191.8,225.4,1,1,0,0,0,13.4,19.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(76).to({regY:19.4,rotation:-5.3,y:219},0).to({regY:19.6,rotation:-15,x:191.1,y:170.4},10).to({_off:true},1).wait(55));

	// jacket
	this.instance_21 = new lib.jacket();
	this.instance_21.setTransform(140.3,120.3,1,1,0,0,0,41.4,35.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).to({_off:true},15).wait(35).to({_off:false,scaleX:0.94},0).to({scaleX:1},2).wait(12).to({regY:35.2,rotation:30,x:163.3,y:152.4},11).to({regY:35.1,rotation:0,x:140.3,y:120.3},11).to({_off:true},1).wait(55));

	// jacket right
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1B213B").s().p("AjeFvQABgJgDg+QgDg3AGguQAEgdgEhIQgDg2APgiQAyhsAGhUQADgqAMgoQAKgggCgNQgBgMgPgQQgRgSgDgIQAMALA2gEQA6AIAsBGQAKAPAKA0QAGAdAHAvQBGDNAAADIB5BtIgzBQIimijIgqh+IgBCmQAAAeAKBCQAKBEAABEg");
	this.shape.setTransform(164.1,124);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1B213B").s().p("AjXFsIAAgDIgDhDIAAgBQgDg0AGgqIABgIQAEggABhFQAAgzASgjIAEgHQAwhlAQhPIABgGQAHgmAMgkQALgfAAgOIAAgBQgCgMgKgOIgCgCQgNgRgEgIIAAgBQANALAwACIAGACQAxATAlBBQAJARAKAzQAGAeAHAuIAHAVIACAJQA0CngBARIBiBuIgzBAIiSivIgCgKIgoh1IgDA5IgDBoIABAUQABAeAHAvQAIBFAABFIgRACg");
	this.shape_1.setTransform(163.5,124.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1B213B").s().p("AjQFpIgBgDIgDhDIAAgBQgDg1AGgrIABgIQAFghAFhDQADgxAVgjIAFgHQAzhgAZhQIABgFQAMgmANgiQALgfABgOIAAgCQgBgMgJgPIgBgCQgMgQgEgKIAAAAQAPAMAqAIIAGADQAqAZAjBCQAJATAJAwIANBNIAGAWIACAJQAsCfgCAeIA8BWIAPAZIgzAwIh9i6IgDgJIgoh3IgCAKIgEApQgEA0gCA2IABATQACAgAFAuQAHBFAABGIgOAFg");
	this.shape_2.setTransform(162.9,124.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1B213B").s().p("AjKFmIgBgDIgChDIAAgBQgDg1AFgsIABgIIAPhjQAGgwAXgjIAGgHQA2hcAjhPIACgGIAdhGQAMgdACgPIABgCQAAgNgIgPIgBgCIgOgbIAAAAQAQAOAjANIAFAEQAnAgAeBBQAJAXAIAuIAOBNIAFAXIADAJQAiCWgCArIAxBcIADAVIgjAZIgRAGIhojFIgCgJIgrh4IgDAFIgEAqQgHAygBA3IABAUQABAhAEAtQAFBGgBBGIgJAIg");
	this.shape_3.setTransform(162.3,124.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1B213B").s().p("AjHFjIgCgCQABgMgDg5IAAAAQgDg2AFgsIABgIQAHgmANg8QAKguAZgjIAHgIQA4hYAshPIAEgFIAhhEQAMgcACgQIAAgCQABgNgFgQIgCgBIgJgcIAAgBQAQAPAfATIAEAFQAhAnAbBBQAIAZAJAsIAMBOIAGAXIACAKQAbCNgFA4IAlBiIgIARIgmAUIgNgGIhUjQIgCgKIgrh4IgEAAIgJArQgFAxgCA4IAAAUQABAiACAsQAEBHAABGIgHALg");
	this.shape_4.setTransform(162.1,125.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1B213B").s().p("AjFFfIgDgBQAAgLgDg6IAAgBQgDg2AGgsIABgIQAHgpARg5QANgsAdgjIAHgIQA7hUA2hPIADgFQAUgjARgeQAPgbADgRIAAgCQACgOgEgRIgBgBIgKgcIABAAIAsAnIADAGQAcAuAXBCQAIAbAHAqIAOBPIAFAXIACAKQARCFgEBFIAZBoIgUAMIgpAQIgKgRIg/jbIgBgLIgsh5IgGgGIgLAsQgJAwAAA6IAAATQAAAjABAsQAEBHAABIIgFAMg");
	this.shape_5.setTransform(162,125.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1B213B").s().p("AjFFcIgDgBQAAgKgDg7IAAgBQgDg3AHgsIABgIQAHgrAVg3QARgqAfgjIAHgIIB8ifIAEgEQAaghARgeQAQgaAEgSIABgDQACgOgDgRIAAAAQgEgTgEgLIAAAAQAVARAUAeIADAGQAWA1ATBCQAHAeAHAnIAOBPIAFAZIABAHQAJB/gFBSIAOBtIhNATIgxkCIgBgKIgsh7IgGgKIgOAqQgLAxgCA6IAAAUIACBPQACBIAABIIgFAPg");
	this.shape_6.setTransform(162,125.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1B213B").s().p("ABWA/Ig1iMIgPAsQgNAwgDA7IAAAUIABBPIABCRIgCATIjHAAIgEgBQAAgJgDg9QgDg4AHgtIABgIQAIgtAZg0QAUgoAigkIAHgIQBChLBHhPIAEgEQAeghATgdQAQgYAFgTIABgCQADgQgBgRQgCgTgFgMIABAAQAWATAOAjIACAHQARA8AQBCIANBGIAOBPIAEAXIABAKQABB2gHBgIADBzIhbAJg");
	this.shape_7.setTransform(162.1,127);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1B213B").s().p("ABWFrIgCk6Ig2iRIgRArQgQA3gBBIIAAD4IjPAAQAAgJgDg+QgDg4AHguQANhcBehfQBGhIBThRQBBg+ANgrQAEgQAAgSQABgSgFgOQAaAWAIAvIA1EyIABALIgYFTg");
	this.shape_8.setTransform(163.1,128.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1B213B").s().p("ABWFrIgCk6Ig2iSIgRAsQgQA3gBBJIAAD3IjQAAQABgJgDg+QgDg4AHguQANhcBdhfQBHhIBThRQBBg9ANgsQAEgQAAgSQABgSgFgOQAaAWAIAwIA1EyIABAKIgYFTg");
	this.shape_9.setTransform(163.1,128.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1B213B").s().p("ABWA9Ig1iMIgPAsQgOAwgDA7IAAAUIABBPIABCSIgCASIjHAAIgEAAQAAgKgDg9QgDg3AHgtIABgIQAIguAagzQAUgoAigkIAIgIQBBhLBIhPIAFgEQAeghATgcQAQgZAFgTIABgCQAEgPgCgSIAAAAQgBgSgFgNIABABQAWASAOAkIACAHQAQA9APBCIANBGIAOBPIAEAXIABAKQAAB1gHBhIACB0IhdAIg");
	this.shape_10.setTransform(162.2,127.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1B213B").s().p("AjFFcIgDgBQAAgKgDg8QgDg3AHgtIABgIQAHgsAWg1QASgqAfgkIAIgIIB+idIAEgEQAbgiASgeQAPgZAFgSIAAgCQADgPgCgRIgBgBQgCgRgFgNIAAAAQAVASATAfIACAGQAVA3ATBCQAHAeAHAnIANBPIAFAXIABAKQAIB8gGBVIALBvIhPARIgskIIgBgKIgth7IgGgMIgOAsQgLAwgDA6IAAAUQAAAlACAqQACBIAABIIgEARg");
	this.shape_11.setTransform(162,125.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1B213B").s().p("AjFFeIgDgBQAAgKgDg7IAAgBQgDg2AGgtIABgIQAHgpATg5QAOgrAdgiIAHgJIB1ihIAEgFQAWgiAQgfQAPgbAEgRIAAgBQACgPgEgRIAAgBIgJgdIAAAAQAUARAYAaIACAGQAbAwAVBCQAIAcAHApIAOBPIAEAXIACAKQAPCCgFBKIAWBqIgYALIgrANIgIgVIg5jeIgBgLIgsh5IgFgHIgMArQgKAxgBA5IAAAUIABBPQAEBHAABIIgFANg");
	this.shape_12.setTransform(162,125.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1B213B").s().p("AjGFhIgDgCQABgLgDg5IAAgBQgDg2AGgsIABgIQAGgnAPg7QAMgtAbgjIAGgIQA6hWAwhPIADgFQAVgjANggQAOgcADgQIABgCQABgOgFgQIgBgBIgLgcIAAAAQASAPAdAVIAEAFQAfAqAZBCQAIAaAIArIANBOIAFAXIACAKQAXCJgFA+IAgBlIgNAPIgoASIgLgLIhLjVIgBgKIgsh5IgFgCIgJArQgHAxgCA5IAAATQABAjABAsQAFBHAABHIgHALg");
	this.shape_13.setTransform(162,125.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1B213B").s().p("AjHFkIgCgCIgDhEIAAgBQgDg1AGgsIABgIIARhjQAJguAYgjIAGgIQA4haAohPIACgFIAghFQANgcABgQIAAgCQAAgNgFgQIgBgBIgMgcIAAAAQARAOAfAQIAFAFQAjAkAdBBQAIAYAJAtIANBOIAGAWIACAKQAeCRgDAyIAqBgIgEASIgkAXIgPgBIhdjLIgCgKIgrh4IgDADIgIApQgFAzgCA3IABAUQABAiADAsQAEBGAABHIgJAJg");
	this.shape_14.setTransform(162.1,125.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1B213B").s().p("AjMFnIgBgDIgChDIAAgBQgDg1AFgrIABgIQAGgkAHhAQAGgwAWgkIAFgGQA2heAfhPIACgGQANglAOghQAMgeABgPIABgCQAAgMgIgPIgCgBQgJgSgEgJIAAgBQAPAOAmAKIAEAEQAoAeAgBBQAJAWAJAvIANBNIAGAWIACAJQAmCagCAmIA0BaIAGAWIghAbIgRAKIhwjBIgCgKIgrh3IgCAHIgEApQgGAzAAA3IAAAUQABAgAFAtQAEBGAABGIgKAHg");
	this.shape_15.setTransform(162.5,124.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1B213B").s().p("AjSFqIgBgDIgChDIAAgBQgDg1AFgrIABgIQAFghAEhDQADgyAUgjIAEgHQAzhhAXhPIABgGQALglANgjQALgfAAgOIABgCQgBgMgKgPIgBgBQgMgRgEgJIAAgBQAOAMAsAHIAGADQArAXAjBCQAJATAKAxIANBMIAGAWIACAJQAuChgCAaIBQBwIgzAzIiCi4IgCgJIgoh3IgCAMIgEApQgEA0gBA2IABATQACAfAFAuQAIBGAABFIgPAFg");
	this.shape_16.setTransform(163,124.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1B213B").s().p("AjYFtIAAgEIgDhCIAAgBQgDg0AGgrIABgIQAEgfAAhFQAAg0ARgjIAFgHQAwhlAOhPIABgGQAHgmAMgkQALgggBgNIAAgCQgBgLgLgPIgCgBQgNgRgEgIIAAgCQANAMAwABIAHACQAxASAlBBQAKARAKAzIANBMIAGAVIADAJQA1CogBAPIBlBuIgzBCIiViuIgqh/IgDA6QgCAzAAA1IAAAUQACAeAGAvQAJBEAABFIgRADg");
	this.shape_17.setTransform(163.6,124.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1B213B").s().p("AjeFwQABgKgDg9QgDg5AGgtQAEgdgEhIQgDg1APgjQAyhsAGhTQADgrAMgnQAKghgCgMQgBgNgPgQQgRgSgDgHQAMAJA2gDQA6AJAsBFQAKAPAKA1QAGAcAHAvQBGDNAAAEIB5BtIgzBQIimilIgqh9IgBCmQAAAeAKBCQAKBEAABFg");
	this.shape_18.setTransform(164.1,124);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},15).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},16).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[]},1).to({state:[]},37).wait(55));

	// jacket left
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1B213B").s().p("AgTFwQAJg5AFhHQAJiNgThAQgFgOgGg6QgFgzgBgVIhJA2IAOFOIhsAAIgkk5QgEgfAFgYQAJgqAZgxQAZgxABgHQAHggA5gtQBFg2BKgBQA6AAAhAkQAbAeAPA/QAEARATBtQAPBWATAzIAJB9QAHA3gCBFIgCBfg");
	this.shape_19.setTransform(117.4,123.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1B213B").s().p("AACFvIgPgDQAHgtADg1IACggQAEhjgHg8QgFgbgHgVQgGgQgHgwIgBgHIgGgkIgEgaIhEA6IAABFIALEOIgiAFIhGAAIgHgZIghkfQgDgdADgXIABgFQAJgrAXgxQAXgvACgLQAIgjAzguIAHgHQAZgXAcgNQAmgSAogBQAMAAAMABQAqAFAcAcQAdAcATA9QAEAJAIAhIATBSQARBSAVA3IADAhIAKBcIADAaQAEAugBA2IAAAOIgDBTIgDABg");
	this.shape_20.setTransform(116.7,124);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#1B213B").s().p("AAGFtIgNgFQAGguABg2IABgfQADhmgIg7QgFgbgIgVQgHgTgJgtIgCgHIgJgjIgFgRIg+A/IgEBFIALESIgdAKIhHAAIgKgVIgikkQgDgdAEgWIABgFQAJgsAVgyQAVgtADgOQAIgmAtgvIAHgIQAXgaAagOQAkgVAsgBIAWABQAqAEAeAaQAhAbAWA6QAGALAIAfQALAfANAxQAUBQAWA6IAFAhIAMBeIAEAZQAEAugBA4IAAAOIgDBUIgDABg");
	this.shape_21.setTransform(116.1,124.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#1B213B").s().p("AAJFsIgKgIQADgvACg2IAAggQAChogKg7QgFgbgJgVQgIgTgLgtIgDgGIgMgiQgDgIgDgBIg5BFIgHBGIAMEUIgYARIhIAAIgOgTIgikoQgDgcAEgXIABgFQAJgtATgyQATgrADgSQAJgoAogwIAFgJQAVgdAZgPQAigXAugCQAMgBAKABQArAEAgAYQAjAbAaA3QAHAMAKAcQANAgAPAwQAXBMAYA+IAGAhIAOBfIAEAaQAFAugBA5IAAAOIgDBVIgCACg");
	this.shape_22.setTransform(115.5,124.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#1B213B").s().p("AANFqIgJgLQAEguAAg4IABggQgBhqgLg6QgGgbgJgWQgKgWgNgpIgDgGIgPgiQgEgCgDADIg0BKIgKBGIALEYIgSAWIhJAAIgSgPIgiksQgDgeAEgWIABgEQAJgvASgyQAQgpAEgVQAJgrAigyIAFgJQATggAXgRQAhgZAwgDQAMAAAMAAQApADAiAYQAlAYAeA2QAJAMALAbQAQAgAQAuIAzCLIAIAhIARBgIAFAaQAFAvgCA5IAAAPIgCBWIgCACg");
	this.shape_23.setTransform(114.9,124.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#1B213B").s().p("AjSFrIgVgLIgjkwQgEgfAFgVIABgFQAKgwAQgyQANgoAFgYQAKguAcgzIAEgKQAQgiAWgSQAggbAxgEQAMgBANAAQApADAkAWQAoAYAhAyQALANALAZQATAgATAtQAcBHAbBHIAJAgIATBfIAGAbQAFAvgBA7IAAAOIgDBYIgBACIj4AAIgHgNQADgwAAg3IAAghQgChsgNg6QgHgbgJgUIgbhAIgDgHIgSggQgFADgEAHIguBPIgOBGIAMEcIgOAbg");
	this.shape_24.setTransform(114.2,124.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#1B213B").s().p("AjUFzIgZgHIgkk0QgDgfAFgXIABgEQAKgxAOgyQALgnAGgaQAKgxAWg0IAEgLQANglAVgTQAegeAzgFIAZgBQAsACAjAVQArAXAlAwQAMAOANAXQAVAfAVAsQAfBFAcBKIALAgIAWBgIAFAbQAGAwgBA7IAAAPIgDBZIgBACIj6AAIgFgQQACgwgBg4IgBghQgEhugNg6QgIgagKgVIgeg/IgEgHIgVgfQgFAHgFAMIgpBTIgQBHIALEfIgIAhg");
	this.shape_25.setTransform(113.6,126);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#1B213B").s().p("AjWF7IgdgFIgkk2QgDggAFgXIABgGQAKgwAMgzIAQhDQAKgzARg1IADgLQALgoATgVQAdggA0gFIAagBQAsAAAlAUQAuAVAoAuQAOAPAOAUQAYAhAWAqQAiBBAeBPIAMAhIAYBgIAHAbQAGAwgCA8IAAAPIgCBbIgBACIj9AAIgCgTQABgwgCg5IgCghQgFhxgQg4QgIgZgLgYQgOgegTghIgEgFIgYggIgLAcIgkBaIgUBHIAMEjIgDAmg");
	this.shape_26.setTransform(113,127.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#1B213B").s().p("Aj5GCIgkk6QgEggAFgYIA8knQAJgrASgVQAhgqBKAAQBwAABeB0QBLBcA5CgIAiB7QAHA3gCBFIgCBgIkAAAQAAg6gDhHQgHiNgTg9QgVhAgkgxIgggkIhCDMIAOFQg");
	this.shape_27.setTransform(112.4,128.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#1B213B").s().p("AjXF7IgdgDIgkk3QgDggAFgYIABgFIAWhjIAQhDQAKg0AQg1IADgMQALgoATgUQAcghA1gFQAMgCANABQAsAAAmATQAuAWApAuQAOAOAOAVQAYAgAXAqQAiBBAeBPIAMAiIAZBfIAGAbQAGAxgBA8IAAAOIgDBbIAAADIj+AAIgCgTQABgwgCg6IgCghQgFhxgQg4QgIgZgLgYQgOgfgUgfIgEgGIgZgfIgKAdIgjBaIgVBHIAMEjIgDAmg");
	this.shape_28.setTransform(112.9,127.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#1B213B").s().p("AjVF0IgagGIgjk0QgDgfAEgYIABgDQAKgxAOgzQALgmAGgcQAKgxAVg0IADgLQAOgmAUgTQAegeAzgFQAMgBANAAQAsABAkAVQArAWAmAwQAMAOANAWQAWAgAVAsQAgBDAdBMIAKAgIAXBgIAGAbQAGAwgCA7IAAAPIgCBaIgBACIj7AAIgEgQQABgxgBg4IgBghQgEhvgOg5QgIgZgKgXQgNgdgSgiIgEgGIgWggIgKAVIgnBVIgSBHIAMEgIgHAhg");
	this.shape_29.setTransform(113.5,126.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#1B213B").s().p("AjTFtIgWgJIgjkxQgEgfAFgWIABgFQAKgwAPgyQANgnAFgZQAKgvAagzIAEgLQAPgjAWgSQAfgdAygEQAMgBAMABQAqACAkAVQApAYAjAyQALANAMAYQATAgAUAtQAdBGAbBIIAKAgIAUBgIAGAaQAFAwgBA7IAAAOIgDBYIgBADIj4AAIgHgPQADgvgBg4IAAghQgDhtgNg5QgHgbgKgVIgbhAIgEgGIgTggQgFAEgEAJIgsBQIgPBHIAMEdIgMAcg");
	this.shape_30.setTransform(114,125.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#1B213B").s().p("AAPFpIgIgMQADgvAAg3IAAghQgBhrgLg6QgHgbgJgWQgLgXgOgnIgDgHIgQghQgFAAgDAFIgxBMIgMBHIAMEZIgRAYIhJAAIgTgNIgjktQgDgfAEgVIABgFQAKgvARgzQAPgoAEgWQAKgtAfgyIAFgJQARghAXgRQAggbAwgDIAZAAQApACAjAXQAmAZAgA0QAJAMALAaQASAgARAuIA1CNIAIAgIASBfIAFAbQAGAvgCA6IAAAOIgCBXIgCACg");
	this.shape_31.setTransform(114.6,124.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#1B213B").s().p("AALFrIgKgKQAEgvABg2IABggQAAhqgKg6QgGgbgJgWQgJgUgNgrIgCgGIgOgiQgEgEgDABIg2BIIgJBFIAMEXIgVATIhIAAIgQgQIgjkrQgDgcAEgXIABgFQAKguASgyQARgqAEgTQAJgqAkgxIAGgJQATgfAYgQQAigYAvgCQAMgBAMABQApADAhAYQAkAZAcA3QAIAMALAbQAOAgAQAvQAZBLAYBAIAHAhIAQBfIAFAaQAFAvgCA5IAAAOIgCBWIgCACg");
	this.shape_32.setTransform(115.2,124.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#1B213B").s().p("AAIFsIgLgHQADguACg2IABggQAChngJg7QgFgbgIgWQgIgSgLgtIgCgHIgLgiQgEgJgCgDIg7BEIgGBFIAMETIgaAPIhHAAIgNgUIgiknQgDgbAEgXIABgFQAJgtAUgyQATgsADgQQAJgoApgwIAGgIQAWgcAZgPQAjgWAtgCQAMAAAKABQArAEAfAZQAiAaAZA5QAHALAJAdQANAgAOAwQAWBNAXA9IAGAhIANBeIAEAaQAFAvgBA4IAAAOIgDBVIgCABg");
	this.shape_33.setTransform(115.7,124.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#1B213B").s().p("AAFFuIgNgFQAGguACg1IAAggQAEhlgIg7QgFgcgIgUQgHgTgIguIgCgHIgJgjIgEgTIhAA/IgDBFIAMEQIgfAKIhGAAIgKgXIghkiQgEgdAEgXIABgFQAJgsAWgxQAVguADgNQAIglAugvIAHgIQAXgZAbgOQAkgUArgBQALgBAMABQAqAFAeAaQAfAcAWA6QAFALAJAfQAKAgAMAxQAUBQAWA5IAEAhIAMBeIADAaQAFAtgCA4IAAAOIgCBUIgDABg");
	this.shape_34.setTransform(116.3,124.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#1B213B").s().p("AABFvIgPgDQAHgtAEg1IACgfQADhjgHg8QgEgbgHgUQgGgRgHgwIgBgHIgGgkIgEgbIhEA5IALFTIgiAEIhGAAIgHgZIghkfQgDgdAEgXIABgFQAIgrAYgxQAXgvACgKQAHgjA0gtIAIgIQAZgXAcgNQAmgSAoAAIAXABQArAFAbAcQAeAdASA8QAEAKAHAhQAIAfALAyQARBTAVA2IADAiIAJBcIADAaQAEAtgBA3IAAANIgDBUIgDAAg");
	this.shape_35.setTransform(116.8,124);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#1B213B").s().p("AgTFxQAJg7AFhGQAJiNgTg/QgFgQgGg5QgFgzgBgVIhJA1IAOFPIhsAAIgkk4QgEghAFgXQAJgqAZgxQAZgxABgHQAHggA5gtQBFg2BKAAQA6AAAhAkQAbAdAPA/QAEASATBsQAPBVATAzIAJB9QAHA3gCBGIgCBgg");
	this.shape_36.setTransform(117.4,123.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_19}]},15).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[]},1).to({state:[{t:this.shape_27}]},16).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[]},1).to({state:[]},37).wait(55));

	// tie
	this.instance_22 = new lib.tiestraight();
	this.instance_22.setTransform(138.3,92.3,1,1,40.3);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(37).to({_off:false},0).to({rotation:-9.2,y:87.2},4).to({rotation:26},3).to({rotation:14.5},6).wait(14).to({rotation:29.5,x:173.8,y:123.9},11).to({rotation:14.5,x:138.3,y:87.2},11).to({_off:true},1).wait(55));

	// suit-front
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#1B213B").s().p("AnTGCIgkk6QgDggAFgYIA8knQAJgrARgVQAigqBJAAQBzAABeB0QBKBcA4CgIAYBOQAYBiAABXQANgqAXg6QAuhzAzhKQAqg/BWhRQBBg+AMgrQAFgQAAgSQAAgTgFgNQAaAWAJAvIA1EyIAAALIgYFTIhqAAIgBk6Ig2iSIgSAsQgRA3gBBIIAAD4InXAAQABg6gEhHQgHiNgVg9QgVhAgkgxIgggkIhBDMIAOFQg");
	this.shape_37.setTransform(134.1,128.1);
	this.shape_37._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_37).wait(24).to({_off:false},0).to({_off:true},16).wait(102));

	// fist
	this.instance_23 = new lib.fist();
	this.instance_23.setTransform(188.6,194.7,1,1,0,-30,150,6.5,7);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(76).to({_off:false},0).to({skewX:-45,skewY:135,x:184.7,y:147.6},10).to({_off:true},1).wait(55));

	// hand
	this.instance_24 = new lib.hand();
	this.instance_24.setTransform(182.6,154.2,0.834,0.433,0,-75,105,6.2,10.2);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(43).to({_off:false},0).to({scaleX:1,scaleY:1,x:187.1,y:146.7},7).wait(14).to({regY:10.1,skewX:-30,skewY:150,x:190.4,y:201.4},11).to({_off:true},1).wait(66));

	// hand
	this.instance_25 = new lib.hand();
	this.instance_25.setTransform(99.6,157.4,0.675,0.51,0,0,0,6.2,10.2);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(43).to({_off:false},0).to({scaleX:1,scaleY:1,x:106.1,y:158.1},7).wait(14).to({rotation:45,x:112.1,y:166.7},11).to({rotation:0,x:106.1,y:158.1},11).to({_off:true},1).wait(55));

	// legs bending
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#1B213B").s().p("Aj9HuIAAhSIgNAAIAomXIgHnuQAHgDCqgBICoABIAOBfIAlGQIAAGZIgMAAIAlAeIAwAMQATAEAFAOIAHAVIj/AAIAAhRIgFAAIAAmYIgukTIgWEfIgjGMIgSAAIAlAeIAwAMQATAEAFAOIAFAWg");
	this.shape_38.setTransform(142.1,196);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#1B213B").s().p("Aj9HiIAAhRIgNAAIAzmNIgLniQAGgDCrAAICnAAIAPBfIApGFIgLGOIgMAAIAlAdIAwANQATAEAFAOIAHAVIj/AAIAAhRIgFAAIALmNIgykOIgSEaIguGBIgSAAIAlAdIAwANQATADAFAPIAFAVg");
	this.shape_39.setTransform(142.1,197.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#1B213B").s().p("Aj9HXIAAhRIgNAAIA+mCIgQnWQAHgECqgBICoABIA8HZIgWGDIgMAAIAlAdIAwANQATAEAFAOIAHAVIj/AAIAAhRIgFAAIAWmCIg1kJIgPEVIg5F2IgSAAIAlAdIAwANQATADAFAPIAFAVg");
	this.shape_40.setTransform(142.1,198.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#1B213B").s().p("Aj9HMIAAhRIgNAAIBJl3IgUnLQAGgECrAAICnAAIBBHNIghF5IgMAAIAlAdIAwAMQATAFAFANIAHAWIj/AAIAAhRIgFAAIAgl4Ig3kDIgMEPIhEFsIgSAAIAlAdIAwAMQATAEAFAPIAFAVg");
	this.shape_41.setTransform(142.1,199.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#1B213B").s().p("Aj9HBIAAhRIgNAAIBUltIgZm/QAHgDCqgBICoABIBFHBIgsFuIgMAAIAlAdIAwAMQATAEAFAOIAHAWIj/AAIAAhRIgFAAIArltIg7j9IgIEJIhPFhIgSAAIAlAdIAwAMQATAEAFAOIAFAWg");
	this.shape_42.setTransform(142.1,200.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#1B213B").s().p("Aj9G2IAAhSIgNAAIBflhIgdm0QAGgDCrgBICnABIBKG2Ig3FiIgMAAIAlAeIAwAMQATAEAFAOIAHAVIj/AAIAAhRIgFAAIA2lhIg+j4IgFEEIhaFVIgSAAIAlAeIAwAMQATAEAFAOIAFAWg");
	this.shape_43.setTransform(142.1,201.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#1B213B").s().p("Aj9GrIAAhSIgNAAIBqlWIghmpQAGgDCrgBICnABIAPBfIA/FMIhCFXIgMAAIAlAeIAwAMQATAEAFAOIAHAVIj/AAIAAhRIgFAAIBBlWIhDjzIgCD/IhjFKIgSAAIAlAeIAwAMQATAEAFAOIAFAWg");
	this.shape_44.setTransform(142.1,202.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#1B213B").s().p("Aj9GfIAAhRIgNAAIB1lLIgmmeQAHgDCqAAICoAAIAOBfIBEFAIhNFNIgMAAIAlAdIAwANQATAEAFAOIAHAVIj/AAIAAhRIgFAAIBMlMIhHjtIACD6IhuE/IgSAAIAlAdIAwANQATADAFAPIAFAVg");
	this.shape_45.setTransform(142.1,203.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#1B213B").s().p("Aj9GUIAAhRIgNAAICAlAIgqmSQAGgECrAAICnAAIAPBfIBIE1IhYFCIgMAAIAlAdIAwAMQATAFAFANIAHAWIj/AAIAAhRIgFAAIBXlBIhKjoIAFD0Ih5E1IgSAAIAlAdIAwAMQATAEAFAPIAFAVg");
	this.shape_46.setTransform(142.1,205);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#1B213B").s().p("Aj9GJIAAhRIgNAAICKk2IgumGQAHgDCogBICqAAIAOBgIBMEoIhiE4IgMAAIAlAdIAwAMQATAEAFAOIAHAWIj/AAIAAhRIgFAAIBik3IhOjhIAIDuIiDEqIgSAAIAlAdIAwAMQATAEAFAOIAFAWg");
	this.shape_47.setTransform(142.1,206.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#1B213B").s().p("AkAF+IAAhRIgNAAICWkrIgzl7QAHgECoAAICqABIAOBeIBREeIhuEtIgLAAIAlAdIAwAMQATAEAEAOIAIAWIkAAAIAAhRIgFAAIBtksIhQjcIALDpIiPEfIgSAAIAlAdIAxAMQASAEAFAOIAIAWg");
	this.shape_48.setTransform(142.4,207.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#1B213B").s().p("AkFFzIAAhSIgNAAICgkfIg3lwQAHgDCogBICqABIAOBfIBVESIh4EhIgMAAIAlAeIAwAMQATAEAFAOIAHAVIj/AAIAAhRIgEAAIB3kgIhUjXIAODjIiZEUIgSAAIAlAeIAwAMQATAEAFAOIAHAWg");
	this.shape_49.setTransform(142.9,208.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_38}]},64).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_38}]},1).to({state:[]},1).wait(55));

	// pants
	this.instance_26 = new lib.pants();
	this.instance_26.setTransform(142.2,195,1,1,0,0,0,26.8,50.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_26).to({_off:true},64).wait(78));

	// shirt
	this.instance_27 = new lib.shirtsmall();
	this.instance_27.setTransform(136.6,107.6,1,1,0,0,0,9.6,19.5);
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(49).to({_off:false},0).wait(15).to({rotation:30,x:166.6,y:139.1},11).to({rotation:0,x:136.6,y:107.6},11).to({_off:true},1).wait(55));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AozH5IAA7mIRnAAIAAbmIoIL1g");
	mask.setTransform(137.7,26.5);

	// tie
	this.instance_28 = new lib.Tween1("synched",0);
	this.instance_28.setTransform(129.7,-203.1);
	this.instance_28._off = true;

	this.instance_29 = new lib.Tween2("synched",0);
	this.instance_29.setTransform(129.7,79.2);

	this.instance_28.mask = this.instance_29.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_28}]},14).to({state:[{t:this.instance_29}]},22).to({state:[]},1).to({state:[]},50).wait(55));
	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(14).to({_off:false},0).to({_off:true,y:79.2},22,cjs.Ease.get(-1)).wait(106));

	// head
	this.instance_30 = new lib.Tween3("synched",0);
	this.instance_30.setTransform(134.2,-200.5);
	this.instance_30._off = true;

	this.instance_31 = new lib.Tween4("synched",0);
	this.instance_31.setTransform(134.2,81.9);

	this.instance_30.mask = this.instance_31.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_30}]},14).to({state:[{t:this.instance_31}]},22).to({state:[]},1).to({state:[]},50).wait(55));
	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(14).to({_off:false},0).to({_off:true,y:81.9},22,cjs.Ease.get(-1)).wait(106));

	// shirt
	this.instance_32 = new lib.Tween5("synched",0);
	this.instance_32.setTransform(134.5,-150.8);
	this.instance_32._off = true;

	this.instance_33 = new lib.Tween6("synched",0);
	this.instance_33.setTransform(134.5,131.6);
	this.instance_33._off = true;

	this.instance_34 = new lib.shirt();
	this.instance_34.setTransform(134.5,117.3,1,1,0,0,0,39.9,34.7);

	this.instance_32.mask = this.instance_33.mask = this.instance_34.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_32}]},14).to({state:[{t:this.instance_33}]},22).to({state:[{t:this.instance_34}]},2).to({state:[]},11).to({state:[]},38).wait(55));
	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(14).to({_off:false},0).to({_off:true,y:131.6},22,cjs.Ease.get(-1)).wait(106));
	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(14).to({_off:false},22,cjs.Ease.get(-1)).to({_off:true,regX:39.9,regY:34.7,y:117.3,mode:"independent"},2).wait(104));

	// hands
	this.instance_35 = new lib.Tween7("synched",0);
	this.instance_35.setTransform(134.8,-119.9);
	this.instance_35._off = true;

	this.instance_36 = new lib.Tween8("synched",0);
	this.instance_36.setTransform(134.8,162.4);
	this.instance_36._off = true;

	this.instance_35.mask = this.instance_36.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(14).to({_off:false},0).to({_off:true,y:162.4},22,cjs.Ease.get(-1)).wait(106));
	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(14).to({_off:false},22,cjs.Ease.get(-1)).to({y:148.1},2).to({_off:true},1).wait(103));

	// shorts
	this.instance_37 = new lib.Tween9("synched",0);
	this.instance_37.setTransform(139.1,-105.2);
	this.instance_37._off = true;

	this.instance_38 = new lib.Tween10("synched",0);
	this.instance_38.setTransform(139.1,177.2);
	this.instance_38._off = true;

	this.instance_37.mask = this.instance_38.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(14).to({_off:false},0).to({_off:true,y:177.2},22,cjs.Ease.get(-1)).wait(106));
	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(14).to({_off:false},22,cjs.Ease.get(-1)).to({y:162.9},2).to({_off:true},1).wait(103));

	// legs
	this.instance_39 = new lib.Tween11("synched",0);
	this.instance_39.setTransform(139.6,-45.2);
	this.instance_39._off = true;

	this.instance_40 = new lib.Tween12("synched",0);
	this.instance_40.setTransform(139.6,237.2);
	this.instance_40._off = true;

	this.instance_39.mask = this.instance_40.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(14).to({_off:false},0).to({_off:true,y:237.2},22,cjs.Ease.get(-1)).wait(106));
	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(14).to({_off:false},22,cjs.Ease.get(-1)).to({y:222.9},2).to({_off:true},1).wait(103));

	// suit-back
	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#484D62").s().p("AicDoQgDgaABg+QACgvgHgMQgPgXAAhIQgBhVgGgYQgOg1AGgmQAIgyAngQQAfgMASggQAPgaANAAQAcAABQAZQBZAcAQAVQAbAjARBfQAVBzgmA3QgRAagEA9QgHBdgCAMQgWB+iOABIgCAAQh0AAgPhzg");
	this.shape_50.setTransform(137.4,119.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#484D62").s().p("AhMFIQgugRgahPIgDgMQgJgdgFgsQgFgpgJgSQgPgegGg8IgBgFQgHhOgGghQgLg1AHgoIAAAAQAJgzAmgSQAegPAagWIAKgIQAIgKARAAQAVAAArAIQAVAEAZAFQBGAPAeAMQAHADAFAEQAwAZAYBRIAGAVQAGBDgJAzQgEAWgIARQgNAhgGA4QgGA7gIAgIgDAQQgjB/iGALIgWACQgdAAgZgIg");
	this.shape_51.setTransform(137.3,119.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#484D62").s().p("Ag4FDQgpgJgrhSIgFgMQgQgggMgnQgKgkgLgYQgRgkgLg1IgBgEQgOhHgGgqQgJg2AJgpIAAgCQAKgyAlgWQAdgRAigNIANgEQAEgFAZABQAXAAArAEIAuAFQBHAHAiAHIAOADQBFARAeBDQAFAJAEALQADBBgGA5QgCAXgEAVIgQBaQgIA3gNAmIgGARQgvCAh+AVQgXAEgXAAQgRAAgQgCg");
	this.shape_52.setTransform(137.2,119.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#484D62").s().p("AiMDaQhBhkgnh2QgsiFAThUQAXhjBvAAIBkABICdADQB4ADAiBNIgCB+QAACBgrBqQhOC8i+AAQgmAAhBhjg");
	this.shape_53.setTransform(137.1,120.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#484D62").s().p("AgqE3QgrgJg4hPIgVgfQg0hTglhrIgHgVQgoh9ANhIQAPhVBWgJQARgCATABIBjAJIAIABQBaALA+ABIAHAAQAsACA3AGQAqAIASAXQADAFABAFQAHAcABAkIAAAvIAAAIQAAAhgQAwQgVBGgUA4IgHATQgoBmgyArQhBA9hjABIgNgBg");
	this.shape_54.setTransform(137.6,120.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#484D62").s().p("AgjE0QgzgFg5hKQgMgPgLgRQgzhOgphyIgIgWQgsiBAJhFQALhXBcgFQARgBATACQAgAEBDAOIAHACQBQAUBMABIAGAAQAfABBJgKQAwgDAUAKQAHACABADQAOAZADAlIAAAyIAAAHQAAAZgbA5QgiBJgRAyIgIAUQgpBygmAnQg7BGhlADIgEAAIgJAAg");
	this.shape_55.setTransform(138.2,120.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#484D62").s().p("AipDLQg4hSgxiIQgviGAEhBQAHhaBiAAQBDABBLAfQBIAfBeAAQAQAABbgZQBTgXAFAFQAWAUAFApIAAA7QAAAQgmBCQguBNgQArQgxCQgbAlQg6BWhwAAQhHAAhGhmg");
	this.shape_56.setTransform(138.7,121.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#484D62").s().p("Ag/EnQgvgNgnglQgLgIgJgKQgagbgMglQgSg6gehGIgRgnQgSgtgKgiQgKgfgNghQgPgpgBgWQgKhAA4gTQAbgIAggBQAfAAAdAGQAjAIAlAUIAOAHQAfASAYAHQAoAPAzABIAYgBQAVgCArgPQASgHAagOIATgKQAugVARgDIAGgBQAbAKATAfIABAEQAMALAEAlQADAMgIAbIgRAyIgOAlQgHATgNAPQgTAUgKAQIgJAMQglBFgQBFQgLAlgMAWQghA3g9AZQgnAQgtACIgIABQgYAAgYgIg");
	this.shape_57.setTransform(138.5,121.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#484D62").s().p("AgtEtQg7gHgqgbQgMgGgKgIQgigagGgpQgJhAghhKIgTgqQgXgvgLghQgKgdgUgmQgYgugEgRIgBgBQgXhDBDgRQAegIAfgBQAigBAdAHQAkAJAmAZIANAJQAkAZATAIQAqATA1gBQANAAANgBQAcgEAlgSQAQgIAagVIAUgOQAngdAXgHIAHgCQAfgBAiAVIADADQAWAJAKAhQAGAPgDAbIgLA4IgIApQgFAVgSAOQgYARgPAOIgMAMQgtA3gLBZQgHAogNAbQgeA7hDAdQgpASgwAFIgWABQgRAAgTgCg");
	this.shape_58.setTransform(138.3,121.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#484D62").s().p("AiQEnQhCgYAAg4QAAhHgkhNQgshSgRgtQgJgagcgrQgjg1gHgMQglhHBOgQQBOgQA0AOQAlAKAnAgQA0ApAPAJQArAXA4gBQA1gCApgbQATgNApgrQAigkAbgMQAogQA6AOQA0ANAGBEQACATgJBZQgCAWgWANQgfAOgSALQhFAqgGB7QgGB2hvA0QhFAghWAAQhGAAgtgRg");
	this.shape_59.setTransform(138.2,121.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_50}]}).to({state:[{t:this.shape_50}]},14).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[]},1).to({state:[]},63).wait(55));

	// suit-back
	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#1B213B").s().p("AicDoQgDgaABg+QACgvgHgMQgPgXAAhIQgBhVgGgYQgOg1AGgmQAIgyAngQQAfgMASggQAPgaANAAQAcAABQAZQBZAcAQAVQAbAjARBfQAVBzgmA3QgRAagEA9QgHBdgCAMQgWB+iOABIgCAAQh0AAgPhzg");
	this.shape_60.setTransform(137.4,118);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#1B213B").s().p("AhMFIQgugRgahPIgDgMQgJgdgFgsQgFgpgJgSQgPgegGg8IgBgFQgHhOgGghQgLg1AHgoIAAAAQAJgzAmgSQAegPAagWIAKgIQAIgKARAAQAVAAArAIQAVAEAZAFQBGAPAeAMQAHADAFAEQAwAZAYBRIAGAVQAGBDgJAzQgEAWgIARQgNAhgGA4QgGA7gIAgIgDAQQgjB/iGALIgWACQgdAAgZgIg");
	this.shape_61.setTransform(137.3,118.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#1B213B").s().p("Ag4FDQgpgJgrhSIgFgMQgQgggMgnQgKgkgLgYQgRgkgLg1IgBgEQgOhHgGgqQgJg2AJgpIAAgCQAKgyAlgWQAdgRAigNIANgEQAEgFAZABQAXAAArAEIAuAFQBHAHAiAHIAOADQBFARAeBDQAFAJAEALQADBBgGA5QgCAXgEAVIgQBaQgIA3gNAmIgGARQgvCAh+AVQgXAEgXAAQgRAAgQgCg");
	this.shape_62.setTransform(137.2,118.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#1B213B").s().p("AiMDaQhBhkgnh2QgsiGAThTQAXhjBvAAIBkABICdACQB4AEAiBNIgCB+QAACBgrBpQhOC9i+AAQgmAAhBhjg");
	this.shape_63.setTransform(137.1,118.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#1B213B").s().p("AgqE3QgrgJg4hPIgVgfQg0hTglhrIgHgVQgoh9ANhIQAPhVBWgJQARgCATABIBjAJIAIABQBaALA+ABIAHAAQAsACA3AGQAqAIASAXQADAFABAFQAHAcABAkIAAAvIAAAIQAAAhgQAwQgVBGgUA4IgHATQgoBmgyArQhBA9hjABIgNgBg");
	this.shape_64.setTransform(137.6,118.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#1B213B").s().p("AgjE0QgzgFg5hKQgMgPgLgRQgzhOgphyIgIgWQgsiBAJhFQALhXBcgFQARgBATACQAgAEBDAOIAHACQBQAUBMABIAGAAQAfABBJgKQAwgDAUAKQAHACABADQAOAZADAlIAAAyIAAAHQAAAZgbA5QgiBJgRAyIgIAUQgpBygmAnQg7BGhlADIgEAAIgJAAg");
	this.shape_65.setTransform(138.2,119.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#1B213B").s().p("AipDLQg4hSgxiIQgviGAEhBQAHhaBiAAQBDAABLAgQBIAfBeAAQAQAABbgZQBTgXAFAFQAWAVAFAoIAAA7QAAAQgmBCQguBOgQAqQgxCQgbAmQg6BUhwAAQhHABhGhmg");
	this.shape_66.setTransform(138.7,119.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#1B213B").s().p("Ag/EnQgvgNgnglQgLgIgJgKQgagbgMglQgSg6gehGIgRgnQgSgtgKgiQgKgfgNghQgPgpgBgWQgKhAA4gTQAbgIAggBQAfAAAdAGQAjAIAlAUIAOAHQAfASAYAHQAoAPAzABIAYgBQAVgCArgPQASgHAagOIATgKQAugVARgDIAGgBQAbAKATAfIABAEQAMALAEAlQADAMgIAbIgRAyIgOAlQgHATgNAPQgTAUgKAQIgJAMQglBFgQBFQgLAlgMAWQghA3g9AZQgnAQgtACIgIABQgYAAgYgIg");
	this.shape_67.setTransform(138.5,120);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#1B213B").s().p("AgtEtQg7gHgqgbQgMgGgKgIQgigagGgpQgJhAghhKIgTgqQgXgvgLghQgKgdgUgmQgYgugEgRIgBgBQgXhDBDgRQAegIAfgBQAigBAdAHQAkAJAmAZIANAJQAkAZATAIQAqATA1gBQANAAANgBQAcgEAlgSQAQgIAagVIAUgOQAngdAXgHIAHgCQAfgBAiAVIADADQAWAJAKAhQAGAPgDAbIgLA4IgIApQgFAVgSAOQgYARgPAOIgMAMQgtA3gLBZQgHAogNAbQgeA7hDAdQgpASgwAFIgWABQgRAAgTgCg");
	this.shape_68.setTransform(138.3,120.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#1B213B").s().p("AiQEnQhCgYAAg4QAAhHgkhNQgshSgRgtQgJgagcgrQgjg1gHgMQglhHBOgQQBOgQA0AOQAlAKAnAgQA0ApAPAJQArAXA4gBQA1gCApgbQATgNApgrQAigkAbgMQAogQA6AOQA0ANAGBEQACATgJBZQgCAWgWANQgfAOgSALQhFAqgGB7QgGB2hvA0QhFAghWAAQhGAAgtgRg");
	this.shape_69.setTransform(138.2,120.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#484D62").s().p("Albk6QBxAHBNBBQAqAjAMAIQAgATApAAIAJgBIADgCIAOAAIAngHQAugNA/hEQA3g7A5AAQA1AAAbAjQAnA0hcBjQhMBRhXCHQhuCuAABUg");
	this.shape_70.setTransform(142.2,123.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#1B213B").s().p("AlvlgIAbABQBPAFA4AcQAgAQArAlQAdAZARAJQAaAOAiABIAEgBQAEgCAEAAIAMAAIAlgHQAdgIAZgUQAOgNAagcQAhgjAVgNQAigXArAAQAYAAAaAKQAmAQAMAdQAaA8hYBgQhOBThWCIQhpCmAABPIAAA6g");
	this.shape_71.setTransform(141.6,125.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#484D62").s().p("AlIk6QBrAIBIBAQAoAjAMAIQAeATAnAAIA9gKQAsgNA7hEQA0g6A3AAQAyAAAZAiQAlA0hXBiQhIBShTCIQhnCtAABUg");
	this.shape_72.setTransform(142.1,123.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#1B213B").s().p("AlblhIAaACQBKAGA1AbQAeAQApAlQAcAaAPAIQAZAOAgAAIAEAAQAEgCAEAAIALAAIAjgHQAbgIAYgVQAOgMAYgbQAfgkAUgOQAggWApAAQAWAAAZALQAkAOAMAeQAYA8hTBfQhKBUhSCIQhiCnAABOIAAA6gAAPE1QAAhVBoitQBSiHBJhSQBXhjgmg0QgZgigyAAQg2AAg0A7Qg8BEgsANIg8AJQgnAAgfgSQgLgIgogkQhJhAhqgIg");
	this.shape_73.setTransform(141.6,125.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#484D62").s().p("Ak1k6QBkAIBFBAQAmAjALAIQAcATAlAAIA5gKQApgNA5hEQAxg6AzAAQAvAAAYAiQAjA0hSBiQhEBShOCIQhiCtAABUg");
	this.shape_74.setTransform(142.1,123.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#1B213B").s().p("AlIlhIAZACQBGAGAyAbQAcAQAnAlQAaAaAPAIQAYAOAdAAIAEAAQAEgCAEAAIAKAAIAhgHQAagIAWgVQANgMAXgbQAdgkATgOQAfgWAmAAQAVAAAYALQAhAOALAeQAXA8hOBfQhGBUhNCIQhdCnAABOIAAA6gAAOE1QAAhVBiitQBOiHBEhSQBShjgjg0QgYgigvAAQgzAAgxA7Qg5BEgpANIg5AJQglAAgcgSQgLgIgmgkQhFhAhkgIg");
	this.shape_75.setTransform(141.6,125.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#484D62").s().p("Akjk6QBfAIBABAQAjAjALAIQAbATAiAAIA2gKQAngNA0hEQAvg6AwAAQAsAAAWAiQAiA0hOBiQhABShJCIQhcCtAABUg");
	this.shape_76.setTransform(142.1,123.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#1B213B").s().p("Ak0lhIAXACQBCAGAvAbQAbAQAkAlQAZAaANAIQAXAOAcAAIADAAQADgCAEAAIAKAAIAfgHQAYgIAVgVQAMgMAWgbQAcgkARgOQAdgWAkAAQATAAAXALQAfAOALAeQAVA8hJBfQhCBUhICIQhYCnAABOIAAA6gAANE1QAAhVBcitQBJiHBAhSQBOhjgig0QgWgigsAAQgwAAgvA7Qg0BEgnANIg2AJQgiAAgbgSQgLgIgjgkQhAhAhfgIg");
	this.shape_77.setTransform(141.6,125.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#484D62").s().p("AkQk6QBZAIA8BAQAhAjAKAIQAZATAgAAIAygKQAkgNAyhEQArg6AtAAQAqAAAUAiQAgA0hJBiQg8BShECIQhWCtAABUg");
	this.shape_78.setTransform(142,123.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#1B213B").s().p("AkglhIAWACQA+AGArAbQAaAQAhAlQAYAaAMAIQAVAOAbAAIADAAQADgCADAAIAJAAIAegHQAWgIATgVQAMgMAUgbQAagkAQgOQAbgWAiAAQASAAAVALQAeAOAJAeQAVA8hFBfQg9BUhECIQhSCnAABOIAAA6gAANE1QgBhVBXitQBEiHA8hSQBIhjgfg0QgUgigqAAQgtAAgrA7QgyBEgkANIgyAJQggAAgZgSQgKgIgigkQg7hAhZgIg");
	this.shape_79.setTransform(141.5,125.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#484D62").s().p("Aj9k6QBSAIA5BAQAeAjAJAIQAYATAeAAIAugKQAigNAuhEQAog6AqAAQAnAAAUAiQAcA0hDBiQg4BSg/CIQhQCtAABUg");
	this.shape_80.setTransform(142,123.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#1B213B").s().p("AkMlhIAUACQA6AGAoAbQAXAQAgAlQAVAaANAIQATAOAYAAIADAAQADgCAEAAIAIAAIAbgHQAVgIASgVQALgMATgbQAYgkAPgOQAZgWAfAAQASAAATALQAbAOAJAeQAUA8hBBfQg5BUg/CIQhMCnAABOIAAA6gAAME1QAAhVBQitQA/iHA4hSQBDhjgcg0QgUgignAAQgqAAgoA7QguBEgiANIguAJQgeAAgYgSQgJgIgegkQg5hAhSgIg");
	this.shape_81.setTransform(141.6,125.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#484D62").s().p("Ajqk6QBMAIA0BAQAdAjAIAIQAWATAcAAIArgKQAfgNArhEQAlg6AnAAQAkAAASAiQAaA0g+BiQg0BSg7CIQhKCtAABUg");
	this.shape_82.setTransform(141.9,123.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#1B213B").s().p("Aj4lhIASACQA2AGAmAbQAVAQAeAlQATAaAMAIQASAOAWAAIADAAQADgCADAAIAHAAIAZgHQAUgIARgVQAJgMASgbQAWgkAOgOQAYgWAdAAQAQAAASALQAZAOAIAeQASA8g8BfQg0BUg7CIQhHCnAABOIAAA6gAALE1QAAhVBKitQA7iHA0hSQA+hjgag0QgSgigkAAQgnAAglA7QgrBEgfANIgrAJQgcAAgWgSQgIgIgdgkQg0hAhMgIg");
	this.shape_83.setTransform(141.5,125.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#484D62").s().p("AjYk6QBHAIAvBAQAaAjAIAIQAUATAaAAIAngKQAdgNAnhEQAjg6AkAAQAhAAAQAiQAZA0g6BiQgvBSg3CIQhECtAABUg");
	this.shape_84.setTransform(141.9,123.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#1B213B").s().p("AjklhIARACQAxAGAjAbQAUAQAbAlQASAaAKAIQARAOAVAAIACAAQACgCADAAIAHAAIAXgHQASgIAQgVQAJgMAQgbQAVgkAMgOQAWgWAbAAQAOAAARALQAXAOAIAeQAQA8g3BfQgwBUg2CIQhBCnAABOIAAA6gAAKE1QAAhVBEitQA3iHAvhSQA6hjgZg0QgQgighAAQgkAAgjA7QgnBEgdANIgnAJQgaAAgUgSQgIgIgagkQgvhAhHgIg");
	this.shape_85.setTransform(141.5,125.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#484D62").s().p("AjFk6QBAAIAsBAQAYAjAHAIQASATAYAAIAkgKQAagNAkhEQAfg6AhAAQAeAAAPAiQAXA0g1BiQgrBSgyCIQg+CtAABUg");
	this.shape_86.setTransform(141.9,123.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#1B213B").s().p("AjRlhIAQACQAtAGAgAbQASAQAZAlQAQAaAKAIQAPAOATAAIACAAQACgCADAAIAGAAIAVgHQAQgIAPgVQAIgMAPgbQATgkALgOQAUgWAYAAQAOAAAPALQAVAOAHAeQAPA8gyBfQgsBUgyCIQg7CnAABOIAAA6gAAJE1QAAhVA/itQAxiHAshSQA0hjgWg0QgPgigfAAQggAAggA7QgkBEgaANIgkAJQgXAAgSgSQgIgIgXgkQgshAhBgIg");
	this.shape_87.setTransform(141.5,125.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_60}]}).to({state:[{t:this.shape_60}]},14).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_71,p:{scaleX:1,x:141.6}},{t:this.shape_70,p:{scaleX:1,x:142.2}}]},1).to({state:[{t:this.shape_71,p:{scaleX:1,x:141.6}},{t:this.shape_70,p:{scaleX:1,x:142.2}}]},16).to({state:[{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_77},{t:this.shape_76}]},1).to({state:[{t:this.shape_79},{t:this.shape_78}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_83},{t:this.shape_82}]},1).to({state:[{t:this.shape_85},{t:this.shape_84}]},1).to({state:[{t:this.shape_87},{t:this.shape_86}]},1).to({state:[{t:this.shape_71,p:{scaleX:0.516,x:141.5}},{t:this.shape_70,p:{scaleX:0.516,x:141.8}}]},1).to({state:[]},1).to({state:[]},37).wait(55));

	// shadow
	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#999DA9").s().p("AmvANQizgFAAgIQAAgGCzgGQC1gGD6AAQD7AAC1AGQCzAGAAAGQAAAIizAFQizAGj9AAQj8AAizgGg");
	this.shape_88.setTransform(152.6,247.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_88).to({_off:true},87).wait(55));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.3,300,250);


// stage content:



(lib.jobswitcher_animation_300x600 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1();
	this.instance.setTransform(152,58.5,2.19,2.19,0,0,0,153.4,17.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// background
	this.instance_1 = new lib.background();
	this.instance_1.setTransform(150,300,0.5,1.2,0,0,0,300,250);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(143.9,102.7,306.2,797.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;