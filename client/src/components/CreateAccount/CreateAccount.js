import React, { useState } from 'react';
import "./style.css";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl';
import { Link } from "react-router-dom"
import axios from "axios"



const CreateAccount = () => {
    const [usernameAccount, setUsernameAccount] = useState();
    const [emailAccount, setEmailAccount] = useState();
    const [passwordAccount, setPasswordAccount] = useState();

    // axios.defaults.withCredentials = true;
    const handleSubmit = async (e) => {
        axios.post("/api/users/", {
            username: usernameAccount,
            email: emailAccount,
            password: passwordAccount,
        }).then((response) => {
            if (response.data.message);
            console.log(response);
        });


        // e.preventDefault();
        // console.log("username is " + username);
        // console.log("email is " + email);
        // console.log("password is " + password);
        // if (password && email && username) {
        //     const response = await axios("/api/users/", {
        //         method: "POST",
        //         body: JSON.stringify({ username, email, password }),
        //         headers: { "Content-Type": "application/json" },
        //     });
        //     if (response.ok) {
        //         document.location.replace('/');
        //     } else {
        //         alert('You have to signup first');
        //     }
        // }
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
                {/* <Link to="/" > */}
                <Button
                    onSubmit={handleSubmit}
                    variant="warning"
                >Create my Account</Button>
                {/* </Link> */}

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
