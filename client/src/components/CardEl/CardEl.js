import React from 'react'
import { Link } from 'react-router-dom'
// import Card from 'react-bootstrap/Card'
import "./styles.css"
import Button from 'react-bootstrap/Button'


const CardEl = ({product}) => {
  console.log(product)
  return (
    <>   
      <div key={product._id} className="card">
  <img src="https://via.placeholder.com/150" className="card-img-top " alt="" />
  <div className="card-body">
    <h5 className="card-title">{product.name}</h5>
    <p className="card-text">Price: ${product.price}</p>
    <p className="card-text">Size: {product.size}</p>
    <p className="card-text">Color: {product.color}</p>
    <p className="card-text">Description: {product.description}</p>
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
                classNameName="card-img-top-card"
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
