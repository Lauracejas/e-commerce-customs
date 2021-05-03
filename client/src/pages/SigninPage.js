import React, { useState } from 'react';
import "./style.css";
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import { Link, Redirect } from "react-router-dom"
import axios from "axios";

// import SignUpModal from './SignUpModal/SignUpModal';

const SigninPage = (props) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        console.log("email is " + email);
        console.log("password is " + password);
              
        axios.post("/api/users/signin", {
            email: email,
            password: password,
        }).then((response) => {
            if (response.data);
            props.handleSignin(response.data);
        });

    };

    if (props.userLog.user && props.userLog.user.password) {
        return (
            <Redirect to="/"/>
        )
    }

    return (
        <>
        <Modal.Dialog >
        
            <Modal.Header
            closeButton 
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#00233A"
                  }} 
            >
             
                <Modal.Title >Welcome Guest!</Modal.Title>
            </Modal.Header >

            <Modal.Body className="text-left">
                <strong>E-mail</strong>
                <InputGroup size={"md"} className="mb-3">
                    <FormControl
                        className="email-login"
                        type="email"
                        placeholder="email"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </InputGroup>
                <strong>Password</strong>
                <InputGroup size={"md"} className="mb-3">
                    <FormControl
                        className="password-login"
                        type="password"
                        placeholder="Password"
                        aria-label="Recipient's password"
                        aria-describedby="basic-addon2"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </InputGroup>

            <Row style={{
                marginBottom:"20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}>

                <Button
                    onClick={handleSubmit}
                    variant="warning"
                >Login</Button>
            </Row>
            </Modal.Body>

            <Modal.Footer>
                Are you new in reVamped?
                <Link to="/register"><Button  variant="primary">Create your account</Button></Link>

            </Modal.Footer>
        </Modal.Dialog>
            <Row style={{margin: "25px"}}/>
        </>
    )
}

export default SigninPage;
