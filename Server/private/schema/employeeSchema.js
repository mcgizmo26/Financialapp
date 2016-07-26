// ********************** Dependancies ********************************

var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// ******************* Connect to DataBase *******************

mongoose.connect("mongodb://localhost/financial-demo");

//********************* the blue print ******************

// ********************* UnderWriter Schema constructor function **************

var employeeSchema = new Schema({
  username: {
    type: String,
    required: true,
    index: true
  },

  password: {
      type: String,
      index: true,
      required: true,
      minlength: 3,
      maxlength: 18
  },

  firstname: {
      type: String,
      lowercase: String,
      required: true
  },

  lastname: {
      type: String,
      lowercase: String,
      required: true
  }

  users: [{
    type: String,
    ref: "User"
  }]

});

// ****************************** models ******************************

var UnderWriter = mongoose.model("employee", employeeSchema);
