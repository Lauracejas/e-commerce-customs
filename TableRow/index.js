import React from 'react';
import Button from 'react-bootstrap/Button';

const TableRow = ({product}) => {
  return (
    <tr>
      <td><img src={product.image} /></td>
      <td>{product.name}</td>
      <td>{product.description}</td>
      <td>{product.price}</td>
      <td>{product.countInStock}</td>
      <td><Button>Update</Button></td>
    </tr>
  );
}

export default TableRow;