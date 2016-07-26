angular.module('testApp')
    .controller('employeeController', function($scope, $state, employeeService) {


        // ************************** Creates Underwriter *****************

        $scope.submit = function(underwriterObj) {
            applyService.userObj = Object.assign('underwriterService.userObj', userObj)
        }

        $scope.createUnderwriter = function(userObj) {
            applyService.createUnderwriter(underwriterObj).then(function(res) {
                $state.go('userpage')
            })
        }

        $scope.getUser = function(userObj) {
            employeeService.getUser(userObj._id)
                .then(function(response) {
                  console.log(response);
                    $scope.userObj = response.data;
                })
        }
        employeeService.getUsers()
            .then(function(response) {
                $scope.users = response.data;
            })
        $scope.myUser = function(user) {
            $scope.user = user;
        }






        // updateUserById: function(req, res){
        //     console.log(req.user);
        //     UserModel.findByIdAndUpdate(req.params.id, {$set: req.body}, function(err, result){
        //       if(err) return res.send(err);
        //       res.send(result);
        //     })
        //   },

        // angular.module("testApp")
        //     .service('deleteUserService', function(userId) this.deleteData = function(id) {
        //             return $http({
        //                     method: "Delete"
        //                         // url: "//localhost:3000/api/*******/" + id
        //                 }
        //             });

    })
