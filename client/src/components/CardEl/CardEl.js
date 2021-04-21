import React from 'react'
import Card from 'react-bootstrap/Card'
import "./style.css"
import products from "../../data"



const CardEl = () => {
  return (
    <>
    {
      products.product.map(data =>
      <Card key="{products.product._id}" style={{ width: '18rem' }}>
        <Card.Img  variant="top" src={data.image} />
        <Card.Body>
          <Card.Title>{data.name}</Card.Title>
          <Card.Text>${data.name}</Card.Text>
        </Card.Body>
      </Card>
        )
    }
    </>
  )
}

export default CardEl;
