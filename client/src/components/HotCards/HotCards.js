import React from 'react';
import "./style.css";
import { Link } from 'react-router-dom'


import Card from 'react-bootstrap/Card';
// import Image from '../assets/white.jpg';

const HotCards = ({product}) => {

  
    return (
       



            <Card key={product._id}
             style={{ height: '11rem' }}
             >
            <Link to={'/product/' + product._id}>
                <Card.Img variant="top" src={product.image} />
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
