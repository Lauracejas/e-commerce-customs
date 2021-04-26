import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { Link } from 'react-router-dom';
import axios from 'axios';

const InventoryModal = ({ product, show }) => {
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [size, setSize] = useState();
  const [color, setColor] = useState();
  const [description, setDescription] = useState();
  const [count, setCount] = useState();

  const showHideModal = show ? "modal display-block" : "modal display-none";

  useEffect(() => {
    // setProduct(product);
    setName(product.name);
    setPrice(product.price);
    setSize(product.size);
    setColor(product.color);
    setDescription(product.description);
    setCount(product.count);
  });

  const handleSubmit = async e => {
    e.preventDefault();
    axios.put("/api/products/addUpdate", {
      name: name,
      price: price,
      size: size,
      color: color,
      description: description,
      countInStock: count
    })
      .then(res => {
        if (res.data.message);
        console.log(res);
      });
  }

  return (
    <Modal.Dialog className={showHideModal}>
      <Modal.Header
        closeButton
        style={{
          display: "inline-block",
          justifyContent: "center",
          alignItems: "center",
        }}
      >

        <Modal.Title >Add/Update Inventory Item</Modal.Title>
      </Modal.Header>

      <Modal.Body className="text-left">
        <p><strong>Product</strong></p>
        <InputGroup size={"md"} className="mb-3">
          <FormControl
            className="name-product"
            type="text"
            placeholder="Product name"
            aria-label="Name of product"
            aria-describedby="basic-addon2"
            onChange={(e) => setName(e.target.value)}
          />
        </InputGroup>
        <p><strong>Price</strong></p>
        <InputGroup size={"md"} className="mb-3">
          <FormControl
            className="price-product"
            type="text"
            placeholder="Product price"
            aria-label="Price of product"
            aria-describedby="basic-addon2"
            onChange={(e) => setPrice(e.target.value)}
          />
        </InputGroup>
        <p><strong>Size</strong></p>
        <InputGroup size={"md"} className="mb-3">
          <FormControl
            className="size-product"
            type="text"
            placeholder="Product size"
            aria-label="Size of product"
            aria-describedby="basic-addon2"
            onChange={(e) => setSize(e.target.value)}
          />
        </InputGroup>
        <p><strong>Color</strong></p>
        <InputGroup size={"md"} className="mb-3">
          <FormControl
            className="color-product"
            type="text"
            placeholder="Product color"
            aria-label="Color of product"
            aria-describedby="basic-addon2"
            onChange={(e) => setColor(e.target.value)}
          />
        </InputGroup>
        <p><strong>Stock</strong></p>
        <InputGroup size={"md"} className="mb-3">
          <FormControl
            className="stock-product"
            type="text"
            placeholder="Product in stock"
            aria-label="Stock of product"
            aria-describedby="basic-addon2"
            onChange={(e) => setCount(e.target.value)}
          />
        </InputGroup>
        <p><strong>Description</strong></p>
        <InputGroup size={"md"} className="mb-3">
          <FormControl
            className="description-product"
            type="text"
            placeholder="Product description"
            aria-label="Description of product"
            aria-describedby="basic-addon2"
            onChange={(e) => setDescription(e.target.value)}
          />
        </InputGroup>


        <Row style={{
          marginBottom: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>

          <Button
            onClick={handleSubmit}
            variant="warning"
          >Update Product</Button>
        </Row>
      </Modal.Body>

      <Modal.Footer>
        <p>Are you new in reVamped?</p>
        <Link to="/register"><Button variant="primary">Create your account</Button></Link>

      </Modal.Footer>
    </Modal.Dialog>
  );
}

export default InventoryModal;