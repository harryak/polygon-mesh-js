/**
 *  @class Line
 *  @author Felix Rossmann
 */
PMJS.Line = function(start, end, color, size) {
  this.start = start;
  this.end   = end;
  this.color = color || PMJS.Config.lineColor;
  this.size  = size  || PMJS.Config.lineSize;
};

PMJS.Line.prototype = {
  setStart: function(start) {
    this.start = start;
  },
  setEnd: function(end) {
    this.end = end;
  },
  setColor: function(color) {
    this.color = color;
  },
  setSize: function(size) {
    this.size = size;
  }
};
