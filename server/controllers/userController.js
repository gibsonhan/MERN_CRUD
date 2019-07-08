const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config/mongoKey');

//Load input validation
const validateRegisterInput = require('../validation/regValidation');
const validateLoginInput = require('../validation/loginValidation');

exports.user_index_get= (req, res) => {
    User.find((err, user) => {
        if (err) {
            console.log('Error', err);
        }
        else { 
            res.send(user);
        }
    });
}

exports.user_secret_get = (req, res) => {
    res.json('success! You cannot see this without a token')
};

exports.user_data_get = (req, res) => {
    console.log(req.token);
    jwt.verify(req.token, 'privatekey', (err, authorizedData) => {
        if(err) {
            res.status(403).send({error: 'ERROR: Could not connect to protected route'});
        } else {
            res.status(200).json(authorizedData);
            res.send({message: 'Successful authorization'});
        }
    })
}
exports.user_login_post = (req, res) => {
    //Form Validationm
    const { errors, isValid } = validateLoginInput(req.body);
    //Check Validation
    if(!isValid) {
        return res.status(400).send(errors)
    }

    const { email, password } = req.body;

    User.findOne({ email: email }).then(user => {
        //Check if user exists
        if(!user){
            res.status(404).send({emailNotFound: "email not found"});
        }
        bcrypt.compare(password, user.password)
            .then(isMatch => {
                if(isMatch) {
                    //User matched
                    // Create JWT Payload
                    const payload = {
                        id: user._id,
                        name: user.name
                    };
                    //Sign Token
                    jwt.sign(
                        payload,
                        keys.secretOrKey,
                        { 
                            expiresIn: 31556926 // 1 year in seconds
                        },
                        (err, token) => {
                            res.json({
                                success: true,
                                token: "Bearer " + token
                            });
                        }
                    );
                } else {
                    return res.status(401).send({ error: 'Unauthorized Access'});
                }
            })
            .catch(err => {
                res.status(500).send({ error: err})
            });
    });
};

exports.user_register_post = (req, res) => {
    const  { errors, isValid } = validateRegisterInput(req.body);
    //Check Validationm
    if (!isValid) {
        return res.status(400).send(errors);
    }

    User.findOne({ email: req.body.email })
        .then(user => {
            if(user) {
                return res.status(404).json('Email Exist, Please check');
            }
            else {
                const newUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password

                });
            //Hash password before saving into DB
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if(err) throw err;
                    newUser.password = hash;
                    newUser.save()
                        .then(user => res.send(user))
                        .catch(err => console.log(err))
                });
            });
            }
        })
        .catch(err => {
           console.log('Error', err);
           res.status() 
        });
}

exports.user_update_put = (req, res) => {
    res.send('Not Implemented Yet');
}

exports.user_delete_get = (req, res) => {
    res.send('Not Implemented Yet');
}