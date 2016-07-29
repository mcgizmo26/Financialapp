angular.module('testApp')
    .service('customerService', function($http) {

        this.getUser = function() {
            return $http.get('/getUsers').then(function(res) {
                return res.users;
            })
        }

    });
