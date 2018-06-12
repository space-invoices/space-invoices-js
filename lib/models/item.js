
module.exports = require('../baseService').extend({
  path: 'items',
  includeMethods: ['create', 'edit', 'delete', 'list'],

  search: function(organizationId, searchTerm) {
    return this.requestService.send('get', 'organizations/' + organizationId + '/search-items?term=' + searchTerm);
  },

})
