import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
// const mongodb_uri = "mongodb+srv://admin:admin@cluster0.e2on96m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const mongodb_uri = `${process.env.MONGODB_URI}`;
const connectDB = async () => {
    try {
        const connection = await mongoose.connect(mongodb_uri);
        console.log('MongoDB connected with host:'.yellow.bold, connection.connection.host.yellow.bold);
    } catch (error) {
        console.log('MongoDB connection failed:'.red.bold, error.red.bold);
        process.exit(1);
    }
}

export default connectDB;