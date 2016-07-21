angular.module('testApp')
    .service('applyService', function($http) {


// ****************** Creates Temporary User Before Push ***************

      var self = this;
      this.userObj = {};

      this.createUser = function(){
        console.log(self.userObj);
        return $http.post('/user', self.userObj).then(function(res){
          return res.data;
        })
      }

// ******************** Adds dashes to the Input Field *********************


        this.addDashes = function(f) {
            f = f.replace(/\D|-[^\.]/g, "");
            if (f.length > 0) {
                if (f.length < 3) {
                    return f.slice(0, 3) + "-";
                }
                else if (f.length < 6) {
                    return f.slice(0, 3) + "-" + f.slice(3, 6);
                } else {
                    return f.slice(0, 3) + "-" + f.slice(3, 6) + "-" + f.slice(6, 10);
                }
            }
        }

        this.addDashes2 = function(g) {
            g = g.replace(/\D|-[^\.]/g, "");
            if (g.length > 0) {
                if (g.length < 3) {
                    return g.slice(0, 3) + "-";
                }
                else if (g.length < 6) {
                    return g.slice(0, 3) + "-" + g.slice(3, 5);

                } else {
                    return g.slice(0, 3) + "-" + g.slice(3, 5) + "-" + g.slice(5, 9);
                }
            }
        }

    });
