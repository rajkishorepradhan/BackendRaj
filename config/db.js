
import 'dotenv/config';
import mongoose from 'mongoose';

 const connectDB = async () =>{
    try{
       mongoose.connect(process.env.MONGO_URI, {
         useNewUrlParser: true,
         useUnifiedTopology: true,
        
       });
     
       console.log("Mangose Connect Succesfull");
    } catch (error){
       console.log (" Mongoose Connection Fail",error);
       
    }
}

export default connectDB;
