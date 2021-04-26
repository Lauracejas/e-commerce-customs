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
      <div key={product._id} className="card" style={{backgroundColor: "#00233A"}}>
  <img src={product.image} className="card-img-top " alt="" />
  <div className="card-body">
    <h5 className="card-title">{product.name}</h5>
    <p className="card-text">Price: ${product.price}</p>
    <p className="card-text">Size: {product.size}</p>
    <p className="card-text">Color: {product.color}</p>
    <p className="card-text">Description: {product.description}</p>
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
