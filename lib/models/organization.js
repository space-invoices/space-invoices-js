
module.exports = require('../baseService').extend({
  path: 'Organizations',
  includeMethods: ['getById'],

  create: function(accountId, data) {
    return this.requestService.send('post', 'accounts/' + accountId + '/' + this.path, data);
  },

  list: function(accountId) {
    return this.requestService.send('get', 'accounts/' + accountId + '/organizations/', {});
  },

  uploadImage: function(organizationId, file, type) {
    return this.requestService.upload('organizations/' + organizationId + '/upload-image', file, {
      type: type
    })
  },

});
