
module.exports = require('../baseService').extend({
  path: 'taxes',
  includeMethods: ['create', 'delete', 'list'],

  addANewRateToTax: function(taxId, taxRate) {
    return this.requestService.send('post', 'taxes/' + taxId + '/taxRates', taxRate);
  },

})
