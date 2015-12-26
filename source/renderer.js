/**
 * Defines the polygon mesh JS object.
 * @author Felix Rossmann
 */
PMJS.Renderer = function(target, plane) {
  this.element = target;
  this.element.style.display = 'block';
  this.element.style.background = 'midnightblue';
  this.context = this.element.getContext('2d');
  this.setSize(this.element.width, this.element.height);
  if (undefined !== plane) this.plane = plane;
};

PMJS.Renderer.prototype = {
  setSize: function(width, height) {
    if (this.width === width && this.height === height) return;
    this.width = width;
    this.height = height;
    this.halfWidth = width / 2;
    this.halfHeight = height / 2;
    return this;
  },
  clear: function() {
    this.context.clearRect(0, 0, this.width, this.height);
    return this;
  },
  setPlane: function (plane) {
    this.plane = plane;
  },
  render: function(plane) {
    if (!(plane || this.plane)) return;
    if (!plane) var plane = this.plane;

    var d, dot;

    // Clear Context
    this.clear();

    // Configure Context
    //this.context.lineJoin = 'round';
    //this.context.lineWidth = 1;

    // Draw all dots
    for (d = plane.dotCount - 1; d >= 0; d--) {
      dot = plane.dots[d];

      this.context.beginPath();
      this.context.arc(dot.position[0], dot.position[1], dot.radius, 0, 2 * Math.PI, false);
      this.context.fillStyle = dot.color;
      this.context.fill();

      dot.moveStep();
      dot.updateSpeed();
      if (dot.position[0] < 0) dot.setPositionX(this.width);
      else if (dot.position[0] > this.width) dot.setPositionX(0);
      if (dot.position[1] < 0) dot.setPositionY(this.height);
      else if (dot.position[1] > this.height) dot.setPositionY(0);
    }
    return this;
  },
  animate: function(timestep) {
    if (!timestep) timestep = 50;
    var that = this;
    window.setInterval(function(){
      that.render();
    }, timestep);
  }
};
