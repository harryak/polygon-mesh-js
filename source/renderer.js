/**
 * Defines the polygon mesh JS object.
 * @author Felix Rossmann
 */
PMJS.Renderer = function(target, dotCount) {
  this.element = target;
  this.element.style.display = 'block';
  this.context = this.element.getContext('2d');
  this.setSize(this.element.width, this.element.height);

  this.plane = new PMJS.Plane(this.width, this.height, dotCount);
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

    var d, dot, l, line;

    // Clear Context
    this.clear();

    // Draw all dots
    for (d = plane.dotCount - 1; d >= 0; d--) {
      dot = plane.dots[d];

      this.context.beginPath();
      this.context.arc(PMJS.Vector2.getX(dot.position), PMJS.Vector2.getY(dot.position), dot.radius, 0, 2 * Math.PI, false);
      this.context.fillStyle = dot.color;
      this.context.fill();

      dot.moveStep();
      dot.updateSpeed();

      if (PMJS.Vector2.getX(dot.position) < 0) dot.setPositionX(this.width);
      else if (PMJS.Vector2.getX(dot.position) > this.width) dot.setPositionX(0);
      if (PMJS.Vector2.getY(dot.position) < 0) dot.setPositionY(this.height);
      else if (PMJS.Vector2.getY(dot.position) > this.height) dot.setPositionY(0);
    }

    /*for (l = plane.lines.length - 1; l >= 0; l--) {
      line = plane.lines[l];

      this.context.beginPath();
      this.context.moveTo(line.start.position.x, line.start.position.y);
      this.context.lineTo(line.end.position.x, line.end.position.y);
      this.context.lineWidth = line.size;

      // set line color
      this.context.strokeStyle = line.color;
      this.context.stroke();
    }

    this.plane.updateLines();*/

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
