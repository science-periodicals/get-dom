
var assert = require('assert');
var dom = require('.');

describe('Getting Document or DOMImplementation', function () {
  it('should get a Document', () => {
    var doc = dom.document();
    assert(doc, 'there is a Document');
    assert('documentElement' in doc, 'duck types with documentElement');
    assert('implementation' in doc, 'duck types with implementation');
  });
  it('should get a DOMImplementation', () => {
    var di = dom.implementation();
    assert(di, 'there is a DOMImplementation');
    assert('createHTMLDocument' in di, 'duck types with createHTMLDocument');
    assert('createDocument' in di, 'duck types with createDocument');
  });
});
