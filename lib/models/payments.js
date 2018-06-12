
module.exports = require('../baseService').extend({
  path: 'payments',
  includeMethods: ['edit', 'delete', 'list'],

  create: function(documentId, data) {
    return this.requestService.send('post', 'documents/' + documentId + '/payments', data)
  }
})
