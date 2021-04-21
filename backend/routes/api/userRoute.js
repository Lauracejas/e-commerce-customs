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
router.post("/", async (req, res) => {
    try {
        const userData = await User.create(req.body);

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
        });
    }
    catch (err) {
        res.status(400).json(err);
    }
});

router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { email: req.body.email } });
        const validPass = await userData.checkPassword(req.body.password);

        if (!userData || !validPass) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again.' });
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData._id;
            req.session.logged_in = true;
        });
    }
    catch (err) {
        res.status(400).json(err);
    }
})

module.exports = router;


