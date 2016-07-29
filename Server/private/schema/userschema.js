// ********************** Dependancies ********************************

var mongoose = require("mongoose");
var bcrypt = require('bcryptjs');

var Schema = mongoose.Schema;

//********************* the blue print ******************


// ********************* User Schema constructor function *********************

var userSchema = new Schema({
    username: {
        type: String,
        // required: true,
        index: true,
        unique: true
    },

    password: {
        type: String,
        index: true,
        // required: true,
        minlength: 3,
        maxlength: 18
    },

    firstname: {
        type: String,
        lowercase: String,
        // required: true
    },

    lastname: {
        type: String,
        lowercase: String,
        // required: true
    },

    // ****************Date of Birth *********************

        monthinput: {
            type: String,
            enum: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            // required: true
        },

        dayinput: {
            type: String,
            enum: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"],
            // required: true
        },

        yearinput: {
            type: Number,
            // required: true
        },
    // *********************** SSN *******************************

    ssn: {
        type: String,
        // required: true
    },
    // ************************* Contact Info ********************

    hometele: {
        type: String,

    },

    celltele: {
        type: String,
        // required: true
    },

    // ****************************** e-mail **********************

    email: {
        type: String,
        // required: true
    },

    // ************************* Address **************************

    addressinput: {
        type: String,
        // required: true
    },

    cityinput: {
        type: String,
        // required: true
    },

    stateinput: {
        type: String,
        // enum: ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana',
        //     'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
        //     'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
        // ],
        // required: true
    },

    zipcode:{
      type: Number,
      // required: true

    },

    // ************************ Employer ****************************

   employername: {
     type: String,
    //  required: true
   },

    employertele: {
        type: String,
        // required: true
    },

    businessemail: {
        type: String,
        // required: true
    },

    // role:{
    //   type: String,
    // },

    users: [{
      type: mongoose.Schema.ObjectId,
      ref: "User"
    }]

});

// UserSchema.plugin(require('mongoose-role'), {
//   roles: ['public', 'user', 'admin'],
//   accessLevels: {
//     'public': ['public', 'user', 'admin'],
//     'anon': ['public'],
//     'user': ['user', 'admin'],
//     'admin': ['admin']
//   }
// });

// ****************************** models ******************************

userSchema.pre('save', function(next) {
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


module.exports = mongoose.model("User", userSchema);
