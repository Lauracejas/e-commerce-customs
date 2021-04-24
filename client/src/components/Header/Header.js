import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png"
import "./style.css";
import axios from "axios"
// import User from '../../../../models/user';

const Header = (props) => {
    const location = useLocation();
    console.log(props);


    const [logged_in, setLogged_in] = useState({});


    const handleSubmit = async e => {
        e.preventDefault();
        axios.post("/api/users/logout", {
            logged_in: logged_in,
        }).then((response) => {
            if (response.data);
            console.log(response.data);
        });
    };
    // console.log(props.userLog.user.name)


    return (
        <div>
            <nav className="navbar navbar-light bg">
                <div className="container-fluid">

                    <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                        <img src={logo} alt='' />
                      
                    </Link>
                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                            <Link to="/inventory" className={location.pathname === "/inventory" ? "nav-link active" : "nav-link"}>
                                Inventory
                            </Link>
                        </li>
                        <li className="nav-item">
                               <Link to="/profile" className={location.pathname === "/dashboard" ? "nav-link active" : "nav-link"}>
                               {props.userLog?.user  ?  
                         <p>{props.userLog?.user.name } </p> : <p>profile</p>
                           }


                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/cart" className={location.pathname === "/cart" ? "nav-link active" : "nav-link"}>
                                Cart
                            </Link>
                        </li>
                        {props.userLog?.user  ? 
                            <li className="nav-item">
                                <Link to="/signin" onChange={(e) => setLogged_in(e.target.value)} onClick={handleSubmit} className={location.pathname === "/cart" ? "nav-link active" : "nav-link"}>
                                    Logout
                                </Link>
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
