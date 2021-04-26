import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Logo from "../../logo.png"
import "./style.css";


const Banner = () => {
    

    return (
        <Jumbotron fluid>
            <Container>
                <h4>Welcome to<img  alt='' src={Logo} /></h4>
                <p>
                
                </p>
            </Container>
        </Jumbotron>
    )
}

export default Banner;

