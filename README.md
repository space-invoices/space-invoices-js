
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

**API_KEY** and **ACCOUNT_ID** can be obtained in our Slack channel by joining here: [joinslack.spaceinvoices.com](http://joinslack.spaceinvoices.com)

``` js
var SpaceInvoices = require('space-invoices');

var spaceInvoices = new SpaceInvoices('API_KEY')
```

Example usage SpaceInvoices SDK for creating an Organisation
``` js
var accountId = 'ACCOUNT_ID'

spaceInvoices.organisation.create(accountId, {
	name: 'Studio404', 
	country: "USA"
 })
.then(function(organisation) {
	console.log(organisation);
})
.catch(function(error) {
	console.error(error)
})
```

[spaceinvoices.com](http://spaceinvoices.com)
