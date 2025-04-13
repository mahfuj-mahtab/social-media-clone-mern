import mongoose from 'mongoose';
import {DB_NAME} from '../constants.js';

const connectDB = async ()=>{
    try {
        const conn = await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`)
        console.log(`Connected to ${DB_NAME} database`);
    } catch (error) {
        console.log(error);
        // console.log(process.env.MONGO_URL);
        
        process.exit(1);
        
    }
}
export default connectDB;