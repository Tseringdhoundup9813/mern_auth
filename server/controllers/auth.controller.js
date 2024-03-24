
import userModel from "../models/user.model.js"
import bcryptjs from "bcryptjs";
import {ErrorHandler}  from "../utils/error.js"


export const signup =   async (req,res,next)=>{
    try{
        const {username,email,password} = req.body;
        const hashPassowrd = bcryptjs.hashSync(password,10);
        const createNewUser = await userModel.create({username,email,password:hashPassowrd})
        console.log(hashPassowrd);
        res.status(201).json({
            status:'success',
            message:'successfully created user',
            data:createNewUser,
        })
    }catch(err){
        next(err)
    }
 

}