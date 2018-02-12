
module.exports = {
  createMethod: function (requestService, methodName) {
    var methods = {
      /**
     * 
     * POST https://api.spaceinvoices.com/api/v1/accounts/login
     * Authenticates with the API, and sets the token for later requests.
     * @param email {string} The email which was registered with the Space Invocies API
     * @param password {string} The password from the user
     */
      create: function(organisationId, data) {
        return requestService.send('post', 'organizations/' + organisationId + '/' + this.path, data)
      },
      list: function(organisationId) {
        return requestService.send('get', 'organizations/' + organisationId + '/' + this.path)
      },
      getById: function(id) {
        return requestService.send('get', this.path + '/' + id)
      },
      edit: function(id, data) {
        return requestService.send('patch', this.path, data)
      },
      delete: function(id) {
        return requestService.send('delete', this.path, data)
      },
    }
    return methods[methodName];
  }
}

