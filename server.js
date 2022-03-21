import express from 'express';
// import data from './data';
import connectDB from './config/db.js';
import data from './data/data.js';
import Product from './models/product.js';
import cors from 'cors';
import 'dotenv/config';
import mongoose  from 'mongoose';
// import seederScript from './seederScript.js';
connectDB();
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// mongoose.connect(
//     process.env.MONGO_URI,
//     {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
      
//     },
//     (err) => {
//       if (err){
//         console.log('error:------------',err)
//       }
//       console.log("mongdb is connected");
//     }
//   );


app.get('/api/products', (req, res) => {
    res.send(data.products);
})

app.post('/api/products', async(req, res) => {
    const payload= req.body;
    try{


        const newProduct = new Product({
            name:"Nike Slim Shirt",
            catagory: "Shirts",
            description: "high quality product",
            price: "120",
            countInStock: "10",
            imageUrl: "https://avatars.dicebear.com/api/human/1.svg",
          });
      
          const product = await newProduct.save();
          res.status(200).json(product);

    } catch (error){
        console.log(error);
        return res.status(400).json(error);

    }
})

app.get('/', (req, res) => {
    res.send('Server is ready');
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`server at http://localhost:${port}`);
})