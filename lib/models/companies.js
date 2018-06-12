
module.exports = require('../baseService').extend({
  path: 'companies',
  includeMethods: [],

  list: function(filter) {
    return this.requestService.send('get', 'companies', {}, filter);
  },

  search: function(searchTerm, filter) {
    return this.requestService.send('get', 'companies/search?term=' + searchTerm, {}, filter);
  },

})
