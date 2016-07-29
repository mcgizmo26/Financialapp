angular.module("testApp").controller("loginController", function($scope, authService, $state) {


// ******************** user login *************************

  $scope.login = function(user) {
    authService.login(user).then(function(response) {
      if (!response.data) {
        alert('User does not exist');
        $scope.user.password = '';
      } else {
        $state.go('customerpage');
      }
    }).catch(function(err) {
      alert('Unable to login');
    });
  };

  $scope.register = function(user) {
    authService.registerUser(user).then(function(response) {
      if (!response.data) {
        alert('Unable to create user');
      } else {
        alert('User Created');
        $scope.newUser = {};
      }
    }).catch(function(err) {
      alert('Unable to create user');
    });
  };


// ****************** employee login ****************************

  $scope.employeelogin = function(employee) {
    authService.employeelogin(employee).then(function(response) {
      if (!response.data) {
        alert('User does not exist');
        $scope.user.password = '';
      } else {
        $state.go('employeepage');
      }
    }).catch(function(err) {
      alert('Unable to login');
    });
  };

  $scope.employeeregister = function(employee) {
    authService.registerEmployee(employee).then(function(response) {
      if (!response.data) {
        alert('Unable to create employee');
      } else {
        alert('User Created');
        $scope.newUser = {};
      }
    }).catch(function(err) {
      alert('Unable to create employee');
    });
  };
});
