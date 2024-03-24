
import userModel from "../models/user.model.js"
import bcryptjs from "bcryptjs";


export const signup =   async (req,res)=>{
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
        res.status(500).json({
            status:'fail',
            message:err.message
        })
    }
 

}