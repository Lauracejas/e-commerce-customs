import React, { useState } from 'react'

import Card from 'react-bootstrap/Card'


import "./style.css"

const CardEl = () => {
  const white = require('../../assets/white.jpg')
  console.log(white)
  // const black = require('../../assets/black.jpg')
  // const blue = require('../../assets/blue.JPG')
  // const red = require('../../assets/red.JPG')
  //

  const [selected, setSelected] = useState(white)

  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img onClick={() => setSelected(white) } variant="top" src={selected} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            $60.00
    </Card.Text>

        </Card.Body>
      </Card>
    </>
  )
}

export default CardEl;
