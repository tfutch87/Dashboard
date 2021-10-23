const express = require('express');
const app = express();
const morgan = require('morgan')
const bodyParser = require('body-parser')

// import mongoose
const mongoose = require('mongoose');
// load env variables
const dotenv = require('dotenv');
dotenv.config()
 
//db connection
mongoose.connect(
  process.env.MONGO_URI,
  {useNewUrlParser: true,  useUnifiedTopology: true }
)
.then(() => console.log('DB Connected'))
 
mongoose.connection.on('error', err => {
  console.log(`DB connection error: ${err.message}`)
});


// bring routes from export
//using destructoring

const postRoutes = require('./routes/post');


const myOwnMiddleWare = (req, res, next) => {
    console.log('i am middleware');
    next();
};

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))


//middleware

app.use(morgan("dev"));
// parse application/json
app.use(bodyParser.json());
app.use(express.static("public"));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));
app.use(myOwnMiddleWare);

app.use('/', postRoutes)

const port = process.env.PORT 


app.listen( port, function(){

    console.log(`listening on port ${port}`)
});