/**
 *	@class Vertex
 *	@author Matthew Wagerfield
 */
PMJS.Vertex = function(x, y, z, diameter) {
  this.position = PMJS.Vector3.create(x, y, z);
  this.diameter = diameter;
};

PMJS.Vertex.prototype = {
  setPosition: function(x, y, z) {
    PMJS.Vector3.set(this.position, x, y, z);
    return this;
  },
  setDiameter: function(diameter) {
  	this.diameter = diameter;
    return this;
  }
};
