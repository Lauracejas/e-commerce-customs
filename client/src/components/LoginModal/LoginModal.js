import React, { useState } from 'react';
import "./style.css";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import {Link} from "react-router-dom"
// import SignUpModal from './SignUpModal/SignUpModal';

const LoginModal = () => {
    const [email, setEmail] = useState();
  const [password, setPassword] = useState();

    const handleSubmit = e => {
        e.preventDefault();
        console.log("email is " + email);
        console.log("password is " + password);
      };
    return (
        <Modal.Dialog onSubmit={handleSubmit}>
            <Modal.Header closeButton>
                <Modal.Title>Welcome Guest!</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p><strong>E-mail</strong></p>
                <InputGroup size={"md"} className="mb-3">
                    <FormControl
                        placeholder="email"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </InputGroup>
                <p><strong>Password</strong></p>
                <InputGroup size={"md"} className="mb-3">
                    <FormControl
                        placeholder="Password"
                        aria-label="Recipient's password"
                        aria-describedby="basic-addon2"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </InputGroup>
                <Button variant="warning">Login</Button>

            </Modal.Body>

            <Modal.Footer>
                <p>Are you new in reVamped?</p>
                <Link to="/register" className="button full-width">Create your account</Link>
                {/* <Button variant="success">Create your account</Button> */}
            </Modal.Footer>
        </Modal.Dialog>
    )
}

export default LoginModal;
