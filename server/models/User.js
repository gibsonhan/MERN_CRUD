const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Create Schema
const UserSchema = new Schema({
    name: {
        type: String,
        default: '',
        required: true
    },
    email: {
        type: String,
        default: '',
        required: true
    },
    password: {
        type: String,
        default: '',
        required: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    signUpDate: {
        type: Date,
        default: Date.now()
    }
});

// [ ] Look into pre-hook method
// [ ] bcrypt within our mongo file?

module.exports = mongoose.model('User', UserSchema);

