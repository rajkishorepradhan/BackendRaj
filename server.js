import express from 'express';
// import data from './data';
import connectDB from './config/db.js';
import data from './data/data.js';

import 'dotenv/config';

connectDB();
const app = express();

app.get('/api/products', (req, res) => {
    res.send(data.products);
})

app.get('/', (req, res) => {
    res.send('Server is ready');
});
const port = process.env.PORT || 5000;
app.listen(5000, () => {
    console.log(`server at http://localhost:${port}`);
})