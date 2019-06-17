const Company = require('../models/Company');

//Handle Delivering  all avaliable company Profile
exports.company_index = (req, res) => {
    Company.find( (err, company)=> {
        if (err) {
            console.log(err);
        }
        else {
            res.json(company);
        }
    });
}

exports.company_id_get = (req, res) => {
    let id = req.params.id;
    Company.findById(id, (err, company)=> {
        res.json(company)
    });
}

//Handle Company create on Post
exports.company_create_post = (req, res) => {
    let newCompany = req.body;
    newCompany = new Date();

    newCompany.save()
        .then(newCompany => {
            res.status(200).json({'companies': 'company is added!'})
            res.redirect('/dashboard');
        })
        .catch(err=> {
            res.status(400).send("unable to save to database");
        });
};

exports.company_update_get = (req, res) => {
    Company.findById(req.params.id, (err, company)=> {
        if(!company) {
            res.status(404).send("data is not found");
        }
        else {
            company.companyName = req.body.companyName;
            company.companyEmail = req.body.companyEmail;
            company.companyRegion = req.body.companyRegion;
            company.companyTimezone = req.body.companyTimezone;
            company.companyPoc = req.body.companyPoc;
            company.companyPocPhone = req.body.companyPocPhone;
            company.companyNotes= req.body.companyNotes;

            company.save().then(company => {
                res.json('Company Profile Update');
            })
            .catch(err=> {
                res.status(400)>send("Failed to Update Company Profile");
            })
        }
    })
}