import mongoose from 'mongoose';
var Schema = mongoose.Schema;
const productSchema = Schema({
    name: {
        type:String,
        require:true,
        
    },
    catagory: {
        type:String,
        require:true,
    },
    description: {
        type:String,
        require:true,
    },
    price:{
        type:Number,
        require:true,
    },
    countInStock:{
        type:Number,
        require:true,
    },
    imageUrl:{
        type:String,
        require:true,
    }
    
});

const Product = mongoose.model("Product", productSchema);

export default  Product;