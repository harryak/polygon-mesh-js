/**
 *  @class Geometry
 *  @author Felix Rossmann
 */
 PMJS.Geometry = function() {
  this.vertices = [];
  this.connections = [];
  this.plsUpdate = false;
};

PMJS.Geometry.prototype = {
  update: function() {
    if (this.plsUpdate) {
      this.plsUpdate = false;
    }
    return this;
  }
};
