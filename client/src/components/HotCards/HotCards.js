import React from 'react';
import "./style.css";
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


const HotCards = ({product}) => {
    return (
        
        <Card key={product._id} style={{ width: '11rem' }}>
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
