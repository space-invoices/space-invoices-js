
var RequestService = require('./lib/requestService');
var Promise = require('bluebird');

SpaceInvoices.Models = {
  Accounts: require('./lib/models/account'),
  Clients: require('./lib/models/client'),
  Companies: require('./lib/models/companies'),
  Currency: require('./lib/models/currency'),
  Documents: require('./lib/models/document'),
  Items: require('./lib/models/item'),
  Organizations: require('./lib/models/organization'),
  Payments: require('./lib/models/payments'),
  Recurrences: require('./lib/models/recurrence'),
  Taxes: require('./lib/models/tax'),
}

SpaceInvoices.DEFAULT_HOST = 'https://api.spaceinvoices.com/v1/';

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