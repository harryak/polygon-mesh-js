/**
 * @object Vector2
 * @author Felix Rossmann
 */
PMJS.Vector2 = {
  create: function(x, y) {
    var vector = new function() { this.x; this.y };
    this.set(vector, x, y);
    return vector;
  },
  clone: function(a) {
    var vector = this.create();
    this.copy(vector, a);
    return vector;
  },
  set: function(target, x, y) {
    target.x = x || 0;
    target.y = y || 0;
    return this;
  },
  setX: function(target, x) {
    target.x = x || 0;
    return this;
  },
  setY: function(target, y) {
    target.y = y || 0;
    return this;
  },
  get: function(target) {
    return [target.x, target.y];
  },
  getX: function(target) {
    return target.x;
  },
  getY: function(target) {
    return target.y;
  },
  copy: function(target, a) {
    target.x = a.x;
    target.y = a.y;
    return this;
  },
  add: function(target, a) {
    target.x += a.x;
    target.y += a.y;
    return this;
  },
  addX: function(target, x) {
    target.x += x;
    return this;
  },
  addY: function(target, y) {
    target.y += y;
    return this;
  },
  addVectors: function(target, a, b) {
    target.x = a.x + b.x;
    target.y = a.y + b.y;
    return this;
  },
  addScalar: function(target, s) {
    target.x += s;
    target.y += s;
    return this;
  },
  subtract: function(target, a) {
    target.x -= a.x;
    target.y -= a.y;
    return this;
  },
  subtractVectors: function(target, a, b) {
    target.x = a.x - b.x;
    target.y = a.y - b.y;
    return this;
  },
  subtractScalar: function(target, s) {
    target.x -= s;
    target.y -= s;
    return this;
  },
  multiply: function(target, a) {
    target.x *= a.x;
    target.y *= a.y;
    return this;
  },
  multiplyVectors: function(target, a, b) {
    target.x = a.x * b.x;
    target.y = a.y * b.y;
    return this;
  },
  multiplyScalar: function(target, s) {
    target.x *= s;
    target.y *= s;
    return this;
  },
  divide: function(target, a) {
    target.x /= a.x;
    target.y /= a.y;
    return this;
  },
  divideVectors: function(target, a, b) {
    target.x = a.x / b.x;
    target.y = a.y / b.y;
    return this;
  },
  divideScalar: function(target, s) {
    if (s !== 0) {
      target.x /= s;
      target.y /= s;
    } else {
      target.x = 0;
      target.y = 0;
    }
    return this;
  },
  min: function(target, value) {
    if (target.x < value) { target.x = value; }
    if (target.y < value) { target.y = value; }
    return this;
  },
  max: function(target, value) {
    if (target.x > value) { target.x = value; }
    if (target.y > value) { target.y = value; }
    return this;
  },
  clamp: function(target, min, max) {
    this.min(target, min);
    this.max(target, max);
    return this;
  },
  limit: function(target, min, max) {
    var length = this.length(target);
    if (min !== null && length < min) {
      this.setLength(target, min);
    } else if (max !== null && length > max) {
      this.setLength(target, max);
    }
    return this;
  },
  dot: function(a, b) {
    return a.x*b.x + a.y*b.y;
  },
  normalise: function(target) {
    return this.divideScalar(target, this.length(target));
  },
  negate: function(target) {
    return this.multiplyScalar(target, -1);
  },
  distanceSquared: function(a, b) {
    var dx = a.x - b.x;
    var dy = a.y - b.y;
    return dx*dx + dy*dy;
  },
  distance: function(a, b) {
    return Math.sqrt(this.distanceSquared(a, b));
  },
  lengthSquared: function(a) {
    return a.x*a.x + a.y*a.y;
  },
  length: function(a) {
    return Math.sqrt(this.lengthSquared(a));
  },
  setLength: function(target, l) {
    var length = this.length(target);
    if (length !== 0 && l !== length) {
      this.multiplyScalar(target, l / length);
    }
    return this;
  },
  compareX: function(a, b) {
    if (a.x < b.x)
      return -1;
    if (a.x > b.x)
      return 1;
    return 0;
  },
  comparePositionY: function(a, b) {
    if (a.y < b.y)
      return -1;
    if (a.y > b.y)
      return 1;
    return 0;
  }
};
