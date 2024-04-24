import mongoose from "mongoose";

const MONGO_URI: any = 'mongodb+srv://syedtalha:talha@cluster0.x4fnhok.mongodb.net/Beyoung?retryWrites=true&w=majority&appName=Cluster0';

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