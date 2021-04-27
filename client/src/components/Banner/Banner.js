import React from 'react';

import Logo from "../../logo.png"
import "./style.css";


const Banner = () => {
    

    return (
        <div className="jumbotron text-center " style={{backgroundColor: "#00233A", backgroundImage: "url('https://images.pexels.com/photos/326311/pexels-photo-326311.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')", backgroundBlendMode: "exclusion"}}>

                     <h4>Welcome to<img  alt='' src={Logo} style={{height: "60px", margin: "15px", }}/></h4>

        </div>
    
    )
}

export default Banner;

