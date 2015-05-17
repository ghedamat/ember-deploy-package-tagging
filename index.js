/* jshint node: true */
'use strict';

var PackageTaggingAdapter = require('./lib/package-tagging');

module.exports = {
  name: 'ember-deploy-package-tagging',
  type: 'ember-deploy-addon',

  adapters: {
    tagging: {
      'package': PackageTaggingAdapter
    }
  }
};
