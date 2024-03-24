
import express from "express"
import dotenv from "dotenv";
dotenv.config();
const app = express();

// 
import connectDb from "./utils/connectDb.js"
import userRouter from './routers/user.route.js'
import authRouter from './routers/auth.route.js'



// Connecting to database 
connectDb();

const port = 8000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

// middleware
app.use(express.json());

// create routes
app.use('/api/user',userRouter)
app.use("/api/auth",authRouter)


// global error handler
app.use((err,req,res,next)=>{
    err.statusCode = err.statusCode ||500;
    err.message = err.message || "Internal Server Error!";
    if(err.code ==11000){
        err.message = "dublicate key error"
    }
    return res.status(err.statusCode).json({
        status:false,
        message:err.message,
        statusCode:err.statusCode
    })
})