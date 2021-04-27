
import { getProduct } from "../utils/API";

import React, { useEffect, useState } from "react"
// import {Link} from "react-router-dom"
import Row from "react-bootstrap/Row"
import "./style.css"

import Checkout from "../components/Checkout/index"

const Cart = (props) => {    

    console.log(props)
  

    const [product, setProduct] = useState({});

    useEffect(() => {
        getProduct(props)
            .then(product => {
                console.log(props.history);
                 setProduct(product.data);
               
            }
            )
    }, [])
    // console.log(product)

    const handleSubmit = () => {
        getProduct().then(results => setProduct(results.data))

    }

    return (

        <div className="contianer mt-5 ">

            <div className="container-fluid co">
            <Checkout 
             onChange={(e) => handleSubmit(e.target.value)}
             product={product}
             />
            <Row style={{margin: "10px"}}/>
        </div>
        </div>

)
}

export default Cart

