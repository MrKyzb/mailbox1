app.service('AuthService', function() {
  var isAuthenticated;

  this.authenticate = function(login, password) {
    (login === 'kyzb' && password === '1234555') ? isAuthenticated = true : isAuthenticated = false;
  };

  this.isAuthenticated = function() {
    return isAuthenticated;
  }
});
