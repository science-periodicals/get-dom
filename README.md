# @scipe/get-dom

[![CircleCI](https://circleci.com/gh/science-periodicals/get-dom.svg?style=svg)](https://circleci.com/gh/science-periodicals/get-dom)

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

This is a very simple module. Use it whenever you need to have access to either a `Document` or a
`DOMImplementation` instance in Node or the browser transparently.

When running in Node, this will use `jsdom` to provide you with the right objects. While `jsdom`
works in the browser, it's a pretty big dependency to have and you already have a DOM there. So
when loaded in a browser this module does not at all depend on `jsdom` but rather returns the
current `document` and its `document.implementation`. (If you want a new instance, just use the
`DOMImplementation` to create one).

**NOTE**: This only works with bundlers that respect the `browser` field in `package.json`
(Browserify does, I guess the other big ones do too).

The major version number for this module now tracks that of `jsdom`.

Note: this module is auto published to npm on CircleCI. Only run `npm version
patch|minor|major` and let CI do the rest.


## Installation

    npm install get-dom

## API

```js
import dom from 'get-dom';
let doc = dom.document();
let impl = dom.implementation();
```

Or for those of you who like your JS retro:

```js
var dom = require('get-dom');
var doc = dom.document();
var impl = dom.implementation();
```

You can look under `example-browser` to see how this works in the browser, once browserified.
