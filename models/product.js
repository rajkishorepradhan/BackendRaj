import mongoose from 'mongoose';
var Schema = mongoose.Schema;
const productSchema = Schema({
    name: {
        type:String,
        required:true,
    },
    catagory: {
        type:String,
        required:true,
    },
    description: {
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    countInStock:{
        type:Number,
        required:true,
    },
    imageUrl:{
        type:String,
        required:true,
    }
    
});

const Product = mongoose.model("Product", productSchema);

export default  Product;