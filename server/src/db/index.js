import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI} /${DB_NAME}`);
        console.log(`db connected host: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("Mongodo connection failed!!", error);
        return;
    }
}

export default connectDB;