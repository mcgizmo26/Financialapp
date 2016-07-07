angular.module('testApp')
.directive('about', function(){
  return{
    restrict:'EA',
    templateUrl:'./Private/views/about/about.html'
  }
})
