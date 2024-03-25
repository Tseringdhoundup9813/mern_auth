import express from "express";
import {signup,signin} from '../controllers/auth.controller.js'

const Router  = express.Router();

Router.route('/signup')
    .post(signup)
Router.route('/signin')
    .post(signin)

export default Router;