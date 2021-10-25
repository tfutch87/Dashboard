// import mongoose

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { deserializeUser } = require('passport');
const passport = require('passport');
// const encrypt = require("mongoose-encryption"); 
const passportLocalMongoose = require('passport-local-mongoose');
const session = require('express-session');
mongoose.set("useCreateIndex", true);


const secret = 'thisisourlongstroing';


app.use(session({

    secret: "thisisareallylongstring.",
    resave: false,
    saveUninitialized: false
  }))
  
  
  app.use(passport.initialize());
  app.use(passport.session());
  
   const newUser = new mongoose.Schema({

email: String,
password: String

});


newUser.plugin(passportLocalMongoose);




module.exports = mongoose.model("NewUser", newUser );