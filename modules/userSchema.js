// import mongoose
const mongoose = require('mongoose');

const newUser = new mongoose.Schema({

email: String,
password: String

});


module.exports = mongoose.model("NewUser", newUser );