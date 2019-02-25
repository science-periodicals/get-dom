var jsdom = require('jsdom');
var JSDOM = jsdom.JSDOM;

exports.document = function() {
  const window = new JSDOM('').window;
  return window.document;
};

exports.implementation = function() {
  return exports.document().implementation;
};
