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
  treeForVendor: function() {
    var imagesLoadedModulePath = require.resolve('imagesloaded');
    var imagesLoadedPath = path.dirname(imagesLoadedModulePath);
    return mergeTrees([imagesLoadedPath]);
  }
};
