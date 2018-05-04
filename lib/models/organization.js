
module.exports = require('../baseService').extend({
  path: 'Organizations',
  includeMethods: [],

  create: function(accountId, data) {
    return this.requestService.send('post', 'accounts/' + accountId + '/' + this.path, data);
  },

  list: function(accountId) {
    return this.requestService.send('get', 'accounts/' + accountId + '/organizations/', {});
  }

});
