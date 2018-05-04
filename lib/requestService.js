var request = require('request-promise');
const querystring = require('querystring');

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

  var url = this.host + endpoint;
  var tkn = this.token
  
  return new Promise(function(resolve, reject) {
    
    var options = {
      method: method,
      uri: url,
      headers: {
        Authorization: tkn
      },
      body: data ? data : null,
      qs: queryParams ? queryParams : null,
      json: data ? true : false, // Automatically stringifies the body to JSON
  }
    
    request(options)
    .then(function(response) {
      resolve(responseHandler(response))
    })
    .catch(function(error) {
      reject(errorHandler(error));
    });

  });
}

function responseHandler(response) {
  return response;
};

function errorHandler(error) {
  var err = new Error();
  // console.log(JSON.parse(error.response.text).error.message);
  if(error) {
  //   err = error.response.error;
  //   err.details = JSON.parse(error.response.text).error.message
  //   // err.details = JSON.parse(error.response.text).error.message);
  //   delete err.text

    err.name = responseCodeName(error.statusCode);
    err.text = responseCodeText(error.statusCode);
    err.message = error.message;
  // } else {
  //   err = error;
  // }
  // delete error.text;
  return err
  } else {
    return error;
  }
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
function responseCodeName(code) {
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
