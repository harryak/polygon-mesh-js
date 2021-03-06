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
  randomIntRange: function(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
  },
  randomNormal: function() {
    //TODO: This does not work.
    return ((Math.random() + Math.random() + Math.random() + Math.random()) - 1);
  },
  randomNormalRange: function (min, max) {
    return (this.randomNormal() * (max - min)) + min;
  },
  floorDecPlaces: function(x, decPlaces) {
    let j = Math.pow(10, decPlaces);
    return Math.floor(x * j) / j;
  },
  hexCodeToRGBA: function(hexcode) {
    hexcode = hexcode.replace('#','');
    let r = parseInt(hexcode.substring(0,2), 16);
    let g = parseInt(hexcode.substring(2,4), 16);
    let b = parseInt(hexcode.substring(4,6), 16);

    return 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')';
  },
  /**
   * @return {string}
   */
  RGBAtoHexCode: function(rgba) {
    rgba = rgba.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
    return (rgba && rgba.length === 4) ? "#" +
      ("0" + parseInt(rgba[1],10).toString(16)).slice(-2) +
      ("0" + parseInt(rgba[2],10).toString(16)).slice(-2) +
      ("0" + parseInt(rgba[3],10).toString(16)).slice(-2) : '';
  }
};

/**
 * Request Animation Frame Polyfill.
 * @author Paul Irish
 * @see https://gist.github.com/paulirish/1579671
 */
(function() {
  let lastTime = 0;
  let vendors = ['ms', 'moz', 'webkit', 'o'];

  for(let x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
    window.cancelAnimationFrame  = window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
  }

  if (!window.requestAnimationFrame) {
    // noinspection JSValidateTypes
    window.requestAnimationFrame = function(callback, element) {
      let currentTime = new Date().getTime();
      let timeToCall = Math.max(0, 16 - (currentTime - lastTime));
      let id = window.setTimeout(function() {
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
