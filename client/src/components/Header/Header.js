import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png"
import "./style.css";
import axios from "axios"

const Header = (data) => {
    const location = useLocation();
    console.log(data);

    const [isLoggedIn, setIsLoggedIn] = useState({});

    const  isLog = (data) => {
        
        setIsLoggedIn(data);
    }

    const handleSubmit = async e => {
        e.preventDefault();              
        axios.post("/api/users/logout", {          
        }).then((response) => {
            if (response.data);
            console.log(response); 
            data.handleLogout(response.data);          
        });
    };   
    
    

    return (
        <div>
            <nav className="navbar  bg">
                <div className="container-fluid align-items-center">
                <ul className="nav justify-content-center">

                    <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                        <img className="logo-img" src={logo} alt='' />


                    </Link>
                </ul>
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <Link to="/profile" className={location.pathname === "/dashboard" ? "nav-link active" : "nav-link"}>
                                Your Profile
                            </Link>
                        </li>
                        <li className="nav-item ">
                            <Link to="/inventory" className={location.pathname === "/inventory" ? "nav-link active" : "nav-link"}>
                                Inventory
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/cart" className={location.pathname === "/cart" ? "nav-link active" : "nav-link"}>
                                Cart
                            </Link>
                        </li>
                        {(function(data) {
                        if (isLoggedIn){
                            <li className="nav-item">
                                <Link to="/signin" onClick={handleSubmit} className={location.pathname === "/cart" ? "nav-link active" : "nav-link"}>
                                    Logout
                                </Link>
                            </li>
                        } else {
                            <li className="nav-item">
                                <Link to="/signin" className={location.pathname === "/cart" ? "nav-link active" : "nav-link"}>
                                    Sign In
                                </Link>
                            </li>
                        }
                        }) ()}



                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header
