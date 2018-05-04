
module.exports = require('../baseService').extend({
  path: 'documents',
  includeMethods: ['create', 'list', 'getById'],

  send(documentId, recipients) {
    return this.requestService.send('post', this.path + '/' + documentId + '/send', recipients);
  }
});
