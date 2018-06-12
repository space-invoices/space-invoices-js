

module.exports = require('../baseService').extend({
  path: 'recurrences',
  includeMethods: ['delete', 'list'],

  create: function(documentId, data) {
    return this.requestService.send('post', 'documents/' + documentId + '/recurrence', data)
  },
})
