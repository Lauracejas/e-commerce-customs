import React from 'react';
import "./style.css";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl';



const CreateAccount = () => {
    
    return (
        <Modal.Dialog>
            <Modal.Header closeButton>
                <Modal.Title>Create your Account</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p><strong>Create Username</strong></p>
                <InputGroup size={"md"} className="mb-3">
                    <FormControl
                    placeholder="Username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    />
                </InputGroup>
                <p><strong> Create Password</strong></p>
                <InputGroup size={"md"} className="mb-3">
                    <FormControl
                    placeholder="Password"
                    aria-label="Recipient's password"
                    aria-describedby="basic-addon2"
                    />
                </InputGroup>
                <p><strong>Email</strong></p>
                <InputGroup size={"md"} className="mb-3">
                    <FormControl
                    placeholder="Email"
                    aria-label="Recipient's password"
                    aria-describedby="basic-addon2"
                    />
                </InputGroup>

            </Modal.Body>

            <Modal.Footer>
                <Button variant="warning">Create my Account</Button>
                <InputGroup.Checkbox/>
                Admin
            </Modal.Footer>
        </Modal.Dialog>   
    )
}

export default CreateAccount
