angular.module('testApp')
    .controller('employeeController', function($scope, $state, employeeService, user) {
        $scope.currentuser = user;

        // ************************** Creates Underwriter *****************

        $scope.submit = function(employeeObj) {
            applyService.userObj = Object.assign('employeeService.userObj', employeeObj)
        }

        $scope.createUnderwriter = function(employeeObj) {
            applyService.createUnderwriter(employeeObj).then(function(res) {
                $state.go('userpage')
            })
        }

        $scope.getUser = function(userObj) {
            employeeService.getUser(userObj._id)
                .then(function(response) {
                    $scope.userObj = response.data;
                })
        }

        employeeService.getUsers()
            .then(function(response) {
                console.log(response);
                $scope.users = response.data;
            })

        $scope.addUserRef = function(id) {
            employeeService.addUserRef(id)
                .then(function(response) {
                    $scope.currentuser.users = response.data.users;
                    $scope.users = response.data;
                })
        }


        $scope.updateUser = function(user) {
            employeeService.updateUser(user, $scope.userObj._id)
                .then(function(response) {
                    $scope.userObj = response.data;
                    employeeService.getUsers()
                        .then(function(response) {
                            $scope.users = response.data;
                        })
                })
        }

        $scope.deleteUserRef = function(id) {
            console.log(id);
            employeeService.deleteUserRef($scope.userObj._id)
                .then(function(response) {
                    $scope.currentuser.users = response.data.users;
                    // $scope.users = response.data;
                })
        }


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
