/* jshint node: true */
'use strict';

var mergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-imagesloaded-shim',
  included: function(app) {
    this._super.included.apply(this, arguments);
    app.import({
      development: 'vendor/imagesloaded.pkgd.js',
      production: 'vendor/imagesloaded.pkgd.min.js'
    });
    return app;
  },
  treeForVendor: function() {
    return mergeTrees(['node_modules/imagesloaded']);
  }
};
