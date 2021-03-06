/* jshint node: true */
'use strict';
var path = require('path');
var mergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-imagesloaded-shim',
  included: function(app) {
    this._super.included.apply(this, arguments);
    app.import({
      development: 'vendor/imagesloaded.pkgd.js',
      production: 'vendor/imagesloaded.pkgd.min.js'
    });
    app.import('vendor/shims/imagesloaded.js');
    return app;
  },
  treeForVendor: function(vendorTree) {
    var trees = [];
    var imagesLoadedPath = path.dirname(require.resolve('imagesloaded'));
    trees.push(imagesLoadedPath);
    if (vendorTree) {
        trees.push(vendorTree);
    }
    return mergeTrees(trees);
  }
};
