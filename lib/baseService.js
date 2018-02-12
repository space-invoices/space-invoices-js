var Promise = require('bluebird');
var utils = require('./utils');
var basicMethodHelper = require('./basicMethods');

BaseService.extend = utils.extend;

var hasOwn = {}.hasOwnProperty;

function BaseService (SpaceInvoices) {

  if (!(this instanceof BaseService)) {
    return new BaseService(SpaceInvoices);
  }

  this.path = this.path;
  this.requestService = SpaceInvoices.requestService;
  if (this.includeMethods) {
    this.includeMethods.forEach(function(methodName) {
      this[methodName] = basicMethodHelper
      .createMethod(SpaceInvoices.requestService, methodName);
    }, this);
  }
}

module.exports = BaseService;
