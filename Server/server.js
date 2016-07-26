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
var passport = require('./passport');
// *****************************************************************





// ***********  testApp db connect to mongo ***************
mongoose.connect("mongodb://localhost/testApp");
// *********************************************************

var app = express();


// ********************** Middle Ware **************************
app.use(bodyParser.json());
app.use(express.static('Public'));
app.use(session({
    secret: 'testsecretonly123',
    saveUninitialized: false,
    resave: false
}))

app.use(passport.initialize());
app.use(passport.session());
// **************************************************************



// ***************************** Policies **************************
var isAuthed = function(req, res, next) {
  if (!req.isAuthenticated()) return res.status(401).send();
  return next();
};



//******************** Passport Endpoints *******************

// ************ Passport User Endpoints **************
app.post('/login', passport.authenticate('local', {
    successRedirect: '/me',
}));

app.get('/logout', function(req, res, next) {
    req.logout();
    console.log("logged out")
    return res.status(200).send('logged out');
});

app.get('/me', function(req, res, next){
  if (!req.user) return res.status(401).send('current user not found');
  req.user.password = null;
  console.log(req.user);
  return res.status(200).json(req.user)
})
// ****************************************************




// ********** Passport Employee Endpoints ***********
app.post('/employeelogin', passport.authenticate('local', {
    successRedirect: '/me1',
}));

app.get('/employeelogout', function(req, res, next) {
    req.logout();
    console.log("logged out")
    return res.status(200).send('logged out');
});

app.get('/me1', function(req, res, next){
  console.log(req.user);
  if (!req.user) res.status(401).send('current employee not found');
  delete req.user.password;
  res.status(200).send(req.user)
})
// *****************************************************

// ****************************************************************





// *********************** Endpoints **************************

// ***************** Users **********************

// ***** User Creating *****
app.post('/createuser', function(req, res) {
    console.log(req.body);
    var newUser = new User(req.body);
    newUser.save(function(err, result) {
      console.log(err);
        if (err) return res.send(err);
        else res.send(result);
    })
})


// ***** Retrieve User *****
app.get('/retrieveusers', function(req, res, next) {
    User.find(req.body, function(err, user) {

        if (err) {
            return res.send(err);
        }
        return res.send(user);
    })
})
// ************************************************




// ****************** Underwriters *******************

app.post('/createunderwriter', function(req, res, next) {
    User.create(req.body, function(err, user) {
        if (err) {
            return res.send(err);
        }
        req.session.user = user;
        return res.send(user);
    })
})

// ***** Finding Linked Users *****
app.get('/retrieveunderwriters', function(req, res, next) {
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

// ***** Finding Users *****
app.get('/getuser/:userId', function(req, res, next) {
    User.findById(req.params.userId, function(err, result) {
        console.log(err, result);
        if (err) {
            return res.send(err);
        } else {
            res.send(result);
        }
    })
})

// ***** Update User *****
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
// ********************************************************





// ******************** node server ********************

var port = 3000;
app.listen(port, function() {
    console.log('listening on port ', port);
});
// *****************************************************





// ********* function used to test connection ************
//  mongoose.connect("mongodb://localhost/testApp",  function (err, res) {
//       if (err) {
//         console.log ('ERROR connecting to testApp. '  + err);
//       } else {
//         console.log ('Successfully connected to testApp.');
//       }
//     });
