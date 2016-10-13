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
var Employee = require('./private/schema/employeeschema');
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

app.get('/me', function(req, res, next) {
        if (!req.user) return res.status(401).send('current user not found');
        req.user.password = null;
        User.find(req.user._id)
            .populate("users")
            .exec(function(err, user) {
                if (err) {
                    return res.send(err);
                }
                return res.send(user);
            })
        console.log(req.user, "this one");
        // return res.status(200).json(req.user)
    })
    // ****************************************************






// *********************** Endpoints **************************


app.post('/createuser', function(req, res) {
    console.log(req.body);
    var newUser = new User(req.body);
    newUser.save(function(err, result) {
        console.log(err);
        if (err) return res.send(err);
        else res.send(result);
    })
})


app.get('/getusers', function(req, res, next) {
    User.find(req.body)
        .populate("users")
        .exec(function(err, user) {
            if (err) {
                return res.send(err);
            }
            return res.send(user);
        })
})

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

app.put('/updateuser/:userId', function(req, res, next) {
    console.log(req.body);
    User.findByIdAndUpdate(req.params.userId, req.body, {
        new: true
    }, function(err, result) {
        if (err) {
            return res.send(err);
        } else {
            User.findById(req.params.userId, function(err, result) {
                if (err) {
                    return res.send(err);
                } else {
                    res.send(result);
                }
            })
        }
    })
})

app.put('/adduserref/', function(req, res, next) {
        console.log("req.user._id: ", req.user._id);
        User.findByIdAndUpdate(req.user._id, {
                $push: {
                    users: req.body.id
                }
            }, {
                new: true
            })
            .populate("users")
            .exec(function(err, result) {
                if (err) {
                    return res.send(err);
                } else {
                    res.send(result);
                }
            })
    })
    // for delete endpoint use $pull
app.put('/deleteuserref/', function(req, res, next) {
    var newId = JSON.stringify(req.body.id);
    console.log("req.body: ", req.body.id);
    User.findByIdAndUpdate(req.user._id, {
            $pull: {
                users: req.body.id
            }
        }, {
            new: true
        })
        .populate("users")
        .exec(function(err, result) {
            if (err) {
                return res.send(err);
            } else {
                res.send(result);

            }
        })
})

// ******************** node server ********************

var port = 80;
app.listen(port, function() {
    console.log('listening on port ', port);
});






// ********* function used to test connection ************
//  mongoose.connect("mongodb://localhost/testApp",  function (err, res) {
//       if (err) {
//         console.log ('ERROR connecting to testApp. '  + err);
//       } else {
//         console.log ('Successfully connected to testApp.');
//       }
//     });
