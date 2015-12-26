/**
 * Defines the polygon mesh JS object.
 * @author Felix Rossmann
 */
PMJS = {
  lel : 1
};

/**
 * @class Array
 * @author Matthew Wagerfield
 */
PMJS.Array = typeof Float32Array === 'function' ? Float32Array : Array;

/**
 * @class Utils
 * @author Felix Rossmann
 */
PMJS.Utils = {
  randomRange: function(min, max) {
    return (Math.random() * (max - min)) + min;
  },
  randomNormal: function() {
    return ((Math.random() + Math.random() + Math.random() + Math.random()) - 1);
  },
  randomNormalRange: function (min, max) {
    return (this.randomNormal() * (max - min)) + min;
  },
  floorDecPlaces: function(x, decPlaces) {
    var j = Math.pow(10, decPlaces);
    return Math.floor(x * j) / j;
  }
};

/**
 * Request Animation Frame Polyfill.
 * @author Paul Irish
 * @see https://gist.github.com/paulirish/1579671
 */
(function() {
  var lastTime = 0;
  var vendors = ['ms', 'moz', 'webkit', 'o'];

  for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
    window.cancelAnimationFrame  = window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
  }

  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function(callback, element) {
      var currentTime = new Date().getTime();
      var timeToCall = Math.max(0, 16 - (currentTime - lastTime));
      var id = window.setTimeout(function() {
        callback(currentTime + timeToCall);
      }, timeToCall);
      lastTime = currentTime + timeToCall;
      return id;
    };
  }

  if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = function(id) {
      clearTimeout(id);
    };
  }
}());
