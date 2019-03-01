/**
 * Defines the polygon mesh JS object.
 * @author Felix Rossmann
 */
PMJS.Renderer = function(target, dotCount) {
  this.element = target;
  this.dotCount = dotCount;
  this.element.style.display = 'block';
  this.context = this.element.getContext('2d');
  this.context.canvas.width  = window.innerWidth;
  this.context.canvas.height = window.innerHeight;
  this.setSize(this.element.width, this.element.height);

  this.redefinePlane(this.dotCount);
};

PMJS.Renderer.prototype = {
  redefinePlane: function (dotCount) {
    this.setPlane(new PMJS.Plane(this.width, this.height, dotCount));
  },
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
  render: function() {
    if (this.width !== window.innerWidth || this.height !== window.innerHeight) {
      this.context.canvas.width  = window.innerWidth;
      this.context.canvas.height = window.innerHeight;
      this.setSize(this.element.width, this.element.height);
      this.setPlane(new PMJS.Plane(this.width, this.height, this.dotCount));
    }
    let d, dot, l, line;

    // Clear Context
    this.clear();

    // Draw all dots
    for (d = this.plane.dotCount - 1; d >= 0; d--) {
      dot = this.plane.dots[d];

      this.context.beginPath();
      this.context.arc(dot.getPositionX(), dot.getPositionY(), dot.radius, 0, 2 * Math.PI, false);
      this.context.fillStyle = dot.color;
      this.context.shadowColor = dot.color;
      this.context.shadowBlur=dot.blur;
      this.context.fill();

      dot.moveStep();
      dot.updateSpeed();

      if (dot.getPositionX() < 0) dot.setPositionX(this.width);
      else if (dot.getPositionX() > this.width) dot.setPositionX(0);
      if (dot.getPositionY() < 0) dot.setPositionY(this.height);
      else if (dot.getPositionY() > this.height) dot.setPositionY(0);
    }

    /*for (l = this.plane.lines.length - 1; l >= 0; l--) {
      line = this.plane.lines[l];

      this.context.beginPath();
      this.context.moveTo(line.start.position.x, line.start.position.y);
      this.context.lineTo(line.end.position.x, line.end.position.y);
      this.context.lineWidth = line.size;

      // set line color
      this.context.strokeStyle = line.color;
      this.context.stroke();
    }

    this.this.plane.updateLines();*/

    return this;
  },
  animate: function(timestep) {
    if (!timestep) timestep = 50;
    let that = this;
    window.setInterval(function(){
      that.render();
    }, timestep);
  }
};
