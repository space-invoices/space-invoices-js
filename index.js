
var RequestService = require('./lib/requestService');
var Promise = require('bluebird');

SpaceInvoices.Models = {
  Account: require('./lib/models/account'),
  Document: require('./lib/models/document'),
  Organisation: require('./lib/models/organisation')
}

SpaceInvoices.DEFAULT_HOST = 'https://api.spaceinvoices.com/api/v1/';

function SpaceInvoices() {
  if (!(this instanceof SpaceInvoices)) {
    return new SpaceInvoices();
  }

  this.requestService = new RequestService(SpaceInvoices.DEFAULT_HOST);

  for (var name in SpaceInvoices.Models) {
    this[
      name[0].toLowerCase() + name.substring(1)
    ] = new SpaceInvoices.Models[name](this);
  }
}

// POST https://api.spaceinvoices.com/api/v1/accounts
SpaceInvoices.prototype.register = function(email, password) {
  return this.requestService.send('post', 'accounts', {
    email: email,
    password: password
  });
}

// POST https://api.spaceinvoices.com/api/v1/accounts/login
SpaceInvoices.prototype.init = function(email, password) {
  var self = this;

  return new Promise(function (resolve, reject) {
    return self.requestService.send('post', 'accounts/login', {
      email: email,
      password: password
    })
    .then(function(token) {
      self.requestService.token = token.id;
      resolve(token);
    })
    .catch(function(error) {
      reject(error);
    })
  })
}

module.exports = SpaceInvoices;