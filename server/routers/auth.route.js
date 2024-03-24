import express from "express";
import {signup} from '../controllers/auth.controller.js'

const Router  = express.Router();

Router.route('/signup')
    .post(signup)

export default Router;