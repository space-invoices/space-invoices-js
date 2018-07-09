
module.exports = require('../baseService').extend({
  path: 'documents',
  includeMethods: ['create', 'list', 'getById'],

  send(documentId, data, lang) {
    if (lang !== undefined) {
      return this.requestService.send('post', this.path + '/' + documentId + '/send?l=' + lang, data);
    } else {
      return this.requestService.send('post', this.path + '/' + documentId + '/send', data);
    }
  },

  getPdf(documentId, lang) {
    if (lang !== undefined) {
      return this.requestService.send('get', this.path + '/' + documentId + '/pdf', {}, {
        access_token: this.requestService.token,
      }, null);
    } else {
      return this.requestService.send('get', this.path + '/' + documentId + '/pdf', {}, {
        access_token: this.requestService.token,
        l: lang
      }, null);
    }
  }
});
