
module.exports = require('../baseService').extend({
  path: 'accounts',
  includeMethods: [],

  create: function(data) {
    return this.requestService.send('post', this.path, data);
  },

  login: function(data) {
    return this.requestService.send('post', this.path + '/login', data);
  },

  listOrganizations: function(id) {
    return this.requestService.send('get', this.path + '/organizations')
  },

  isUnique: function(email) {
    return this.requestService.send('get', this.path + '/is-unique?email=' + email);
  }
});
