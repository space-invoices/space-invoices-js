
module.exports = require('../baseService').extend({
  path: 'countries',
  includeMethods: [],

  list: function() {
    return this.requestService.send('get', 'countries/', {});
  }
})
