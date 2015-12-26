/**
 *	@class Plane
 *	@author Felix Rossmann
 */
PMJS.Plane = function(width, height, dotCount, dotColor) {
  this.width     = width;
  this.height    = height;
  this.dotCount  = dotCount;
  this.dotColor  = dotColor || PMJS.Config.dotColor;
  this.dots      = [];
  this.initDots();
};

PMJS.Plane.prototype = {
  initDots: function() {
    var i;
    var dots = [];

    for (i = 0; i < this.dotCount; i++) {
      this.addDot();
    }
    
    return this;
  },
  setDotColor: function (color) {
    this.dots.forEach(function () {
      this.setColor(color);
    });
    return this;
  },
  addDot: function () {
    var x, y, radius, speedX, speedY, direction;

    x = PMJS.Utils.randomRange(
          0,
          this.width
        );
    y = PMJS.Utils.randomRange(
          0,
          this.height
        );
    radius =  PMJS.Utils.randomRange(
                  0,
                  PMJS.Config.dotRadiusMax
                );
    speedX =  PMJS.Utils.floorDecPlaces(
                PMJS.Utils.randomNormalRange(
                  0,
                  PMJS.Config.dotSpeedXMax
                )
              );
    speedY = PMJS.Utils.floorDecPlaces(
                PMJS.Utils.randomNormalRange(
                  0,
                  PMJS.Config.dotSpeedYMax
                )
              );
    direction = PMJS.Utils.floorDecPlaces(
                  PMJS.Utils.randomRange(
                    PMJS.Config.dotDirectionMin,
                    PMJS.Config.dotDirectionMax
                  ),
                  2
                );

    var dot = new PMJS.Dot(x, y, radius, this.dotColor, speedX, speedY, direction);

    this.dots.push(dot);
    return this;
  },
  removeDot: function () {
    this.dots.pop();
    return this;
  }
};
