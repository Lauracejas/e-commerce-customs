const express = require('express');
const User =  require('../../models/user');

const router = express.Router();

router.get("/createadmin", async (req, res) => {
    try {
        const user = new User({
            name: "Mark",
            email: "mark@test.com",
            password: "1234",
            isAdmin: true
        });
        const newUser = await User.save();
        res.send(newUser);
    } catch (err) {
        res.send({ msg: err.message })
    }
})


module.exports = router;


