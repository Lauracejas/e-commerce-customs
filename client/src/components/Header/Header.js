import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import "./style.css";
import axios from "axios"
import logo from "../../logo.png"
import { Nav, Navbar } from "react-bootstrap";
// import User from '../../../../models/user';

const Header = (props) => {
    const location = useLocation();
    
    const [logged_in, ] = useState({});

    const handleSubmit = async e => {
        console.log("coming up");
        e.preventDefault();
        axios.post("/api/users/logout", {
            logged_in: logged_in,
        }).then((response) => {
            props.setUserLog({});
            props.setUser({});
            console.log(response);
            console.log(props);
            console.log(logged_in);
        });
    };
   
    return (
        // 
        <Navbar collapseOnSelect expand="lg"  className="bg" >
            <Navbar.Brand >
                <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>


                    <img
                        src={logo}
                        alt=""
                        width="160"
                        height="50"
                        className="d-inline-block align-top"
                    />
                </Link>

            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav " style={{backgroundColor: "#16C0F0", alignItems: "center"}}/>
            <Navbar.Collapse id="responsive-navbar-nav " >
                <Nav className="mr-auto">

                    <Nav.Link >
                        <Link to="/profile" className={location.pathname === "/dashboard" ? "nav-link active" : "nav-link"}>
                            {props.userLog?.user ?
                                <p>{props.userLog?.user.name} </p> : <p>{props.user?.name}</p>
                            }


                        </Link>

                    </Nav.Link>


                </Nav>
                <Nav>
                    <Nav.Link >
                        <Link  style={{color: "#16C0F0"}} to="/cart" className={location.pathname === "/cart" ? "nav-link active" : "nav-link"}>
                            Cart
                           </Link>

                    </Nav.Link>
                    {props.userLog?.user || props.user.name ?
                        <Nav.Link >
                            <Link style={{color: "#16C0F0"}} to="/signin"  onClick={handleSubmit} className={location.pathname === "/cart" ? "nav-link active" : "nav-link"}>
                                Logout
                               </Link>
                        </Nav.Link>
                        :
                        <Nav.Link >

                            <Link style={{color: "#16C0F0"}} to="/signin" className={location.pathname === "/cart" ? "nav-link active" : "nav-link"}>
                                Sign In
                                 </Link>
                        </Nav.Link>
                    }
                    <Nav.Link>
                        <Link  style={{color: "#16C0F0"}} to="/inventory" className={location.pathname === "/inventory" ? "nav-link active" : "nav-link"}>
                            Inventory
                            </Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link style={{color: "#16C0F0"}} to="/profile" className={location.pathname === "/dashboard" ? "nav-link active" : "nav-link"}>
                            {props.userLog?.user ?
                                <p>{props.userLog?.user.name} </p> : <p>{props.user?.name}</p>
                            }
                        </Link>
                    </Nav.Link>

                </Nav>
            </Navbar.Collapse>
        </Navbar>
                      
                       
           
    )
}

export default Header
