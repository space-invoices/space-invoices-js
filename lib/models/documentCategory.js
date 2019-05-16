
module.exports = require('../baseService').extend({
  path: 'documentCategories',
  includeMethods: ['edit', 'delete'],

  create: function(documentId, data) {
    return this.requestService.send('post', 'documents/' + documentId + '/' + this.path, data)
  },
})