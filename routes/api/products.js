const router = require('express').Router();
const Product = require('../../models/product');

router.get("/", async (req, res)=>{
  try{
    const productList = await Product.findAll();
    res.json(productList);
  }catch (err) {
    console.log("here", err)
    res.status(400).json(err);
  }
})
router.get("/:id", async (req, res)=>{
  try{
    const productList = await Product.findByPk(req.params.id);
    console.log(productList, "here #####");
    res.json(productList);
  }catch (err) {
    console.log("here", err)
    res.status(400).json(err);
  }
})

router.post("/", async (req, res)=>{
  try{
    const product = await new Product({
      name: req.body.name,
      price: req.body.price,
      size: req.body.size,
      // image: req.body.image,
      color: req.body.color,
      countInStock: req.body.countInStock,      
      description: req.body.description,
    });
    const newProduct = await product.save();
    if (!newProduct){
      res.status(404).json({ message: 'New product Created' });
      return;
    }res.status(200).json(newProduct);
     }catch (err) {
    res.status(500).json(err);
  }
})

router.put('/:id', async (req, res) => {
  try {
    const product = await Product.findById(
      {
        name: req.body.name,
        price: req.body.price,
        image: req.body.image,
        countInStock: req.body.countInStock,
        description: req.body.description,
      },
      {
        where: {
          id: req.params.id,
        },
      });     
      res.status(200).json(product);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deleteProduct = await Product.findById({
      where: {
        id: req.params.id,
      },
    });
    if (!deleteProduct) {
      res.status(404).json({ message: 'No product found with this id!' });
      return;
    };
    res.status(200).json(deleteProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

