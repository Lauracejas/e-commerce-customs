import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import SearchBar from "../components/SearchBar/SearchBar";
import TableRow from "../components/TableRow";
import { getAllProducts, getProduct } from "../utils/API";

const Inventory = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts()
      .then(product => {
        console.log(product.data);
      })
  }, []);

  return (
    <div className="container-fluid main-contain">
      <SearchBar />

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Image</th>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          ${products.map(product => <TableRow prop={product} />)}
        </tbody>
      </Table>
    </div>
  );
}

export default Inventory;