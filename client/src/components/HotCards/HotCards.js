import React from 'react';
import "./style.css";
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
// import ProductData from '../../scripts/product';
// import productData from '../../../../scripts/products';
// import product from '../../../../scripts/products';
// import data from '../../data';

// import White from '../../images/white.jpg';

// import Red from './images/red.jpg';
// import Black from './images/black.jpg';
// import Orange from './images/red.jpg';
// import Blue from './images/red.jpg';
// import Yellow from './images/yellow.jpg';




// import Card from 'react-bootstrap/Card';
// import Image from '../assets/white.jpg';

const HotCards = ({product}) => {

  
    return (
       
            <Card key={product._id}
             style={{ 
                height: '300px',
                width: "200px",
                padding: '5px',
                backgroundColor: "#00233A"
             }}
             >
                <Card.Body>
                    <Link to={'/product/' + product._id}>
                    <Card.Img 
                    className="card-img-top-hotcard"
                    variant="top"
                    src={product.image}
                    //  src={process.env.PUBLIC_URL + "/images/black.jpg"} 
                    style={{ 
                    maxWidth: "150px",
                    maxHeight: "150px",
                    
                    }}
                    
                    />
                    </Link>
                    <Card.Title>
                    <Link to={{
                        pathname: `/product/${product._id}`,
                        state: {
                            id: product._id
                        }
                        }}>
                            <p style={{ 
                    marginTop: "10px",
                    fontSize: "10px",
                    maxHeight: "90px"
                    
                    }}>{product.name}</p>
                            </Link>
                    </Card.Title>
                   
                    <Card.Text >
                    <p style={{ 
                    marginTop: "0px",
                    fontSize: "19px",
                    textAlign: "center",
                    backgroundColor: "white"
                    
                    }}>${product.price}</p>
                    </Card.Text>
                    {/* <Card.Text>
                    {product.size}
                    </Card.Text> */}
                    {/* <Card.Text>
                    {product.countInStock}
                    </Card.Text> */}
                    
                </Card.Body>
            </Card>


       



                    
       
    )
}

export default HotCards;
