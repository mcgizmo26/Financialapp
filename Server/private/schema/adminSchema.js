// ********************** Dependancies ********************************

var mongoose = require("mongoose");
var bcrypt = require('bcryptjs');

var Schema = mongoose.Schema;

//********************* the blue print ******************


// ********************* User Schema constructor function *********************

var adminSchema = new Schema({
    adminUsername: {
        type: String,
        // required: true,
        index: true,
        unique: true
    },

    adminPassword: {
        type: String,
        index: true
        // required: true,

    },

    adminFirstname: {
        type: String,
        lowercase: String,
        // required: true
    },

    adminLastname: {
        type: String,
        lowercase: String,
        // required: true
    },

// ****************************** models ******************************

adminSchema.pre('save', function(next) {
	var user = this;
	if (!user.isModified('password'))	return next();
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(user.password, salt);
  user.password = hash;
  return next(null, user);
});

userSchema.methods.verifyPassword = function(reqBodyPassword) {
  var user = this;
  return bcrypt.compareSync(reqBodyPassword, user.password);
};
