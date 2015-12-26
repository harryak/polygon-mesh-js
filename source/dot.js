/**
 *  @class Dot
 *  @author Felix Rossmann
 */
PMJS.Dot = function(x, y, radius, color, speedX, speedY, direction) {
  this.position = PMJS.Vector2.create(x, y);
  this.direction= PMJS.Vector3.create(
                    speedX || PMJS.Config.dotSpeedX,
                    speedY || PMJS.Config.dotSpeedY,
                    direction || PMJS.Config.dotDirection
                  );
  this.radius = radius || PMJS.Config.dotRadius;
  this.color    = color || PMJS.Config.dotColor;
};

PMJS.Dot.prototype = {
  setPosition: function(x, y) {
    PMJS.Vector3.set(this.position, x, y);
    return this;
  },
  moveStep: function() {
    //TODO
    return this;
  },
  updateDirectionStep: function() {
    //TODO
    return this;
  },
  setRadius: function(radius) {
    this.radius = radius;
    return this;
  },
  setColor: function(color) {
    this.color = color;
    return this;
  },
  updateDirection: function(deltaX, deltaY, deltaDirection) {
    PMJS.Vector3.add(this.direction, deltaX, deltaY, deltaDirection);
    return this;
  },
  setDirection: function(speedX, speedY, direction) {
    PMJS.Vector3.set(this.direction, speedX, speedY, direction);
    return this;
  }
};
