
import { getProduct } from "../utils/API";
// import { Link } from 'react-router-dom'
// import Card from 'react-bootstrap/Card';
import CardEl from "../components/CardEl/CardEl"
import React, { useEffect, useState } from "react"
import Row from "react-bootstrap/Row"
// import HotCards from "../components/HotCards/HotCards";
import "./style.css"
import styled from "styled-components"





const ProductPage = (props) => {

    const Link = ({ className, children }) => (
        <div className={className}>
            {children}
        </div>
    );
    const StyledLink = styled(Link)`
    background-color: transparent;
    width:200px;
    
    color: palevioletred;
    font-weight: bold;
    `;

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
                    <StyledLink>

                        <CardEl 
                            product={product} />
                    </StyledLink>
                </Row>

                <div>
                    <Link to='/'>Back to Results</Link>
                </div>

            </div>
        </>
    )
}
export default ProductPage;