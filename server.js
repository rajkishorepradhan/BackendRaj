import express from 'express';
// import data from './data';
import connectDB from './config/db.js';
import data from './data/data.js';
import Product from './models/product.js';
import cors from 'cors';
import 'dotenv/config';
import mongoose  from 'mongoose';
import productRoute from './routes/productRoutes';

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


app.use('/product',productRoute)
app.get('/', (req, res) => {
    res.send('Server is ready');
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`server at http://localhost:${port}`);
})