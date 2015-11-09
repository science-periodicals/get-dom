
var core = require('jsdom/lib/jsdom/living');

exports.document = function () {
  return new core.Document({ parsingMode: 'html' });
};

exports.implementation = function () {
  return exports.document().implementation;
};
