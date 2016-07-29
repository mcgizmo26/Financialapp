angular.module("testApp")
    .service('employeeService', function($http) {


        this.createUser = function(employeeObj) {
            return $http({
                method: 'POST',
                url: '/createemployee',
                data: employeeObj
            })
        }


        this.getUsers = function() {
            return $http.get('/getusers').then(function(res) {
                return res;
            })
        }

        this.getUser = function(userId) {
            return $http.get('/getuser/' + userId).then(function(res) {
                return res;
            })
        }


        this.addUserRef = function(userId) {
            return $http.put('/adduserref/', {id: userId}).then(function(res) {
                return res;
            })
        }

        this.updateUser = function(user, id) {
            return $http.put('/updateuser/' + id, user).then(function(res) {
                return res;
            })
        }

        this.deleteUserRef = function(userId) {
          console.log("2 :" ,userId);
          return $http.put('/deleteuserref/', {id: userId}).then(function(res) {
              return res;
          })
        }
    })
