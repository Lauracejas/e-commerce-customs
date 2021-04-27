import React, { useState, useEffect } from 'react';
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
          <Menu open={open} setOpen={setOpen} onClick={handleSubmit} />

        </div>
        <Row style={{ margin: "35px" }} />
      </div>

    </div>
  )
}

export default Profile
