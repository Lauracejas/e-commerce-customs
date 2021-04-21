import React from 'react';
// import CardEl from "../components/CardEl/CardEl";
import SearchBar from "../components/SearchBar/SearchBar";
import Banner from '../components/Banner/Banner';
import HotCards from '../components/HotCards/HotCards';

import "./style.css";

const Homepage = () => {
    return (
        <div className="container-fluid main-contain">
            <SearchBar />
            <h1>Homepage</h1>
            <Banner />
            <HotCards />
        </div>
            

            
      
    )
}

export default Homepage;
