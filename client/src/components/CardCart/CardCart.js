import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
// import "./styles.css"
// import Button from 'react-bootstrap/Button'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
import Dropdown from 'react-bootstrap/Dropdown'
// import Container from 'react-bootstrap/Container'



const CardCart = ({ product }) => {


  return (
   


    <div className="card" style={{maxWidth: "400px"}}>
      <div className="row pt-0 " style={{maxWidth: "400px"}}>

      <div className="col-md-4">
    <img src="https://via.placeholder.com/150/000000/FFFFFF/?text=IPaddress.net" className="img-fluid" alt=""/>
      </div>
      <div className="col-md-8">
      <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    </div>

    
    
    
    
    
    
    
  )
}

export default CardCart;
