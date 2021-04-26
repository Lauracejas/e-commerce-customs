
import { getProduct } from "../utils/API";
import { getAllProducts } from "../utils/API";
import React, { useEffect, useState } from "react"
// import {Link} from "react-router-dom"
// import { RightAside, RightMenu } from '../components';
// import CardCart from "../components/CardCart/CardCart"
import Row from "react-bootstrap/Row"
// import Col from "react-bootstrap/Col"
// import HotCards from "../components/HotCards/HotCards";
import "./style.css"
import styled from "styled-components"
import Checkout from "../components/Checkout/index"

const Cart = (props) => {
    // const [open, setOpen] = useState(false);

    console.log(props)
    const [products, setProducts] = useState([]);

    const Link = ({ classNameName, children }) => (
        <div classNameName={classNameName}>
            {children}
        </div>
    );
    const StyledLink = styled(Link)` 
    color: palevioletred;
    font-weight: bold;
    `;

    const [product, setProduct] = useState({});

    useEffect(() => {
        getProduct(props)
            .then(product => {
                console.log(props);
                setProduct(product.data);
            }
            )
    }, [])
    // console.log(product)

    const handleSubmit = () => {
        getAllProducts().then(results => setProducts(results.data))

    }

    return (

        <div className="contianer mt-5 ">

            <div className="container-fluid co">
            <Checkout />
            <Row style={{margin: "10px"}}/>
        </div>
        </div>

/* <RightAside open={open} setOpen={setOpen} products={products} />
    <RightMenu open={open} setOpen={setOpen} onClick={handleSubmit} /> */

)
}

export default Cart

