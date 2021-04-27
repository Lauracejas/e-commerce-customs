import React, { useEffect, useState } from "react";

import Table from "react-bootstrap/Table";
import SearchBar from "../components/SearchBar/SearchBar";
import TableRow from "../components/TableRow";
import InventoryModal from "../components/InventoryModal";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import { getAllProducts, getProduct } from "../utils/API";

const Inventory = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [showModal, setShow] = useState(false);
  const [productCount, setProductCount] = useState();

  useEffect(() => {
    getAllProducts()
      .then(res => setProducts(res.data))
      .then(setProductCount(products.length))
      .catch(err => console.log(err));

  }, [])

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div className="container-fluid main-contain">
      {showModal && <InventoryModal product={product} show={showModal} productCount={productCount} handleClose={handleClose}  />}
      <SearchBar />
      <Button onClick={() => {
        setProduct({})
        handleShow()
      }}>Add Item</Button>

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
        <tbody style={{backgroundColor: "#1D7A8C"}}>
          {products.map(product => <TableRow key={product._id} product={product} setProduct={setProduct} setShow={setShow}/>)}
        </tbody>
      </Table>
      <Row style={{margin: "25px"}}/>
    </div>
  );
}

export default Inventory;