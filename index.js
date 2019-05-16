
var RequestService = require('./lib/requestService');

SpaceInvoices.Models = {
  Accounts: require('./lib/models/account'),
  Categories: require('./lib/models/category'),
  Clients: require('./lib/models/client'),
  Companies: require('./lib/models/companies'),
  Countries: require('./lib/models/countries'),
  Currency: require('./lib/models/currency'),
  Documents: require('./lib/models/document'),
  DocumentCategories: require('./lib/models/documentCategory'),
  Items: require('./lib/models/item'),
  Organizations: require('./lib/models/organization'),
  Payments: require('./lib/models/payments'),
  Recurrences: require('./lib/models/recurrence'),
  Units: require('./lib/models/unit'),
  Taxes: require('./lib/models/tax'),
}

SpaceInvoices.API_URL = 'https://api.spaceinvoices.com/v1/';
SpaceInvoices.TEST_API_URL = 'https://api-test.spaceinvoices.com/v1/';
SpaceInvoices.LOCALHOST_API_URL = 'http://localhost:3000/v1/';

function SpaceInvoices(token, env) {
  if (!(this instanceof SpaceInvoices)) {
    return new SpaceInvoices(token);
  }

  let url;

  switch(env) {
    case 'test': url = SpaceInvoices.TEST_API_URL; break;
    case 'localhost': url = SpaceInvoices.LOCALHOST_API_URL; break;
    default: url = SpaceInvoices.API_URL; break;
  }

  this.requestService = new RequestService(url, token);

  for (var name in SpaceInvoices.Models) {
    this[
      name[0].toLowerCase() + name.substring(1)
    ] = new SpaceInvoices.Models[name](this);
  }
}

module.exports = SpaceInvoices;