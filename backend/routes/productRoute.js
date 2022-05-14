const express =  require("express");
const { getAllProducts, createProduct, updateProduct, deleteProduct, getProductDetails, createProductReview, getProductReviews } = require("../controller/productController");
const { deleteUser } = require("../controller/userController");
const { isAuthenticateUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/products").get( getAllProducts);
router.route("/products/new").post( isAuthenticateUser, authorizeRoles("admin"),createProduct);
router.route("/products/:id").put( isAuthenticateUser, authorizeRoles("admin"),updateProduct).delete( isAuthenticateUser,deleteProduct);
router.route("/product/:id").get(getProductDetails);
router.route("/review").put(isAuthenticateUser, createProductReview);
router.route("/reviews").get(getProductReviews).delete(isAuthenticateUser, deleteUser);
module.exports = router;
