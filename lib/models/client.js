
module.exports = require('../baseService').extend({
  path: 'clients',
  includeMethods: ['create', 'edit', 'delete', 'list' , 'getById'],

  search: function(organizationId, searchTerm) {
    return this.requestService.send('get', 'organizations/' + organizationId + '/search-clients?term=' + searchTerm);
  },

})
