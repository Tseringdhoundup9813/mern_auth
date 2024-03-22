
import express from "express"
import dotenv from "dotenv";
dotenv.config();
const app = express();

// 
import connectDb from "./utils/connectDb.js"
import userRouter from './routers/user.route.js'


// Connecting to database 
connectDb();

// create routes
app.use('/api',userRouter)


const port = 8000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});