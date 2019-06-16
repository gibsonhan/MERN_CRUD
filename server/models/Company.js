const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Company Schema
const CompanySchema = new Schema({
    companyName: {
        type: String,
        require: true
    },
    companyEmail: {
        type: String,
        require: true
    },
    companyRegion: {
        type: String,
    },
    companyProfileCreationDate:{
        type: Date,
        default: Date.now
    },
    //This needs to be created by whoever is logged in
    companyHandler:{
        type: String,
    }
})