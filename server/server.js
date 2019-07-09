'use strict';

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')
const passport = require('passport');

const app = express();

//Tell app to look for static files in these directories
app.use(express.static('static'));
//app.use(express.static('.client/dist'));

//[] take notes on what cors is
app.use(cors());

//Bodyparser middleware, tells app to parse HTTP body message
app.use(bodyParser.json());
app.use(
        bodyParser.urlencoded({
        extended: false
    })
);

// DB configuration
const db = require("./config/mongoKey").mongoURI;

// Connect to MonngoDB
mongoose.connect(
    db, { useNewUrlParser: true }
)
    .then((db) => console.log('MongoDB succesfully connected'))
    .catch(err => console.log(err));

//Passport middleware, pass the passport middleware
app.use(passport.initialize());

//Passport config
require('./config/passport.js')(passport)

//Routes
const companyRoutes = require('./routes/api/companies');
const userRoutes = require('./routes/api/user');
//const authRoutes = require('./routes/auth/auth');

app.use('/api/companies', companyRoutes);
app.use('/api/user', userRoutes);
//app.use('/api/auth', authRoutes);

//Redirect any server request back to index.html: To deal with CRS
app.get('/*', function(req, res, next){
    res.sendFile(path.join(__dirname, '../client', 'index.html'));
})

//Hostname and Port
//const hostname = '127.0.0.1';
const port = 3000;

app.listen(port, () => {
    console.log(`Backend server is running at http://localhost:${port}/`);
});
