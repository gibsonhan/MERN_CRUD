const Validator = require('validator');
const isEmpty = require("is-empty");

module.exports = function validationRegisterInput(data) {
    let errors = {};

    // convert empty fields to an empty string to use validator function
    data.name = !isEmpty(data.name) ? data.name : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.password2 = !isEmpty(data.password2) ? data.password2 : "";
    //Name check
    if (Validator.isEmpty(data.name)) {
        errors.name = "Name field is required";
    }

    //Email checks
    if (Validator.isEmpty(data.email)) {
        errors.email = "Email field is required";
    } else if (!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid 1";
    }

    //Password check
    if (Validator.isEmpty(data.password)) {
        errors.password = "Passwordfield cannot be empty";
    }
    if (Validator.isEmpty(data.password2)) {
        errors.password2 = "Confirm password field is required";
    }
    if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
        errors.password = "Password must be at least 6 characters";
    }
    if (!Validator.equals(data.password, data.password2)) {
        errors.password2 = "Passwords must match";
    }
    return {
        errors,
        isValid: isEmpty(errors)
    };
};
