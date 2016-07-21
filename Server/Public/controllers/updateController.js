updateUserById: function(req, res){
    console.log(req.user);
    UserModel.findByIdAndUpdate(req.params.id, {$set: req.body}, function(err, result){
      if(err) return res.send(err);
      res.send(result);
    })
  },
