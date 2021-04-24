import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import "./styles.css";


const CardEl = ({product}) => {
  return (
    <>   
      
      <Card key={product._id}
            //  style={{ height: '200px' }}
             >
            
                <Card.Img className="card-img-top-card"variant="top"
                //  src={product.image} 
                 />
                
                <Card.Body>
                    <Card.Title>
                    
                        {product.name}
                    </Card.Title>
                    <Card.Text>
                    {product.color}
                    </Card.Text>
                    <Card.Text>
                    ${product.price}
                    </Card.Text>
                </Card.Body>
            </Card>
        
    </>
  )
}

export default CardEl;
