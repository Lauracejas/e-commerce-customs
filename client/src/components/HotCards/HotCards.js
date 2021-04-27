import React from 'react';
import "./style.css";
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';

const HotCards = ({product}) => {

    return (
            <Card key={product._id}
             style={{ 
                height: '300px',
                width: "200px",
                padding: '5px',
                backgroundColor: "#00233A",
                backgroundImage: "url('https://images.pexels.com/photos/1903702/pexels-photo-1903702.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260')",
                backgroundBlendMode: "exclusion",
                borderRadius: "20px"

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
                    maxHeight: "90px",
                    color: "white"
                    
                    }}>{product.name}</p>
                            </Link>
                    </Card.Title>
                   
                    <Card.Text >
                    <p style={{ 
                    marginTop: "0px",
                    fontSize: "19px",
                    textAlign: "center",
                    borderRadius: "5px",
                    color: "#00233A",
                    backgroundColor: "white"
                    
                    }}>${product.price}</p>
                    </Card.Text>
                </Card.Body>
            </Card>

    )
}

export default HotCards;
