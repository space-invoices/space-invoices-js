'use strict';
var hasOwn = {}.hasOwnProperty;
var utils = module.exports = {

  addMethod: function(modelPath, methodName) {
    modelPath + '/'+ methodName + '/';
  },

  extend: function(model) {
    var Super = this;
    var Constructor = hasOwn.call(model, 'constructor') ? model.constructor : function() {
      if (model.includeMethods) {
        model.includeMethods.forEach(function(methodName) {
          this[methodName] = utils.addMethod(model.path, methodName);
        }, this);
      }
      Super.apply(this, arguments);
    };
  
    // This initialization logic is somewhat sensitive to be compatible with
    // divergent JS implementations like the one found in Qt. See here for more
    // context:
    //
    // https://github.com/stripe/stripe-node/pull/334
    Object.assign(Constructor, Super);
    Constructor.prototype = Object.create(Super.prototype);
    Object.assign(Constructor.prototype, model);
  
    return Constructor;
  }
}