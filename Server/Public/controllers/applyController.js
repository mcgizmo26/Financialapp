angular.module('testApp')
.controller('applyController', function($scope, $state, applyService){


// ************************** Creates User *****************

  $scope.submit = function(userObj){
    applyService.userObj = Object.assign('applyService.userObj', userObj)
  }

  $scope.createUser = function(userObj){
    applyService.createUser(userObj).then(function(res){
      $state.go('userpage')
    })
  }


// ****************** Controlls Dashes *******************


  $scope.addDashes = function(str, model){
    $scope.userObj.hometele  = applyService.addDashes(model);
  };

  $scope.addDashes1 = function(str, model){
    $scope.userObj.celltele  = applyService.addDashes(model);
  };

  $scope.addDashes2 = function(str, model){
    $scope.userObj.employertele = applyService.addDashes(model);
  }

  $scope.addDashes3 = function(str, model){
    $scope.userObj.ssn = applyService.addDashes3(model);
  };

})
