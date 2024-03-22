
import express from "express";
import {createUser} from "../controllers/user.controller.js"
const Router  = express.Router();

Router.route("/user")
    .post(createUser)
    .get(createUser)



export default Router;