const express = require("express");
const router= express.Router();
const { isAuthenticateUser, authorizeRoles } = require("../middleware/auth");
// const { newOrder } = require("../controller/orderController");
const {newOrder, getSingleOrder, myOrders, getAllOrders, updateOrder, deleteOrder} = require("../controller/orderController");
const { route } = require("./productRoute");


// router.route("/order/new").post(isAuthenticatedUser);
router.route("/order/new").post(isAuthenticateUser, newOrder);
router.route("/order/:id").get(isAuthenticateUser,authorizeRoles("admin"),getSingleOrder);
router.route("/order/me").get(isAuthenticateUser,myOrders);
router.route("/admin/orders").get(isAuthenticateUser,authorizeRoles("admin"),getAllOrders);
router.route("/admin/order/:id").put(isAuthenticateUser,authorizeRoles("admin"),updateOrder).delete(isAuthenticateUser,authorizeRoles("admin"),deleteOrder);


module.exports = router;