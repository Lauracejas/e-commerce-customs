const express = require('express');
const User =  require('../../models/user');
const withAuth = require('../../utils/auth');

const router = express.Router();

router.get("/", withAuth, async (req, res)=>{
    try{
      const user = await User.findAll();
      res.json(user);
    }catch (err) {
      console.log("here", err)
      res.status(400).json(err);
    }
  })

// router.post("/signin", async (req, res) => {
//     try {
//         const signinUser = await User.findOne({           
//             email: req.body.email,
//             password: req.body.password,
                    
//         });
//         if (signinUser){
//           res.send({
//             _id: signinUser._id,
//             name: signinUser.name,
//             email: signinUser.email,
//             isAdmin: signinUser.isAdmin  
//           })
//         } else {
//           res.status(400).send({ msg: "Invalid Email or Password" })
//         }
//     } catch (err) {
//         res.status(400).send({ msg: "Invalid Email or Password" })
//     }
// })
router.post("/", withAuth, async (req, res) => {
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
        res.status(400).send({ msg: "Invalid Email or Password" })
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


