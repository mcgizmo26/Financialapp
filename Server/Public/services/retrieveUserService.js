angular.module('testApp')
    .service('retrieveService', function($http) {

        this.getUser = function() {
            return $http.get('/retrieveUsers').then(function(res) {
                return res.users;
            })
        }

    });
