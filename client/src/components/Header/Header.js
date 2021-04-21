import React from 'react';
import { Link, useLocation } from "react-router-dom";
import "./style.css";

const Header = () => {
    const location = useLocation();
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">










                    <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                        Home "putlogo"
                        </Link>
                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                            <Link to="/dashboard" className={location.pathname === "/dashboard" ? "nav-link active" : "nav-link"}>
                                Dashboard
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/cart" className={location.pathname === "/cart" ? "nav-link active" : "nav-link"}>
                                Cart
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
