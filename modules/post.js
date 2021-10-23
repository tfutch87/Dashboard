// import mongoose
const mongoose = require('mongoose');



const DBSchema = new mongoose.Schema({

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
    Business_Information: {
        type: Object,
        properties: {
            "street": { bsonType: "string" },
            "zipcode": { bsonType: "number" },
            "budget": { bsonType: "number" },
            "business_email": { bsonType: "string" },
            "website": { bsonType: "string" },
            "Business_Notes": { bsonType: "string" }
        }
        
    }

});


 
  module.exports = mongoose.model("Hico_Customer", DBSchema );



