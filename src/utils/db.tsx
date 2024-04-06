import mongoose from "mongoose";

const MONGO_URI: any = 'mongodb://127.0.0.1:27017/Beyoung';

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("Connected Sucessfully");
    }
    catch (error: any) {
        console.log("Connection Failed")
    }
}
export default connectDB