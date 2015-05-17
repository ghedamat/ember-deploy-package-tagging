var CoreObject = require('core-object');

module.exports = CoreObject.extend({
  createTag: function() {
    var pjson = require('../package.json');
    return this.manifest + ':' + pjson.version;
  }
});
