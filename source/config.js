/**
 *  Default configuration for the polygon mesh.
 *  @object Config
 *  @author Felix Rossmann
 */
PMJS.Config = {
  dotRadius: 2,
  dotRadiusMax: 20,
  dotColor: '#fefefe',
  dotBlur: 10,
  dotColorMinR: 255,
  dotColorMaxR: 255,
  dotColorMinG: 128,
  dotColorMaxG: 255,
  dotColorMinB: 50,
  dotColorMaxB: 50,
  dotColorMinA: 0.2,
  dotColorMaxA: 0.8,
  dotSpeedX: 0,
  dotSpeedXMin: -0.6,
  dotSpeedXMax: 0.6,
  dotSpeedY: 0,
  dotSpeedYMin: -0.6,
  dotSpeedYMax: 0.6,
  dotSpeedMinDelta: 0.02,
  dotSpace: 50, // How large is the edge of a square containing one dot if they were evenly distributed? This is a measure for the density of dots.
  lineColor: '#dedede',
  lineSize: 1,
  lineSizeMin: 0.5,
  lineSizeMax: 1.5
}
