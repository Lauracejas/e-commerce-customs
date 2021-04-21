const router = require('express').Router();
const Products =  require('../../models/product');

router.get("/", async (req, res)=>{
  try{
    const productList = await Products.findAll();
    console.log(productList, "here #####");
    res.json(productList);
  }catch (err) {
    console.log("here", err)
    res.status(400).json(err);
  }
})

router.post('/:id', async (req, res) => {
  try {
    const newProject = await Products.find({
      ...req.params.id,
      user_id: req.session.user_id,
    });

    res.status(200).json(newProject);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;





// const router = express.Router();

// router.get("/api/products/:id", (req, res) => {
//     const productId = req.params.id;
//     const product = data.products.find(x => x._id === productId);
//     if (poduct)
//     res.send(product);
    
//   })