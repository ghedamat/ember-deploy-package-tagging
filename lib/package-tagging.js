var CoreObject = require('core-object');
var path = require('path');

module.exports = CoreObject.extend({
  createTag: function() {
    return this.manifest + ':' + this._version();
  },
  getTagName: function() {
    return this._version();
  },
  _version: function() {
    var root = process.cwd();
    var packageJsonFile = path.join(root, 'package.json');

    if(this.packageJsonFile) {
      packageJsonFile = this.packageJsonFile;
    }

    return require(packageJsonFile).version;
  }
});
