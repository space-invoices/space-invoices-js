
module.exports = require('../baseService').extend({
  path: 'accounts',
  includeMethods: [],

  create: function(email, password) {
    return this.requestService.send('post', this.path, {
      email: email,
      password: password
    });
  },

  login: function(email, password) {
    return this.requestService.send('post', this.path + '/login', {
      email: email,
      password: password
    });
  }
});
