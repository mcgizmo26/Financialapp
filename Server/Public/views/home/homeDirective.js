angular.module('testApp')
.directive('home', function(){
  return{
    restrict:'EA',
    templateUrl: './views/home/home.html'
  }
})
