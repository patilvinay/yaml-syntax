[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url] [![License][apache-image]][apache-url] [![semantic-release][semantic-release-image]][semantic-release-url]

# yaml-syntax

check the yaml file for any possible syntax error

## getting started

```
var fs = require('fs');
var check = require('yaml-syntax');

var file = __dirname + '/test.yaml';
var src = fs.readFileSync(file);

var err = check(src, file);
if (err) {
    console.error(err);
    console.error(Array(76).join('-'));
}
```

[npm-image]: https://badge.fury.io/js/yaml-syntax.svg
[npm-url]: https://npmjs.org/package/yaml-syntax
[travis-image]: https://travis-ci.com/patilvinay/yaml-syntax.svg?branch=master
[travis-url]: https://travis-ci.com/patilvinay/yaml-syntax
[daviddm-image]: https://david-dm.org/patilvinay/yaml-syntax.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/patilvinay/yaml-syntax
[coveralls-image]: https://coveralls.io/repos/patilvinay/yaml-syntax/badge.svg
[coveralls-url]: https://coveralls.io/r/patilvinay/yaml-syntax
[apache-image]: https://img.shields.io/badge/License-Apache%202.0-blue.svg
[apache-url]: https://opensource.org/licenses/Apache-2.0
[semantic-release-image]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release-url]: https://github.com/semantic-release/semantic-release
