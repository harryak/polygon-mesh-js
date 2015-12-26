/**
 * Defines the polygon mesh JS object.
 * @author Felix Rossmann
 */
PMJS.Renderer = function(target) {
  this.element = target;
  this.element.style.display = 'block';
  this.context = this.element.getContext('2d');
  this.setSize(this.element.width, this.element.height);
};

PMJS.Renderer.prototype = {
  setSize: function(width, height) {
    if (this.width === width && this.height === height) return;
    this.width = width;
    this.height = height;
    this.halfWidth = width / 2;
    this.halfHeight = height / 2;
    //this.context.setTransform(1, 0, 0, -1, this.halfWidth, this.halfHeight);
    return this;
  },
  clear: function() {
    this.context.clearRect(-this.halfWidth, -this.halfHeight, this.width, this.height);
    return this;
  },
  render: function(plane) {
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
      this.context.arc(dot.position[0], dot.position[1], Math.ceil(dot.radius), 0, 2 * Math.PI, false);
      this.context.fillStyle = dot.color;
      this.context.fill();
    }
    return this;
  }
};
