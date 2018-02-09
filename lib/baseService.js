var Promise = require('bluebird');
var utils = require('./utils');


BaseService = {}

var hasOwn = {}.hasOwnProperty;

BaseService = function() {
  if (!(this instanceof RequestService)) {
    return new BaseService(requestService);
  }
  this.requestService = requestService;

  if (this.methods) {
    this.methods.forEach(function(methodName) {
      this[methodName] = StripeResource.BASIC_METHODS[methodName];
    }, this);
  }

  this.path = '';
  this.extend = utils.extend;
}

BaseService.prototype = {
  
  get: function() {
    return this.requestService.send('get', this.path)
  },

}


module.exports = BaseService;
