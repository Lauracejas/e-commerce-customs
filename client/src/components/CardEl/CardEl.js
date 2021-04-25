import React from 'react'
import { Link } from 'react-router-dom'
// import Card from 'react-bootstrap/Card'
import "./styles.css"
import Button from 'react-bootstrap/Button'


const CardEl = ({product}) => {
  console.log(product)
  return (
    <>   
      <div key={product._id} class="card">
  <img src="https://via.placeholder.com/150" class="card-img-top " alt="" />
  <div class="card-body">
    <h5 class="card-title">{product.name}</h5>
    <p class="card-text">Price: ${product.price}</p>
    <p class="card-text">Size: {product.size}</p>
    <p class="card-text">Color: {product.color}</p>
    <p class="card-text">Description: {product.description}</p>
    <Link to={{
                        pathname: `/cart/`,
                        state: {
                            id: product._id
                        }
                        }}>

                        
                    <Button variant="primary">Add to Cart</Button>
                        </Link>
  </div>
</div>
      {/* <Card fluid key={product._id}
           style={{ 
            display: 'flex',
            width: '800px' ,
            minHeight: '700px'
        }}
             >
            
                <Card.Img 
                className="card-img-top-card"
                variant="top"
                style={{ 
                    // width: '780px',
                    minHeight: "500px",
                    // margin: '5px'
                  }}
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
                    <Link to={{
                        pathname: `/cart/`,
                        state: {
                            id: product._id
                        }
                        }}>

                        
                    <Button variant="primary">Add to Cart</Button>
                        </Link>
                </Card.Body>
            </Card>
         */}
    </>
  )
}

export default CardEl;
