import 'dotenv/config';
import data from './data/data.js';
import connectDB from './config/db.js';
import Product from './models/product.js';


connectDB();

const importData = async () =>{
    try{
        // await Product.deleteMany({});
        await Product.insertMany(data);

        await Product.insertOne(data.products[0]);

        console.log("inserted Data Successfull");
        process.exit();
    } catch (error){
        console.log(error);
        // process.exit(1);
    }
}
// module.exports = importData;
importData();
export default importData;