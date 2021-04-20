const router = require("express").Router();
const userRoute = require("./userRoute");


router.use("/api/users", userRoute);

module.exports = router;