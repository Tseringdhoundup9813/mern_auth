
import express from "express"
import dotenv from "dotenv";
dotenv.config();
const app = express();

// 
import connectDb from "./utils/connectDb.js"

// Connecting to database 
connectDb();


const port = 8000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});