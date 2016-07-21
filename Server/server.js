// ************* If you want to run live server and nodemon ********
// var cors = require('cors');
// app.use(cors());
//
// Need to: npm install --save cors
//
// *****************************************************************




// ********************** Dependancies *************************

var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var User = require('./private/schema/userschema');
var mongoose = require('mongoose');


// ***********  testApp db connect to mongo ***************

mongoose.connect("mongodb://localhost/testApp",  function (err, res) {
     if (err) {
       console.log ('ERROR connecting to testApp. '  + err);
     } else {
       console.log ('Successfully connected to testApp.');
     }
   });





var app = express();


// ********************** Middle Ware **************************

app.use(bodyParser.json());
app.use(express.static('Public'));
app.use(session({
    secret: 'testsecretonly123',
}))



// *********************** Underwriters Creation *********************

app.post('/users', function(req, res, next) {
    User.create(req.body, function(err, user) {
        if (err) {
            return res.send(user);
        }
        req.session.user = user;
        return res.send(user);
    })

})

// ************************* Retrieve User **********************

app.get('/retrieveusers', function(req, res, next) {
    User.find(req.body, function(err, user) {

        if (err) {
            return res.send(err);
        }
        return res.send(user);
    })
})


// *************************** User Creating **********************

app.post('/createuser', function(req, res) {
  console.log(req.body);
  var newUser = new User(req.body);
  newUser.save(function(err, result){
    if(err) return res.send(err);
    else res.send(result);
  })
})


// ********************** Finding Linked Users ********************

app.get('/underwritersuser', function(req, res, next) {
    User.find({
        underwriterId: req.session.user._id,
        function(err, users) {
            if (err) {
                return res.send(err);
            } else {
                return res.send(err);
            }
        }
    })
})


// ************************** Finding Users **********************

app.get('/users/:userId', function(req, res, next) {
    User.findById(req.params.userId, req.body, function(err, result) {
        console.log(err, result);
        if (err) {
            return res.send(err);
        } else {
            res.send(result);
        }
    })
})


// **************************** Update User **************************

app.put('/userupdate/:userId', function(req, res, next) {
    console.log(req.body);
    User.findByAndUpdate(req.params.userId, req.body, function(err, result) {
        console.log(err, result);
        if (err) {
            return res.send(err);
        } else {
            res.send(result);
        }
    })
})


// app.get('/users', func)


// ******************** node server ********************

var port = 3000;
app.listen(port, function() {
    console.log('listening on port ', port);
});
