const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
//Create Schema
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
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
    date: {
        type: Date,
        default: Date.now ()
    }
});

UserSchema.methods.generateHash = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSalt(8), null);
};

UserSchema.methods.validPassword = (password) => {
    return bcrypt.compareSync(password, this.password);
}

module.exports = User = mongoose.model('User', UserSchema);

