
import { getProduct } from "../utils/API";
import { getAllProducts } from "../utils/API";
// import { Link } from 'react-router-dom'
// import Card from 'react-bootstrap/Card';
import { Aside, Menu } from '../components';
import CardEl from "../components/CardEl/CardEl"
import React, { useEffect, useState } from "react"
import Row from "react-bootstrap/Row"
import HotCards from "../components/HotCards/HotCards";
import "./style.css"
import styled from "styled-components"

const ProductPage = (props) => {
    const [open, setOpen] = useState(false);
    const [products, setProducts] = useState([]);

    const Link = ({ className, children }) => (
        <div className={className}>
            {children}
        </div>
    );
    const StyledLink = styled(Link)`
    
    
    max-width: 600px;
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
                        
                            product={product} />
                    </StyledLink>
                </div>
            <Aside open={open} setOpen={setOpen} products={product} />
            <Menu open={open} setOpen={setOpen} onClick={handleSubmit}/>  
            </div>
               
        </div>
            

              

           
        </>
    )
}
export default ProductPage;