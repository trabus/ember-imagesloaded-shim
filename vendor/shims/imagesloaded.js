(function() {
  function vendorModule() {
    'use strict';

    return { 'default': self['imagesloaded'] };
  }

  define('imagesloaded', [], vendorModule);
})();
