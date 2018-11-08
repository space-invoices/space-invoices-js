

module.exports = require('../baseService').extend({
  path: 'recurrences',
  includeMethods: ['delete', 'list'],

  create: function(documentId, data) {
    return this.requestService.send('post', 'documents/' + documentId + '/recurrence', data)
  },

  listDocumentRecurrences(documentId) {
    return this.requestService.send('get', 'documents/' + documentId + '/recurrence')
  },
})
