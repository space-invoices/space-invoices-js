
module.exports = require('../baseService').extend({
  path: 'currencies',
  includeMethods: [],

  list: function() {
    return this.requestService.send('get', this.path);
  }
})