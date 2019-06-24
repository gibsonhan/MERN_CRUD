const Company = require('../models/Company');

//Handle Delivering  all avaliable company Profile
exports.company_index = (req, res) => {
    Company.find((err, company) => {
        if (err) {
            console.log('sudden error', err);
        }
        else {
            res.json(company);
        }
    });
}

exports.company_id_get = (req, res) => {
    let id = req.params.id
    Company.findById(id, (err, company) => {
        res.json(company)
    })
}

//Handle Company create on Post
exports.company_create_post = (req, res) => {
    const company = new Company(req.body);
    console.log(company);
    company.save()
        .then(company => {
            res.status(201).json('New company added successfully', company);
        })
        .catch(err=> {
            res.status(400).send("Unable to save to database", err);
        });
};

exports.company_update_put = (req, res) => {
  Company.findByIdAndUpdate({_id: req.params.id})
}

exports.company_delete_get = (req, res) => {
    Company.findByIdAndRemove({_id: req.params.id})
        .then(company => { 
            if(!company){
                res.status(404).send('Cannot Find Company Id');
            }
            else {
                res.status(200).json(company);
            }
        })
        .catch(err => {
            res.status(400).send("Failed to Delete Company Profile", err);
        })
}