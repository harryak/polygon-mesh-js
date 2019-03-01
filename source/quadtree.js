/**
 *  @class QuadTree.boundaries
 *  @author Felix Rossmann
 */
PMJS.boundaries = function(xs, xe, ys, ye, sizeX) {
  this.xs = xs || 0;
  this.xe = xe || 0;
  this.ys = ys || 0;
  this.ye = ye || 0;
  this.sizex = sizeX || 0;
};

/**
 *  @class QuadTree
 *  @author Felix Rossmann
 */
PMJS.QuadTree = function(dots, xs, xe, ys, ye, sizeX, leafNode) {
  if (sizeX < 0) return;
  this.setBoundaries(xs, xe, ys, ye, sizeX);
  if (undefined !== leafNode && leafNode) {
    this.leafNode = true;
    this.children = dots;
  } else {
    this.leafNode = false;
    this.children = [];
    this.initTree(dots);
  }
};

PMJS.QuadTree.prototype = {
  setBoundaries: function(xs, xe, ys, ye, sizeX) {
    this.boundaries = new PMJS.boundaries(xs, xe, ys, ye, sizeX);
    return this;
  },
  initTree: function(dots) {
    let dots1 = [];
    let dots2 = [];
    let dots3 = [];
    let dots4 = [];

    let leafNodes = false;

    let cutX = (this.boundaries.xe - this.boundaries.xs) / 2;
    if (cutX <= this.boundaries.sizex) {
      leafNodes = true;
    }
    cutX += this.boundaries.xs;
    let cutY = (this.boundaries.ye - this.boundaries.ys) / 2 + this.boundaries.ys;

    if (dots.length > 0) {
      let i;
      for (i = dots.length - 1; i >= 0; i--) {
        if (dots[i].getPositionX() < cutX) {
          if (dots[i].getPositionY() < cutY) {
            dots1.push(dots[i]);
          } else {
            dots3.push(dots[i]);
          }
        } else {
          if (dots[i].getPositionY() < cutY) {
            dots2.push(dots[i]);
          } else {
            dots4.push(dots[i]);
          }
        }
      }
    }

    // TODO: Make recursion less recursive
    if (dots1.length > 0) {
      this.children.push(new PMJS.QuadTree(
                            dots1,
                            this.boundaries.xs,
                            this.boundaries.xs + cutX,
                            this.boundaries.ys,
                            this.boundaries.ys + cutY,
                            this.boundaries.sizex,
                            leafNodes
                          )
                        );
    } else {
      this.children.push(false);
    }
    this.children.push(new PMJS.QuadTree(
                          dots2,
                          this.boundaries.xs + cutX,
                          this.boundaries.xe,
                          this.boundaries.ys + cutY,
                          this.boundaries.ye,
                          this.boundaries.sizex,
                          leafNodes
                        )
                      );
    this.children.push(new PMJS.QuadTree(
                          dots3,
                          this.boundaries.xs,
                          this.boundaries.xs + cutX,
                          this.boundaries.ys + cutY,
                          this.boundaries.ye,
                          this.boundaries.sizex,
                          leafNodes
                        )
                      );
    this.children.push(new PMJS.QuadTree(
                          dots4,
                          this.boundaries.xs + cutX,
                          this.boundaries.xe,
                          this.boundaries.ys + cutY,
                          this.boundaries.ye,
                          this.boundaries.sizex,
                          leafNodes
                        )
                      );
    return this;
  }
};
