/**
 *  @class Dot
 *  @author Felix Rossmann
 */
PMJS.Dot = function(x, y, radius, color, speedX, speedY) {
  this.position = PMJS.Vector2.create(x, y);
  this.radius = radius || PMJS.Config.dotRadius;
  this.color    = color || PMJS.Config.dotColor;
  this.speed    = PMJS.Vector2.create(
                    speedX || PMJS.Config.dotSpeedX,
                    speedY || PMJS.Config.dotSpeedY
                  );
};

PMJS.Dot.prototype = {
  setPosition: function(x, y) {
    PMJS.Vector2.set(this.position, x, y);
    return this;
  },
  setPositionX: function(x) {
    PMJS.Vector2.setX(this.position, x);
    return this;
  },
  setPositionY: function(y) {
    PMJS.Vector2.setY(this.position, y);
    return this;
  },
  moveStep: function() {
    PMJS.Vector2.add(this.position, this.speed);
    return this;
  },
  updateSpeed: function() {
    var deltaX =  PMJS.Utils.floorDecPlaces(
                    PMJS.Utils.randomRange(
                      PMJS.Config.dotSpeedXMin,
                      PMJS.Config.dotSpeedXMax
                    ),
                    4
                  ) * 0.1;
    var speedX = this.speed[0];
    if (deltaX > PMJS.Config.dotSpeedMinDelta || deltaX < 0 - PMJS.Config.dotSpeedMinDelta) {
      speedX += deltaX;
      if (speedX < PMJS.Config.dotSpeedXMin) speedX = PMJS.Config.dotSpeedXMin;
      if (speedX > PMJS.Config.dotSpeedXMax) speedX = PMJS.Config.dotSpeedXMax;
    }
    var deltaY =  PMJS.Utils.floorDecPlaces(
                    PMJS.Utils.randomRange(
                      PMJS.Config.dotSpeedYMin,
                      PMJS.Config.dotSpeedYMax
                    ),
                    4
                  ) * 0.1;
    var speedY = this.speed[1];
    if (deltaY > PMJS.Config.dotSpeedMinDelta || deltaY < 0 - PMJS.Config.dotSpeedMinDelta) {
      speedY += deltaY;
      if (speedY < PMJS.Config.dotSpeedYMin) speedY = PMJS.Config.dotSpeedYMin;
      if (speedY > PMJS.Config.dotSpeedYMax) speedY = PMJS.Config.dotSpeedYMax;
    }
    PMJS.Vector2.setX(this.speed, speedX);
    PMJS.Vector2.setY(this.speed, speedY);
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
  setDirection: function(speedX, speedY) {
    PMJS.Vector2.set(this.direction, speedX, speedY);
    return this;
  }
};
