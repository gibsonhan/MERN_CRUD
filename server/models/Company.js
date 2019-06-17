const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Company Schema
let CompanySchema = new Schema({
    companyName: {
        type: String,
        require: true
    },
    companyEmail: {
        type: String,
        require: true
    },
    companyRegion: {
        type: String
    },
    companyTimezone: {
        type:String
    },
    companyPoc: {
        type:String
    },
    companyPocPhone: {
        type: String
    },
    companyNotes: {
        type: String
    },
    companyProfileCreationDate:{
        type: Date,
        default: Date.now
    },
    //This needs to be created by whoever is logged in
    companyHandler:{
        type: String,
    }
}, {
    collection: 'companies'
});

module.exports = Company = mongoose.model('company', CompanySchema);
