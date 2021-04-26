import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import "./styles.css"
import Button from 'react-bootstrap/Button'
// import img from "../../assets/black.jpg"


const CardEl = ({ product }) => {
  return (
    <>
      <div key={product._id} class="card" style={{ backgroundColor: "#00233A" }}>
        <img  class="card-img-top " alt="" />
        <div class="card-body">
          <h5 class="card-title">{product.name}</h5>
          <p class="card-text">${product.price}</p>
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
