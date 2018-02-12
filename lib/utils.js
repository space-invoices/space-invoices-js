'use strict';
var hasOwn = {}.hasOwnProperty;
var utils = module.exports = {

  addMethod: function(modelPath, methodName) {
    return modelPath + '/'+ methodName + '/';
  },

  extend: function(model) {
    var Super = this;
    var Constructor = hasOwn.call(model, 'constructor') ? model.constructor : function() {
      Super.apply(this, arguments);
    };
  
    Object.assign(Constructor, Super);
    Constructor.prototype = Object.create(Super.prototype);
    Object.assign(Constructor.prototype, model);
  
    return Constructor;
  }
}