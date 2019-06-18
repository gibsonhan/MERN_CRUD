const express = require("express");
const companyRoutes = express.Router();

//require controller modules
const company_controller = require('../../controllers/companyController');

// CRUD for company profile 
companyRoutes.route('/').get(company_controller.company_index);
//companyRoutes.route('/:id').get(company_controller.company_id_get);
companyRoutes.route('/create').post(company_controller.company_create_post);
//companyRoutes.route('/update/:id').put(company_controller.company_update_post);
//companyRoutes.route('/delete/:id').delete(company_controller.company_delete_post);
//Form Validation
 //Check Validation


module.exports = companyRoutes; 