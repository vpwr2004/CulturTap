import mongoose from 'mongoose';

const mongodb_uri = "mongodb+srv://admin:admin@cluster0.e2on96m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

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