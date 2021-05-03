import { getProduct } from "../utils/API";
import { getAllProducts } from "../utils/API";
import { Aside, Menu } from '../components';
import CardEl from "../components/CardEl/CardEl"
import React, { useEffect, useState } from "react"
import Row from "react-bootstrap/Row"
import "./style.css";
import styled from "styled-components";
import { useParams } from "react-router-dom";
const ProductPage = (props) => {
    const [open, setOpen] = useState(false);
    const [, setProducts] = useState([]);
    const [product, setProduct] = useState({});
    const { id } = useParams();
    const Link = ({ className, children }) => (
        <div className={className}>
            {children}
        </div>
    );
    const StyledLink = styled(Link)`
    max-width: 500px;
    color: white;
    font-weight: bold;
    `;
    useEffect(() => {
        getProduct(id)
            .then(product => {
                setProduct(product.data);
            }
            )
    }, [id]);
  
    const handleSubmit = () => {
        getAllProducts().then(results => setProducts(results.data))
    }
    return (
        <>
            <div className="container-fluid ">
                <div className="row pt-0 mt-0">
                    <div className="col-md-4">
                    </div>
                    <div className="col-md-8 mt-4" >
                        <StyledLink>
                            <CardEl
                                addToCart={props.addToCart}
                                cart={props.cart}
                                product={product} />
                        </StyledLink>
                    </div>
                    <Aside open={open} setOpen={setOpen} products={product} />
                    <Menu open={open} setOpen={setOpen} onClick={handleSubmit} />
                </div>
                <Row style={{ margin: "35px" }} />
            </div>
        </>
    )
}
export default ProductPage;













