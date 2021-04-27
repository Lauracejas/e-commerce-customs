import React from 'react';

import Logo from "../../logo.png"
import "./style.css";


const Banner = () => {
    

    return (
        <div className="jumbotron text-center ">

                     <h4>Welcome to<img  alt='' src={Logo} style={{height: "60px", margin: "15px"}}/></h4>

        </div>
    
    )
}

export default Banner;

