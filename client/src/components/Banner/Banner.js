import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

import logo from "../../assets/logo.png"
import "./style.css";


const Banner = () => {
    

    return (
        <Jumbotron fluid>
            <Container>
                <h4>Welcome to<img src={logo} alt='' /></h4>
                <p>
                
                </p>
            </Container>
        </Jumbotron>
    )
}

export default Banner;

