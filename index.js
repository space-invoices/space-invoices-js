
var BaseService = require('./lib/baseService');
var RequestService = require('./lib/requestService');
var Promise = require('bluebird');

SpaceInvocies = {};

// SpaceInvoices.DEFAULT_HOST = 'https://api.spaceinvoices.com/api/v1/';
SpaceInvoices.DEFAULT_HOST = 'http://localhost:3000/api/';
// SpaceInvoices.DEFAULT_PORT = '3000';

function SpaceInvoices() {
  if (!(this instanceof SpaceInvoices)) {
    return new SpaceInvoices();
  }

  this.requestService = new RequestService(SpaceInvoices.DEFAULT_HOST);

  this.Account = require('./lib/models/account');
}

// POST https://api.spaceinvoices.com/api/v1/accounts

SpaceInvoices.prototype.register = function() {
  return this.requestService.send('post', 'accounts', {
    email: 'r@test.com',
    password: 'test'
  })
}

SpaceInvoices.prototype.init = function(email, password) {
  var self = this;

  return new Promise(function (resolve, reject) {
    return self.requestService.send('post', 'accounts/login', {
      email: email,
      password: password
    })
    .then(function(res) {
      self.requestService.token = res.body.id;
      resolve();
    })
    .catch(function(error) {
      reject(error);
    })
  })
}

module.exports = SpaceInvoices;