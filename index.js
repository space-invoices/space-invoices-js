
var RequestService = require('./lib/requestService');
var Promise = require('bluebird');

SpaceInvoices.Models = {
  Account: require('./lib/models/account'),
  Document: require('./lib/models/document'),
  Organization: require('./lib/models/organization')
}

SpaceInvoices.DEFAULT_HOST = 'https://api.spaceinvoices.com/api/v1/';

function SpaceInvoices(token) {
  if (!(this instanceof SpaceInvoices)) {
    return new SpaceInvoices(token);
  }

  this.requestService = new RequestService(SpaceInvoices.DEFAULT_HOST, token);

  for (var name in SpaceInvoices.Models) {
    this[
      name[0].toLowerCase() + name.substring(1)
    ] = new SpaceInvoices.Models[name](this);
  }
}

module.exports = SpaceInvoices;