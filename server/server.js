'use strict';

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')
const passport = require('passport');

const app = express();
const users = require('./routes/api/users');
const companyRoute = require('./routes/api/companies');

app.use(express.static("static"));
//Bodyparser middleware

app.use(cors());
app.use(
        bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());

// DB configuration
const db = require("./config.scripts/mongoKey").mongoURI;

// Connect to MonngoDB
mongoose.connect(
    db, { useNewUrlParser: true }
)
    .then((db) => console.log('MongoDB succesfully connected'))
    .catch(err => console.log(err));

//Passport middleware
app.use(passport.initialize());

//Passport config
require('./config.scripts/passport.js')(passport);

//Routes
app.use('/api/users', users);
app.use('/api/companies', companyRoute);

//Redirect any server request back to index.html: To deal with CRS
app.get('/', function(req, res, next){
    res.sendFile(path.join(__dirname, '../client', 'index.html'));
})

//Hostname and Port
//const hostname = '127.0.0.1';
const port = 3000;

app.listen(port, () => {
    console.log(`Backend server is running at http://localhost:${port}/`);
});
