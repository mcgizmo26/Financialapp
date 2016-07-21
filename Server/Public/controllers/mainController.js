angular.module('testApp')
.controller('mainController', function($scope){
   $scope.navAppear= true;
   $scope.navDisappear=function(){
     $scope.navAppear= !$scope.navAppear;
   }
})
