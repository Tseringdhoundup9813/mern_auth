
import mongoose from "mongoose"


async function connectDatabase(){
    try{
        const connected = await mongoose.connect(process.env.MONGO_URI)
        console.log("database successfully connected")
    }catch(err){
        console.log(err.message);
        
    }
}

export default connectDatabase;