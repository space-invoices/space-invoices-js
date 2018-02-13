var request = require('superagent');

RequestService = {}
RequestService.host = '';

RequestService = function(host, token) {
  if (!(this instanceof RequestService)) {
    return new RequestService(host, token);
  }
  this.host = host;
  this.token = token;
}

RequestService.prototype.send = function(method, endpoint, data, queryParams) {
  // if (queryParams) {
  //   var queryString = '?';
  //   queryParams.forEach(function(param) {
  //   })
  // }
  var url = this.host + endpoint;
  var tkn = this.token
  return new Promise(function(resolve, reject) {
    var req = request(method, url);

    if (tkn) {
      req.set('Authorization', tkn)
    }
    
    if (data) {
      req.send(data || {})
    }

    req
    .then(function(response) {
      resolve(responseHandler(response))
    })
    .catch(function(error) {
      reject(errorHandler(error));
    });

  });
}

function responseHandler(response) {
  return response.body;
};

function errorHandler(error) {
  var err;
  if(error.response) {
    err = error.response.error;
    err.message = responseCodeText(error.status);
    delete err.text
  } else {
    err = error;
  }
  // delete error.text;
  return err;
};

function responseCodeText(code) {
  switch (code) {
    case 400: return 'Your request is invalid.';
    case 401: return 'Either you are not allowed to access the route or are not authorised for the resource with the given id.';
    case 404: return 'The specified route could not be found.';
    case 422: return 'The provided data is invalid, usualy that means a validation error. Details about the error are visible in the server response body.';
    case 500: return 'We had a problem with our server. Try again later.';
    case 503: return 'We\'re temporarily offline for maintenance. Please try again later';
  }
}
function responseCodeName() {
  switch (code) {
    case 400: return 'Bad Request';
    case 401: return 'Unauthorized';
    case 404: return 'Not Found';
    case 422: return 'Unprecessable entity';
    case 500: return 'Internal Server Error';
    case 503: return 'Service Unavailable';
  }
}

module.exports = RequestService;
