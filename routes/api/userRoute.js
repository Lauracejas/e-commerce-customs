// const express = require('express');
const router = require('express').Router();
const User =  require('../../models/user');
// const withAuth = require('../../utils/auth');

// const router = express.Router();

router.get("/",  async (req, res)=>{
    try{
      const user = await User.findAll();
      res.json(user);
    }catch (err) {
      console.log("here", err)
      res.status(400).json(err);
    }
  })

router.get("/signin",  async (req, res)=>{    
  try{
      if(req.session.user_id) { 
      res.send({logged_in: true, user_id: req.session.user_id});
      }  else {
        res.send({logged_in: false});
      }
    }catch (err) {
      console.log("here", err)
      res.status(400).json(err);
    }
  })

  router.post("/", async (req, res) => {
    try {
        const user = new User({
            name: req.body.username,
            email: req.body.email,
            password: req.body.password,
            isAdmin: req.body.isAdmin || false           
        });
        const newUser = await user.save();
        res.send(newUser);
    } catch (err) {
      console.log(err);
        res.status(400).send({ msg: "Invalid Email or Password" })
    }
})

  router.post("/signin", async (req, res) => {
    try {
      const userData = await User.findOne({
         where: {
         email: req.body.email,
        
        } });
  
      if (!userData) {
        res
          .status(400)
          .json({ message: "Incorrect email or password, please try again" });
        return;
      }
  
      const validPassword = await userData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res
          .status(400)
          .json({ message: "Incorrect email or password, please try again" });
        return;
      }
  
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
  
        res.json({ user: userData, message: "You are now logged in!" });
      });
    } catch (err) {
      res.status(400).json(err);
    }
  });

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

  router.post("/logout", (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });

module.exports = router;


