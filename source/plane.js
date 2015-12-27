/**
 *	@class Plane
 *	@author Felix Rossmann
 */
PMJS.Plane = function(width, height, dotCount, dotColor) {
  this.width     = width;
  this.height    = height;
  this.setDotCount(dotCount);
  this.dotColor  = dotColor || PMJS.Config.dotColor;
  this.dots      = [];
  this.lines     = [];
  this.initDots();
  //this.quadTree  = new PMJS.QuadTree(this.dots, 0, this.width, 0, this.height, this.dotSpace * 5);
  //this.updateLines();
};

PMJS.Plane.prototype = {
  setDotCount: function(dotCount) {
    if (undefined !== dotCount) {
      this.dotSpace = Math.ceil((this.width * this.height) / dotCount);
      this.dotCount = dotCount;
    } else {
      this.dotSpace = PMJS.Config.dotSpace;
      this.dotCount = Math.floor((this.width * this.height) / (this.dotSpace * this.dotSpace));
    }
  },
  initDots: function() {
    var i;

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
    var x, y, radius, speedX, speedY, dotColorR, dotColorG, dotColorB, dotColorA;

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
                PMJS.Utils.randomRange(
                  PMJS.Config.dotSpeedXMin,
                  PMJS.Config.dotSpeedXMax
                ),
                4
              );
    speedY = PMJS.Utils.floorDecPlaces(
                PMJS.Utils.randomRange(
                  PMJS.Config.dotSpeedYMin,
                  PMJS.Config.dotSpeedYMax
                ),
                4
              );
    dotColorR = PMJS.Utils.randomIntRange(PMJS.Config.dotColorMinR, PMJS.Config.dotColorMaxR);
    dotColorG = PMJS.Utils.randomIntRange(PMJS.Config.dotColorMinG, PMJS.Config.dotColorMaxG);
    dotColorB = PMJS.Utils.randomIntRange(PMJS.Config.dotColorMinB, PMJS.Config.dotColorMaxB);
    dotColorA = PMJS.Utils.randomRange(PMJS.Config.dotColorMinA, PMJS.Config.dotColorMaxA);
    this.dotColor = 'rgba('+dotColorR+','+dotColorG+','+dotColorB+','+dotColorA+')';

    var dot = new PMJS.Dot(x, y, radius, this.dotColor, speedX, speedY);

    this.dots.push(dot);
    return this;
  },
  updateLines: function() {
    var i, j;
    this.lines = [];

    return this;
  }
};
