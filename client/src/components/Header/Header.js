import React from 'react';
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png"
import "./style.css";

const Header = () => {
    const location = useLocation();
    
    // async function logout() {
    //     const response = await fetch('/api/users/logout', {
    //       method: 'post',
    //       headers: { 'Content-Type': 'application/json' }
    //     });
      
    //     if (response.ok) {
    //       document.location.replace('/');
    //     } else {
    //       alert(response.statusText);
    //     }
    //   }

    return (
        <div>
            <nav className="navbar navbar-light bg">
                <div className="container-fluid">

                    <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                        <img src={logo} alt='' />


                    </Link>
                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                            <Link to="/profile" className={location.pathname === "/dashboard" ? "nav-link active" : "nav-link"}>
                                Your Profile
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/inventory" className={location.pathname === "/inventory" ? "nav-link active" : "nav-link"}>
                                Inventory
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/cart" className={location.pathname === "/cart" ? "nav-link active" : "nav-link"}>
                                Cart
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/signin" className={location.pathname === "/cart" ? "nav-link active" : "nav-link"}>
                                Logout
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/signin" className={location.pathname === "/cart" ? "nav-link active" : "nav-link"}>
                                Sign In
                            </Link>
                        </li>

                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header
