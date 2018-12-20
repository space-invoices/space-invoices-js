
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

  createDefault: function(organizationId, defaults) {
    return this.requestService.send('post', 'organizations/' + organizationId + '/defaults', defaults)
  },

  updateDefault: function(organizationId, defaultId, defaults) {
    return this.requestService.send('put', 'organizations/' + organizationId + '/defaults/' + defaultId, defaults)
  }

});
