
module.exports = require('../baseService').extend({
  path: 'Organizations',
  includeMethods: ['get'],

  create: function(accountId, data) {
    return this.requestService.send('post', 'accounts/' + accountId + '/' + this.path, data);
  }

});
