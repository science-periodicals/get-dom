
var dom = require('..');
var pre = document.getElementById('log');

function assert (cond, str) {
  pre.textContent += (cond ? 'OK' : 'FAILED') + ': ' + str + '\n';
}

var doc = dom.document();
assert(doc, 'there is a Document');
assert('documentElement' in doc, 'duck types with documentElement');
assert('implementation' in doc, 'duck types with implementation');
var di = dom.implementation();
assert(di, 'there is a DOMImplementation');
assert('createHTMLDocument' in di, 'duck types with createHTMLDocument');
assert('createDocument' in di, 'duck types with createDocument');
