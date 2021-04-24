import React, { useState } from 'react';
import "./style.css";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import { Link, Redirect } from "react-router-dom"
import axios from "axios";

// import SignUpModal from './SignUpModal/SignUpModal';

const SigninPage = (props) => {
    console.log(props)
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
            console.log(response);
            props.handleSignin(response.data);
        });

    };

    if (props.userLog.user && props.userLog.user.password) {
        return (
            <Redirect to="/profile"/>
        )
    }

    return (<>
       
        <Modal.Dialog >
            <Modal.Header >
                <Modal.Title>Welcome Guest!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p><strong>E-mail</strong></p>
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
                <p><strong>Password</strong></p>
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
               
                <Button
                    onClick={handleSubmit}
                    variant="warning"
                >Login</Button>
              

            </Modal.Body>

            <Modal.Footer>
                <p>Are you new in reVamped?</p>
                <Link to="/register"><Button  variant="primary">Create your account</Button></Link>

            </Modal.Footer>
        </Modal.Dialog>
        </>
    )
}

export default SigninPage;
