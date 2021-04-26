import React, {useState, useEffect} from 'react';
import { Aside, Menu } from '../components';
import "./style.css";
import { getProduct } from "../utils/API"
import { getAllProducts } from "../utils/API"
import Row from "react-bootstrap/Row"
    
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

<div className="container-fluid ">
            
            <div className="row pt-0 mt-0">

            <div className="col-md-4">

            </div>
            <div className="col-md-4 mt-4" >
                
            
                 
                </div>
      <Aside open={open} setOpen={setOpen} products={products} />
     <Menu open={open} setOpen={setOpen} onClick={handleSubmit}/>  
             
            </div>
            <Row style={{margin: "35px"}}/>
        </div>
     
         {/* <div className="back-to-result">
            <Link to="/dashboard">Back to result</Link>
        </div>
        <div className="details">
            <div className="details-image">
                <img src={details.image} alt="product"></img>
            </div>
            <div className="details-info">
                <ul>
                    <h4>{details.name}</h4>
                    <li><b>Price: $ {details.price}</b></li>
                </ul>

            </div>
        </div>
        <div className="action-details">
            <ul>
                <li>Price: {details.price}</li>
                <li>Status: {details.status}</li>
                <li>Qty: <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select>
                </li>
                <li>
                    <button>Add to cart</button>
                </li>
            </ul>
        </div>  */}
       
    </div>
    )
  }
  
  export default Profile
