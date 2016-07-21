angular.module("testApp")
.service('userService', function($http){
  this.getUser = function(userId){
    return $http.get('/createuser/' + userId).then(function(res){
      return res;
    })
  }
  this.updateUser = function(user){
    console.log(users);
    return $http.put('/userupdate/'+ user._id, user).then(function(res){
      return res;
    })
  }
})
