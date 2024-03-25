
import userModel from "../models/user.model.js"
import bcrypt from "bcrypt"
import {ErrorHandler}  from "../utils/error.js"
import jwt from "jsonwebtoken";


export const signup =   async (req,res,next)=>{
    try{
        const {username,email,password} = req.body;
        const salt  = bcrypt.genSaltSync(10);
        const hashPassowrd = bcrypt.hashSync(password,salt);
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
export const signin = async(req,res,next)=>{
    try{
        const {email,password} = req.body;
        const isExits = await userModel.findOne({email});
        if(!isExits){
            return next(ErrorHandler(404,'user not found'));
        }
        const passwordValid = bcrypt.compareSync(password,isExits.password)
        console.log(passwordValid);
        if(!passwordValid){
            return next(ErrorHandler(401,'invalid credential'))
        }
        // create token 
        const token = jwt.sign({id:isExits._id},process.env.JWT_SECRET)
        console.log(token)
        res.cookie('access_token',token,{expire:360 +Date.now()}).status(200).json({
            status:true,
            data:isExits
        })

    }catch(err){
        next(err);
    }
}