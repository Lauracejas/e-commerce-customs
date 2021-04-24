import React, {useState, useEffect} from 'react';
import { Aside, Menu } from '../components';
// import data from '../data'
import { Link } from 'react-router-dom'
// import HotCards from '../components/HotCards/HotCards';
import "./style.css";
import { getProduct } from "../utils/API"
import { getAllProducts } from "../utils/API"
import Container from 'react-bootstrap/esm/Container';
// import Product from '../../../models/product';

    
      
const Profile = () => {

  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProduct()
    .then(product => {
        console.log(product.data);
        // setProducts(product.data);
    })
    .catch(err => console.log(err));

  }, [])

  const handleSubmit = () => {
    getAllProducts().then(results => setProducts(results.data))

  }
  console.log(products)
  return (
  
  <div>
        
        
        
        <Aside open={open} setOpen={setOpen} products={products} />
       <Menu open={open} setOpen={setOpen} onClick={handleSubmit}/>  
       
    </div>
    )
  }
  
  export default Profile
