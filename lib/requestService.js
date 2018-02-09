var request = require('superagent');

RequestService = {}
RequestService.host = '';

RequestService = function(host, token) {
  if (!(this instanceof RequestService)) {
    return new RequestService(host, token);
  }
  this.host = host;
  this.token = '';
}

RequestService.prototype.send = function(method, endpoint, data, queryParams) {
  // if (queryParams) {
  //   var queryString = '?';
  //   queryParams.forEach(function(param) {
  //   })
  // }
  var req = request(method, this.host + endpoint);

  if (this.token) {
    req.set('Authorization', this.token)
  }
  
  if (data) {
    req.send(data || {})
  }

  return req
}

// Not exported functions
function _JSON2URL(obj, parent) {
  var parts = [];
  for (var key in obj)
  parts.push(this._parseParam(key, obj[key], parent));
  return parts.join('&');
}

function _parseParam(key, value, parent) {
  let processedKey = parent ? parent + '[' + key + ']' : key;
  if (value && ((typeof value) === 'object' || Array.isArray(value))) {
      return this._JSON2URL(value, processedKey);
  }
  return processedKey + '=' + value;
}

module.exports = RequestService;
