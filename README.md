
# Space Invoices Node.js SDK

The Space Invoices SDK provides an easy way to access Space Invoices API from application written NodeJs.

## Documentation

 **Detailed documentation about the API can be found at [docs.spaceinvoices.com](http://docs.spaceinvoices.com)**

**We also invite you to join our Slack community channel [Space Invaders](http://joinslack.spaceinvoices.com)**

## Installation

Install the package with:
```bash
npm install space-invoices --save
```

## Usage

**TOKEN** and **ACCOUNT_ID** can be obtained by signing up for a develoepr account on our website: [spaceinvoices.com](http://spaceinvoices.com)

``` js
var SpaceInvoices = require('space-invoices');
var spaceInvoices = new SpaceInvoices('TOKEN');
```

Example usage of SpaceInvoices SDK for creating an Organization.
``` js
var accountId = 'ACCOUNT_ID';

spaceInvoices.organizations.create(accountId, {
  name: 'SpaceX', 
  country: "USA"
})
.then(function(organization) {
  console.log(organization);
})
.catch(function(error) {
  console.error(error);
});
```

Visit our website [spaceinvoices.com](http://spaceinvoices.com)
