import React, { useState } from 'react';
import "./style.css";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl';
import {Link} from "react-router-dom"



const CreateAccount = () => {
    const [email, setEmail] = useState();
  const [password, setPassword] = useState();

    const handleSubmit = e => {
        e.preventDefault();
        console.log("email is " + email);
        console.log("password is " + password);
        
      };

    return (
        <Modal.Dialog>
            <Modal.Header >
                <Modal.Title>Create your Account</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p><strong>Create Username</strong></p>
                <InputGroup size={"md"} className="mb-3">
                    <FormControl
                    type="username"
                    placeholder="Username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    />
                </InputGroup>
                <p><strong>Email</strong></p>
                <InputGroup size={"md"} className="mb-3">
                    <FormControl
                    type="email"
                    placeholder="Email"
                    aria-label="Recipient's password"
                    aria-describedby="basic-addon2"
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </InputGroup>
                <p><strong> Create Password</strong></p>
                <InputGroup size={"md"} className="mb-3">
                    <FormControl
                    type="password"
                    placeholder="Password"
                    aria-label="Recipient's password"
                    aria-describedby="basic-addon2"
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </InputGroup>
                <Button 
                onSubmit={handleSubmit}
                variant="warning"
                >Create my Account</Button>

            </Modal.Body>

            <Modal.Footer>
            <p>Already have an account?</p>
            <Link to="/signin">
               Sign-In
                </Link>
                {/* <InputGroup.Checkbox/>
                Admin */}
            </Modal.Footer>
        </Modal.Dialog>   
    )
}

export default CreateAccount
