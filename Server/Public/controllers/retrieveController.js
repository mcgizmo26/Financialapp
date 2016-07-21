angular.module("testApp")
    .controller("retrieveController", function($scope, retrieveService, mainService, $state) {
        $scope.user = mainService.user;

        $scope.myUsers = retrieveService.getUser().then(function(response) {
            console.log(response);
            $scope.theseUsers = response;
        })

        $scope.viewUsers = function(userId) {
            $state.go('users', {
                userId: userId
            });
        }
    });
