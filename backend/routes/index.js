const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const userRoute = require("./api/userRoute")

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

router.use("/api/users", userRoute);

module.exports = router;