import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import SearchBar from "../components/SearchBar/SearchBar";
import TableRow from "../components/TableRow";
import InventoryModal from "../components/InventoryModal";
import Button from "react-bootstrap/Button";
import { getAllProducts, getProduct } from "../utils/API";

const Inventory = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [showModal, setShow] = useState();

  const handleShow = () => setShow(true);

  useEffect(() => {
    getAllProducts()
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));

  }, [])

  return (
    <div className="container-fluid main-contain">
      <InventoryModal product={product} show={showModal} />
      <SearchBar />
      <Button onClick={() => handleShow()}>Add Item</Button>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Image</th>
            <th>Product</th>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => <TableRow key={product._id} product={product} setProduct={setProduct}/>)}
        </tbody>
      </Table>

    </div>
  );
}

export default Inventory;