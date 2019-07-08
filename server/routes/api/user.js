const express = require('express');
const userRoutes = express.Router();
const user_controller = require('../../controllers/userController');
const passport = require('passport');

//test Route getting all the profiles registered
userRoutes.route('/').get(user_controller.user_index_get);

//userRoutes.route('/profile').get(user_controller.user_data_get);
userRoutes.route('/login').post(user_controller.user_login_post);
userRoutes.route('/register').post(user_controller.user_register_post);
//userRoutes.route('/user/update').put(user_controller.user_update_put);
//userRoutes.route('/user/delete').get(user_controller.user_delete_get);
userRoutes.route('/auth/secret').get(passport.authenticate('jwt', {session: false }),user_controller.user_secret_get);
//userRoutes.get('/secret', passport.authenticate('jwt', {session: false }),user_controller.user_secret_get)

module.exports = userRoutes;