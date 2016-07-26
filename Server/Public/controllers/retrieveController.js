angular.module("testApp")
    .controller("retrieveController", function($scope, retrieveService, mainService, $state, user) {
        $scope.userObj = user;
        console.log($scope.userObj);

        // $scope.myUsers = retrieveService.getUser().then(function(response) {
        //     $scope.theseUsers = response;
        // })

        $scope.viewUsers = function(userId) {
            $state.go('userpage', {
                userId: userId
            });
        }
    });
