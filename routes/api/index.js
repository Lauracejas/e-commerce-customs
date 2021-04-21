const router = require("express").Router();
const userRoute = require("./userRoute");
const products = require("./products")

router.use("/users", userRoute);
router.use("/products", products);
module.exports = router;