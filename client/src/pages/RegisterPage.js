import React, { useState } from 'react';
import "./style.css";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl';
import { Link, Redirect } from "react-router-dom"
import axios from "axios"


const CreateAccount = (props) => {
    const [usernameAccount, setUsernameAccount] = useState();
    const [emailAccount, setEmailAccount] = useState();
    const [passwordAccount, setPasswordAccount] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("username is " + usernameAccount);
        console.log("email is " + emailAccount);
        console.log("password is " + passwordAccount);
        
        axios.post("/api/users/", {
            username: usernameAccount,
            email: emailAccount,
            password: passwordAccount,
        }).then((response) => {
            if (response.data) {
                console.log(response);
                props.handleCreateAccount(response.data);
            } else if(response.data) {
                alert("You now have an account")
            }
        });
    };

   
    if (props.user && props.user.email) {
        return (
            <Redirect to="/profile"/>
        )
    }

    return (
        <>
        <Modal.Dialog >
        <Modal.Header style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#00233A"
        }}>
            <Modal.Title >Create your Account</Modal.Title>
       
        </Modal.Header>

        <Modal.Body className="text-left">
            <p><strong>Create Username</strong></p>
         
            <InputGroup size={"md"} className="mb-3">
                <FormControl
                    type="username"
                    placeholder="Username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    onChange={(e) => setUsernameAccount(e.target.value)}
                />
            </InputGroup>
            <p><strong>Email</strong></p>
            <InputGroup size={"md"} className="mb-3">
                <FormControl
                    type="email"
                    placeholder="Email"
                    aria-label="Recipient's password"
                    aria-describedby="basic-addon2"
                    onChange={(e) => setEmailAccount(e.target.value)}
                />
            </InputGroup>
            <p><strong> Create Password</strong></p>
            <InputGroup size={"md"} className="mb-3">
                <FormControl
                    type="password"
                    placeholder="Password"
                    aria-label="Recipient's password"
                    aria-describedby="basic-addon2"
                    onChange={(e) => setPasswordAccount(e.target.value)}
                />
            </InputGroup>
            {/* <Link to={`/?redirect=${redirect}`}>Create my Account</Link> */}
           
            <Button onClick={handleSubmit}                
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
     <Row style={{margin: "25px"}}/>
    </>
    )
}

export default CreateAccount