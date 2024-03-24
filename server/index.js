
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

// middleware
app.use(express.json());

// create routes
app.use('/api/user',userRouter)
app.use("/api/auth",authRouter)


const port = 8000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});