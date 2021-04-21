import React from 'react';
import "./style.css";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl';
// import SignUpModal from './SignUpModal/SignUpModal';

const LoginModal = () => {
    return (
        <Modal.Dialog>
            <Modal.Header closeButton>
                <Modal.Title>Welcome Guest!</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p><strong>Log In</strong></p>
                <InputGroup size={"md"} className="mb-3">
                    <FormControl
                        placeholder="Username"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                </InputGroup>
                <p><strong>Password</strong></p>
                <InputGroup size={"md"} className="mb-3">
                    <FormControl
                        placeholder="Password"
                        aria-label="Recipient's password"
                        aria-describedby="basic-addon2"
                    />
                </InputGroup>

            </Modal.Body>

            <Modal.Footer>
                <p><a href='/signup'>Sign Up</a></p>
                <Button variant="warning">Login</Button>
            </Modal.Footer>
        </Modal.Dialog>
    )
}

export default LoginModal;
