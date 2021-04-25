import React from 'react';
import "./style.css";
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
// import ProductData from '../../scripts/product';
// import productData from '../../../../scripts/products';
// import Shirts from '../../../../scripts/products';


const HotCards = ({product}) => {

  
    return (
       
            <Card key={product._id}
             style={{ 
                height: '250px',
                width: "200px",
                padding: '5px'
             }}
             >
            <Link to={'/product/' + product._id}>
                <Card.Img 
                 className="card-img-top-hotcard"
                 variant="top"
                 src={product._id}
                //  src={process.env.PUBLIC_URL + "/images/black.jpg"} 
                 style={{ 
                
                   minHeight: "100px",
                   
                 }}
                
                />
                </Link>
                <Card.Body>
                    <Card.Title>
                    <Link to={{
                        pathname: `/product/${product._id}`,
                        state: {
                            id: product._id
                        }
                        }}>{product.name}</Link>
                    </Card.Title>
                    <Card.Text>
                    {product.color}
                    </Card.Text>
                    <Card.Text>
                    ${product.price}
                    </Card.Text>
                </Card.Body>
            </Card>


       



                    
       
    )
}

export default HotCards;
