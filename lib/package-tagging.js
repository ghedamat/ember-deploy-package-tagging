var CoreObject = require('core-object');
var path = require('path');

module.exports = CoreObject.extend({
  createTag: function() {
    var root = process.cwd();
    var packageJsonFile = path.join(root, 'package.json');

    if(this.packageJsonFile) {
      packageJsonFile = this.packageJsonFile;
    }

    var pjson = require(packageJsonFile);
    return this.manifest + ':' + pjson.version;
  }
});
