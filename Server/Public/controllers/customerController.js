angular.module("testApp")
    .controller("customerController", function($scope, customerService, mainService, $state, user) {
        $scope.userObj = user[0];
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
