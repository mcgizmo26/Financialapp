angular.module("testApp")
    .service('employeeService', function($http) {


        this.createUser = function(underwriterObj) {
            return $http({
                method: 'POST',
                url: '/createemployee',
                data: employeeObj
            })
        }


        this.getUsers = function() {
            return $http.get('/retrieveusers').then(function(res) {
                return res;
            })
        }

        this.getUser = function(userId) {
            return $http.get('/getuser/' + userId).then(function(res) {
                return res;
            })
        }

        this.updateUser = function(userid) {
            console.log(users);
            return $http.put('/userupdate/' + user._id, user).then(function(res) {
                return res;
            })
        }
    })
