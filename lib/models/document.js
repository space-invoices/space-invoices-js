
module.exports = require('../baseService').extend({
  path: 'documents',
  includeMethods: ['create', 'list', 'getById'],

  send(documentId, data, lang) {
    if (lang !== undefined) {
      return this.requestService.send('post', this.path + '/' + documentId + '/send?l=' + lang, data);
    } else {
      return this.requestService.send('post', this.path + '/' + documentId + '/send', data);
    }
  }
});
