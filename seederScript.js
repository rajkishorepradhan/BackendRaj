import 'dotenv/config';
import data from './data/data.js';
import connectDB from './config/db.js';
import Product from './models/product.js';


connectDB();

const importData = async () =>{
    try{
        await Product.deleteMany({});
        await Product.insertMany(data);
        console.log("inserted Data Successfull");
        process.exit();
    } catch (error){
        console.log("Inserted Data fail");
        // process.exit(1);
    }
}
importData();