import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { Link } from 'react-router-dom';
import axios from 'axios';

const InventoryModal = ({props}) => {
  const [product, setProduct] = useState();
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [size, setSize] = useState();
  const [color, setColor] = useState();
  const [description, setDescription] = useState();
  const [count, setCount] = useState();



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
    <Modal.Dialog 
        >
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
                <p><strong>E-mail</strong></p>
                <InputGroup size={"md"} className="mb-3">
                    <FormControl
                        className="email-login"
                        type="email"
                        placeholder="email"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </InputGroup>
                <p><strong>Password</strong></p>
                <InputGroup size={"md"} className="mb-3">
                    <FormControl
                        className="password-login"
                        type="password"
                        placeholder="Password"
                        aria-label="Recipient's password"
                        aria-describedby="basic-addon2"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </InputGroup>

            <Row style={{
                marginBottom:"20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}>

                <Button
                    onClick={handleSubmit}
                    variant="warning"
                >Login</Button>
            </Row>
            </Modal.Body>

            <Modal.Footer>
                <p>Are you new in reVamped?</p>
                <Link to="/register"><Button  variant="primary">Create your account</Button></Link>

            </Modal.Footer>
        </Modal.Dialog>
  );
}

export default InventoryModal;