
module.exports = require('../baseService').extend({
  path: 'accounts',
  includeMethods: [],

  create: function(data) {
    return this.requestService.send('post', this.path, data);
  },

  login: function(data) {
    return this.requestService.send('post', this.path + '/login', data);
  }
});
