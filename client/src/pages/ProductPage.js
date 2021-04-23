
import { getProduct } from "../utils/API";
import React, { useEffect, useState } from "react"
import Row from "react-bootstrap/Row"
import HotCards from "../components/HotCards/HotCards";





const ProductPage = (props) => {
    const [product, setProduct] = useState({});
    useEffect(() => {
        getProduct(props.location.state.id)
            .then(product => {
                console.log(product.data);
                setProduct(product.data);
            }
            )
    }, [])
    console.log(product)
    return (
        <>
        <div className="container-fluid main-contain">
            <Row className="apiFlex">

            <HotCards product={product} />
            </Row>

        </div>
        </>
    )
}
export default ProductPage;