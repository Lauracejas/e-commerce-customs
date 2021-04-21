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
        const newUser = await user.save();
        res.send(newUser);
    } catch (err) {
        res.send({ msg: err.message })
    }
})

// Checks for logged in session
router.get("/login", (req, res) => {
    if (req.session.loggedIn) {
        res.redirect("/");
        return;
    }
    res.render('login');
})


module.exports = router;


