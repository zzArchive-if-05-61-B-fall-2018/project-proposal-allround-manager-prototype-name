const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/config');
const cors = require('cors');

var port = process.env.port || 7000;

const app = express();
app.use(cors());

// get our request parameters
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Use the passport package in our application
app.use(passport.initialize());
var passportMiddleware = require('./middleware/passport');
passport.use(passportMiddleware);

//MongoDb init
mongoose.connect(config.db,{useNewUrlParser: true, useCreateIndex: true})
    .then(() => console.log('MongoDB....'))
    .catch(err => console.error(err));

// Routes Options
const auth = require('./routes/auth');
app.use('/api/auth',auth);

const event = require('./routes/event');
app.use('/api/event',event);

// Start the server
app.listen(port);
console.log('Listening on Port: '+port+'....');

