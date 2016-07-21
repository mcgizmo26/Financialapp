angular.module('testApp')
.controller('applyController', function($scope, applyService){


// ************************** Creates User *****************

  $scope.submit = function(userObj){
    applyService.userObj = Object.assign('applyService.userObj', userObj)
  }

  $scope.createUser = function(){
    applyService.createUser().then(function(res){
      $scope.users = res;
      $state.go('user')
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
    $scope.userObj.ssn = applyService.addDashes2(model);
  }

})
