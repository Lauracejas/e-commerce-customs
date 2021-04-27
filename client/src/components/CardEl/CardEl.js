import React from 'react';
import "./styles.css";
import Button from 'react-bootstrap/Button';

const CardEl = ({ product, cart, addToCart }) => {
  const renderButton = () => {
    const exists = cart.find(item => product._id === item._id);
    if (!exists) {
      return <Button onClick={() => addToCart(product._id)} variant="primary">Add to Cart</Button>;
    }
    return <Button onClick={() => addToCart(product._id)} variant="primary" disabled>Already in Cart</Button>;
  }
  return (
    <>
      <div key={product._id} className="card" style={{ backgroundColor: "#00233A" }}>
        <img src={product?.image} className="card-img-top " alt="" />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">Price: ${product.price}</p>
          <p className="card-text">Size: {product.size}</p>
          <p className="card-text">Color: {product.color}</p>
          <p className="card-text">Description: {product.description}</p>
          {renderButton()}
        </div>
      </div>
    </>
  )
}

export default CardEl;
