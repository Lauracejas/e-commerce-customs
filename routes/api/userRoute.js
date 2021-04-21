const express = require('express');
const User =  require('../../models/user');

const router = express.Router();

router.get("/", async (req, res)=>{
    try{
      const user = await User.findAll();
      res.json(user);
    }catch (err) {
      console.log("here", err)
      res.status(400).json(err);
    }
  })

router.post("/", async (req, res) => {
    try {
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            isAdmin: req.body.isAdmin           
        });
        const newUser = await user.save();
        res.send(newUser);
    } catch (err) {
        res.send({ msg: err.message })
    }
})

router.put('/:id', async (req, res) => {
    try {
      const user = await User.findById(
        {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            isAdmin: req.body.isAdmin  
        },
        {
          where: {
            id: req.params.id,
          },
        });     
        res.status(200).json(user);
    } catch (err) {
      res.status(400).json(err);
    }
  });

module.exports = router;


