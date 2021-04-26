import React from 'react'
import { Link } from 'react-router-dom'
// import Card from 'react-bootstrap/Card'
import "./styles.css"
import Button from 'react-bootstrap/Button'
// import img from "../../assets/black.jpg"


const CardEl = ({product}) => {
  console.log(product)
  return (
    <>   
      <div key={product._id} class="card">
  <img src="https://via.placeholder.com/150" class="card-img-top " alt="" />
  <div class="card-body">
    <h5 class="card-title">{product.name}</h5>
    <p class="card-text">Price: ${product.price}</p>
    <p class="card-text">Size: {product.size}</p>
    <p class="card-text">Color: {product.color}</p>
    <p class="card-text">Description: {product.description}</p>
    <Link to={{
                        pathname: `/cart/`,
                        state: {
                            id: product._id
                        }
                        }}>


            <Button variant="primary">Add to Cart</Button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default CardEl;
