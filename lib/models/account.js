var BaseService = require('../baseService');

function Account(requestService) {
  this.initialize.apply(this, arguments);
}
module.exports = BaseService.extend({
  path: 'Accounts',
  includeMethods: ['get']
});
