import express from 'express'
// import {getAllproducts , getProductById} from '../controller/productController';
import getAllproducts from '../controller/productController';
import getProductById from '../controller/productController';
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(getAllproducts);
});
router.get('/:id', function(req, res, next) {
  res.send(getProductById);
});


export default router;