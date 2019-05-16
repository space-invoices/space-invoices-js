
module.exports = require('../baseService').extend({
  path: 'units',
  includeMethods: ['create', 'edit', 'delete', 'list'],

  count: function(organizationId) {
    return this.requestService.send('get',  'organizations/' + organizationId + '/' + this.path + '/count')
  },
})