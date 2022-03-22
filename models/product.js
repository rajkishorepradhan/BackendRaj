import mongoose from 'mongoose';
var Schema = mongoose.Schema;
const productSchema = Schema({
    name: {
        type:String,
        
    },
    catagory: {
        type:String,
        
    },
    description: {
        type:String,
        
    },
    price:{
        type:Number,
        
    },
    countInStock:{
        type:Number,
        
    },
    imageUrl:{
        type:String,
        
    }
    
});

const Product = mongoose.model("Product", productSchema);

export default  Product;