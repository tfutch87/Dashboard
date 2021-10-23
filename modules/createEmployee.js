// import mongoose
const mongoose = require('mongoose');



const EmployeeSchema = new mongoose.Schema({

   
    firstName: {
        type: String,
        required: "this field needs a first name"
    },
    LastName: {
        type: String,
        required: "this field needs a last name"
    },
    Email: {
        type: String,
        required: "this field needs a email"
    },
    Phone: {
        type: String,
        required: "this field needs a phone number"
    },
    Notes: {
        type: String
    },
    Projects: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hico_Project'
     }],
    
        

});


 
  module.exports = mongoose.model("Employee", EmployeeSchema );



