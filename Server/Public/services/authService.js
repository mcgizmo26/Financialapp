angular.module("testApp").service("authService", function($http) {


// *************************** user login ************************

  this.login = function(user) {
    return $http({
      method: 'post',
      url: '/login',
      data: user
    }).then(function(response) {
      return response;
    });
  };

  this.logout = function() {
    return $http({
      method: 'get',
      url: '/logout'
    }).then(function(response) {
      return response;
    });
  };

  this.getCurrentUser = function() {
    return $http({
      method: 'GET',
      url: '/me'
    }).then(function(response) {
      return response;
    });
  };

  this.registerUser = function(user) {
    return $http({
      method: 'POST',
      url: '/users',
      data: user
    }).then(function(response) {
      return response;
    });
  };

  this.editUser = function(id, user) {
    return $http({
      method: 'PUT',
      url: "/user/" + id,
      data: user
    }).then(function(response) {
      return response;
    });
  };


// *************************** employee login ************************

  this.employeelogin = function(user) {
    return $http({
      method: 'post',
      url: '/login',
      data: user
    }).then(function(response) {
      return response;
    });
  };

  this.employeelogout = function() {
    return $http({
      method: 'get',
      url: '/logout'
    }).then(function(response) {
      return response;
    });
  };

  this.getCurrentEmployee = function() {
    return $http({
      method: 'GET',
      url: '/me'
    }).then(function(response) {
      return response;
    });
  };

  this.registerEmployee = function(user) {
    return $http({
      method: 'POST',
      url: '/employees',
      data: user
    }).then(function(response) {
      return response;
    });
  };

  this.editEmployee = function(id, user) {
    return $http({
      method: 'PUT',
      url: "/employee/" + id,
      data: user
    }).then(function(response) {
      return response;
    });
  };
});
