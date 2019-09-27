/**
* Copyright (c) 2013, Takayuki Fukatsu / theguild.jp
* All rights reserved.
* 
* Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met: 
* Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
* Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
*
*THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/


/**
* @class GLDSpringManager
* @constructor
*/
var GLDSpringManager = function()
{
	this.init();
};


/**
* Do not coll this. Used in constructor.
* @method init
*/
GLDSpringManager.prototype.init = function()
{
	this.nodes = [];
	this.springs = [];
	this.wind = 0;
	this.gravity = 0.1;
	this.minX = 0;
	this.maxX = 640;
	this.minY = 0;
	this.maxY = 480;
}


/*
* Creates SpringNode and register it to SpringManager.
*
* @method createNode
* @param x {Number} x position
* @param y {Number} y position
* @param isFixed {Boolean} [extra=false] flag for position fixing.
* @param params {Object} config object for property injection
* @return GLDSpringNode
*/
GLDSpringManager.prototype.createNode = function(x,y,isFixed,params)
{
	return this.addNode(new GLDSpringNode(x,y,isFixed,params));
}


/*
* Registers a node to SpringManager.
*
* @method addNode
* @param node {GLDSpringNode}
* @return GLDSpringNode
*/
GLDSpringManager.prototype.addNode = function(nd)
{
	this.nodes.push(nd);
	return nd;
}


/*
* Registers nodes to SpringManager.
*
* @method addNodes
* @param ar {Array}
* @return Array
*/
GLDSpringManager.prototype.addNodes = function(ar)
{
	var n = ar.length;
	for(var i=0; i<n; i++){
		this.addNode(ar[i]);
	}
	return ar;
}


/*
* Unregisters a node from SpringManager.
*
* @method removeNode
* @param node {GLDSpringNode}
* @return Boolean
*/
GLDSpringManager.prototype.removeNode = function(nd)
{
	var n = this.nodes.length;
	for(var i=0; i<n; i++)
	{
		var node = this.nodes[i];
		if(nd==node){
			this.nodes.splice(i,1);
			return true;
		}
	}
	return false;
}


/*
* Creates SpringNode and register it to SpringManager.
*
* @method createSpring
* @param node0 {GLDSpringNode} first node
* @param node1 {GLDSpringNode} second node
* @param length {Number} stable length for spring. If not specified, distance between 2 nodes is set.
* @param params {Object} config object for property injection
* @return GLDSpring
*/
GLDSpringManager.prototype.createSpring = function(nd0, nd1, length, params)
{
	return this.addSpring(new GLDSpring(nd0,nd1,length,params));
}


/*
* Registers a spring to SpringManager.
*
* @method addSpring
* @param spring {GLDSpring}
* @return GLDSpring
*/
GLDSpringManager.prototype.addSpring = function(sp)
{
	this.springs.push(sp);
	return sp;
}


/*
* Registers springs to SpringManager.
*
* @method addSprings
* @param ar {Array}
* @return Array
*/
GLDSpringManager.prototype.addSprings = function(ar)
{
	var n = ar.length;
	for(var i=0; i<n; i++){
		this.addSpring(ar[i]);
	}
	return ar;
}


/*
* Unregisters a spring from SpringManager.
*
* @method removeSpring
* @param node {GLDSpring}
* @return Boolean
*/
GLDSpringManager.prototype.removeSpring = function(sp)
{
	var n = this.springs.length;
	for(var i=0; i<n; i++)
	{
		var s = this.springs[i];
		if(sp==s){
			this.springs.splice(i,1);
			return true;
		}
	}
	return false;
}


/*
* Update all registered nodes and springs.
*
* @method update
*/
GLDSpringManager.prototype.update = function()
{
	this._updateForce();
	this._updateVelocity();
	this._updatePosition();
	this._updateConstraint();
	this._resetForce();
}


/*
* Returns nearest node from point.
*
* @method nearestNode
* @param x {Number}
* @param y {Number}
* @return GLDSpringNode
*/
GLDSpringManager.prototype.nearestNode = function(x,y)
{
	var minDist = Number.POSITIVE_INFINITY;
	var minNode;
	var n = this.nodes.length;
	for(var i=0; i<n; i++)
	{
		var nd = this.nodes[i];
		var dx = nd.x - x;
		var dy = nd.y - y;
		var distsq = dx*dx+dy*dy;
		
		if(distsq<minDist){
			minDist = distsq;
			minNode = nd;
		}
	}
	
	return minNode;
}


/*
* Returns all nodes that is connected to the node.
*
* @method connectedNode
* @param node {GLDSpringNode}
* @return Array
*/
GLDSpringManager.prototype.connectedNodes = function(node)
{
	var ar = [];
	var n = this.springs.length;
	for(var i=0; i<n; i++)
	{
		var sp = this.springs[i];
		if(sp.node0 == node && sp.node1)
			ar.push(sp.node1);
		if(sp.node1 == node && sp.node0)
			ar.push(sp.node0);
	}
	return ar;
}


GLDSpringManager.prototype.connectedSprings = function(node)
{
	var ar = [];
	var n = this.springs.length;
	for(var i=0; i<n; i++){
		var sp = this.springs[i];
		if(sp.node0 == node && sp.node1)
			ar.push(sp);
		if(sp.node1 == node && sp.node0)
			ar.push(sp);
	}
	
	return ar;
}



GLDSpringManager.prototype.onTouchLeftBoundary = function(node)
{
	//Override here
}

GLDSpringManager.prototype.onTouchRightBoundary = function(node)
{
	//Override here
}

GLDSpringManager.prototype.onTouchTopBoundary = function(node)
{
	//Override here
}

GLDSpringManager.prototype.onTouchBottomBoundary = function(node)
{
	//Override here
}


//Internal Method
GLDSpringManager.prototype._resetForce = function()
{
	var n = this.nodes.length;
	for(var i=0; i<n; i++)
	{
		this.nodes[i]._resetForce();
	}
}


GLDSpringManager.prototype._updateForce = function()
{
	//First apply global force
	var n = this.nodes.length;
	for(var i=0; i<n; i++)
	{
		this.nodes[i].applyForce(this.wind, this.gravity);
		this.nodes[i].applyForce(Math.random()*0.001-0.0005, Math.random()*0.001-0.0005);	//add noise for natural movement
	}
	
	n = this.springs.length;
	for(var i=0; i<n; i++)
	{
		this.springs[i].update();
	}
}


GLDSpringManager.prototype._updateVelocity = function()
{
	var n = this.nodes.length;
	for(var i=0; i<n; i++)
	{
		this.nodes[i]._updateVelocity();
	}
}


GLDSpringManager.prototype._updatePosition = function()
{
	var n = this.nodes.length;
	for(var i=0; i<n; i++)
	{
		this.nodes[i]._updatePosition();
	}
}


GLDSpringManager.prototype._updateConstraint = function()
{
	var n = this.nodes.length;
	for(var i=0; i<n; i++)
	{
		var nd = this.nodes[i];
		if(nd.x < this.minX){
			nd.x = this.minX;
			nd.vx = Math.abs(nd.vx);
			this.onTouchLeftBoundary(nd);
		}else if(nd.x > this.maxX){
			nd.x = this.maxX;
			nd.vx = -Math.abs(nd.vx);
			this.onTouchRightBoundary(nd);
		}
		if(nd.y < this.minY){
			nd.y = this.minY;
			nd.vy = Math.abs(nd.vy) * 0.5;
			nd.vx *= 0.001;
		}else if(nd.y > this.maxY){
			nd.y = this.maxY;
			nd.vy = -Math.abs(nd.vy) * 0.5;
			nd.vx *= 0.001;
		}
	}
}




/**
* @class GLDSpringNode
* @constructor
*/
var GLDSpringNode = function(x, y, isFixed, params)
{
	this.init(x, y, isFixed, params);
	
}


/**
* Do not coll this. Used in constructor.
* @method init
*/
GLDSpringNode.prototype.init = function(x, y, isFixed, params)
{
	this.data = {};	//Free space for user
	this.x = x || 0;
	this.y = y || 0;
	this.isFixed = isFixed || false;
	this.fx = 0;
	this.fy = 0;
	this.vx = 0;
	this.vy = 0;
	this.mass = 1.0;
	this.maxVelocity = 999;
	this.deccel = 0.99;
	
	//Direct params Injection
	if(params){
		for(var key in params)
		{
			this[key] = params[key];
		}
	}
}


/**
* Add force to the node.
* 
* @method applyForce
* @param fx {Number}
* @param fy {Number}
*/
GLDSpringNode.prototype.applyForce = function(fx, fy)
{
	this.fx += fx;
	this.fy += fy;
}


/*
* Returns nodes velocity
*
* @method velocity
* @returns Number
*/
GLDSpringNode.prototype.velocity = function()
{
	return this.vx * this.vx + this.vy * this.vy;
} 


GLDSpringNode.prototype._resetForce = function()
{
	this.fx = 0;
	this.fy = 0;
}


GLDSpringNode.prototype._updateVelocity = function()
{
	this.vx = (this.vx + this.fx / this.mass) * this.deccel;
	this.vy = (this.vy + this.fy / this.mass) * this.deccel;
}


GLDSpringNode.prototype._updatePosition = function()
{
	if(!this.isFixed){
		this.x += this.vx;
		this.y += this.vy; 
	}	
}




/**
* @class GLDSpring
* @constructor
*/
var GLDSpring = function(nd0, nd1, length, params)
{
	this.init(nd0, nd1, length, params);
}


GLDSpring.prototype.init = function(nd0, nd1, length, params)
{
	this.data = {}	//Free space for user
	this.node0 = nd0;
	this.node1 = nd1;
	this.fixedLength = length | this.distance();
	
	this.k = 0.01;
	this.enabled = true;
	
	//Muscle movement factor
	this.amplitude = 0;
	this.period = 0;
	this.shift = 0;
	this.switchback = false;
	
	//Direct params Injection
	if(params){
		for(var key in params)
		{
			this[key] = params[key];
		}
	}
}


GLDSpring.prototype.update = function()
{
	//Muscle Management
	var l;
	if(this.period>0){
		this.shift = (this.switchback)? this.shift-1 : this.shift+1;
		this.shift = this.shift%this.period;
		var rad = Math.sin(this.shift / this.period* 2 * Math.PI);
		l = this.fixedLength + Math.sin(rad)*this.amplitude;
	}else{
		l = this.fixedLength;
	}
	
	var fx = 0;
	var fy = 0;
	var dx = this.node1.x - this.node0.x;
	var dy = this.node1.y - this.node0.y;
	var dist = Math.sqrt(dx*dx+dy*dy);
	
	if(dist>1){
		var f = dist - l;
		fx = dx / dist * f * this.k;
		fy = dy / dist * f * this.k;
	}
	this.node0.applyForce( fx, fy);
	this.node1.applyForce(-fx,-fy);
}

GLDSpring.prototype.distance = function()
{
	var dx = this.node1.x - this.node0.x;
	var dy = this.node1.y - this.node0.y;
	return Math.sqrt(dx*dx+dy*dy);
}


/*
--------------------------------------------------------
	GLDCompulsion
	NOT YET IMPLEMENTED
--------------------------------------------------------
*/

var GLDRepulsion = function(nd0, nd1, length, param)
{
	this.node0 = nd0;
	this.node1 = nd1;
	this.fixedLength = length | this.distance();
	this.power = 10;
	
	this.k = 0.01;
	this.enabled = true;
	
	//Direct Param Injection
	if(param){
		for(var key in param)
		{
			this[key] = param[key];
		}
	}
}

GLDRepulsion.prototype.update = function()
{
	var fx = 0;
	var fy = 0;
	var dx = this.node1.x - this.node0.x;
	var dy = this.node1.y - this.node0.y;
	var dist = Math.sqrt(dx*dx+dy*dy);
	
	if(dist>1){
		var f = dist - l;
		fx = dx / dist /dist / dist * this.power;
		fy = dy / dist /dist / dist * this.power;
	}
	this.node0.applyForce(fx,fy);
	this.node1.applyForce(-fx,-fy);
}

GLDRepulsion.prototype.distance = function()
{
	var dx = this.node1.x - this.node0.x;
	var dy = this.node1.y - this.node0.y;
	return Math.sqrt(dx*dx+dy*dy);
}
