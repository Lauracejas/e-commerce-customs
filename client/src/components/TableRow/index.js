import React from 'react';

const TableRow = ({product}) => {
  return (
    <tr>
      <td><img src={product.image} /></td>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>{product.countInStock}</td>
    </tr>
  );
}

export default TableRow;