var expect = require('chai').expect;
var PackageTaggingAdapter = require('../../../lib/package-tagging');

var PACKAGE_JSON_VERSION = '0.0.0';

describe('PackageTaggingAdapter', function() {
  describe('#createTag', function() {
    it('returns a tag based on current package version and manifestName', function() {
      var manifestName   = 'ember-cli-deploy';
      var expectedTag    = manifestName + ':' + PACKAGE_JSON_VERSION;
      var revisionTagger = new PackageTaggingAdapter({
        manifest: manifestName
      });

      expect(revisionTagger.createTag()).to.eq(expectedTag);
    });
  });
});
