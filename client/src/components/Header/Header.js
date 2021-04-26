import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import "./style.css";
import axios from "axios";
import logo from "../../logo.png";
// import User from '../../../../models/user';

const Header = (props) => {
    const location = useLocation();
    console.log(props);


    const [logged_in, setLogged_in] = useState({});



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
    console.log(props.user);


    return (
        <div>
            <nav className="navbar  bg">
                <div className="container-fluid align-items-center">
                <ul className="nav justify-content-center">

                    <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                        <img src={logo} alt='' />
                      
                    </Link>
                </ul>
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <Link to="/inventory" className={location.pathname === "/inventory" ? "nav-link active" : "nav-link"}>
                                Inventory
                            </Link>
                        </li>
                        <li className="nav-item">
                               <Link to="/profile" className={location.pathname === "/dashboard" ? "nav-link active" : "nav-link"}>
                               {props.userLog?.user  ?  
                         <p>{props.userLog?.user.name } </p> : <p>{props.user?.name }</p>
                           } 


                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/cart" className={location.pathname === "/cart" ? "nav-link active" : "nav-link"}>
                                Cart
                            </Link>
                        </li>
                        {props.userLog?.user || props.user.name ? 
                            <li className="nav-item">
                                <Link to="/logout"   onClick={handleSubmit} className={location.pathname === "/cart" ? "nav-link active" : "nav-link"}>
                                    Logout
                                </Link>
                                {/* onChange={(e) => setLogged_in(e.target.value)} */}
                                {/* onClick={handleSubmit} */}
                            </li>
                            :
                            <li className="nav-item">
                                <Link to="/signin" className={location.pathname === "/cart" ? "nav-link active" : "nav-link"}>
                                    Sign In
                                </Link>
                            </li>
                        } 
                       
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header
