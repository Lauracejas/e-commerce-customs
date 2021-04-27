import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { getProduct } from '../../utils/API';

const TableRow = ({product, setProduct, setShow}) => {

  const handleShow = () => setShow(true);

  return (
    <tr>
      <td><img src={product.image} width="150px" height="150px" alt={product.name} /></td>
      <td>{product.name}</td>
      <td>{product.description}</td>
      <td>{product.price}</td>
      <td>{product.countInStock}</td>
      {/* <td><Button value={product._id} onClick={(event) => {
        getProduct(event.target.value)
          .then(res => setProduct(res.data))
          .catch(err => console.log(err)); 
        console.log(product);
        handleShow();
        }}>Update</Button></td> */}
    </tr>
  );
}

export default TableRow;