var expect = require('chai').expect;
var PackageTaggingAdapter = require('../../../lib/package-tagging');

var PACKAGE_JSON_VERSION = '1.2.3';

describe('PackageTaggingAdapter', function() {
  describe('#createTag', function() {
    it('returns a tag based on current package version and manifestName', function() {
      var manifestName   = 'ember-cli-deploy';
      var expectedTag    = manifestName + ':' + PACKAGE_JSON_VERSION;
      var revisionTagger = new PackageTaggingAdapter({
        packageJsonFile: '../node_tests/unit/lib/package.json',
        manifest: manifestName
      });

      expect(revisionTagger.createTag()).to.eq(expectedTag);
    });
  });

  describe('#tagName', function() {
    it('returns a tag name based on current package version', function() {
      var revisionTagger = new PackageTaggingAdapter({
        packageJsonFile: '../node_tests/unit/lib/package.json'
      });

      expect(revisionTagger.tagName()).to.eq('1-2-3');
    });
  });
});
