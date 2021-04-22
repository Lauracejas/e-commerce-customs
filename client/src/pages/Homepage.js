import React, { useState, useEffect } from 'react';

// import CardEl from "../components/CardEl/CardEl";
import SearchBar from "../components/SearchBar/SearchBar";
import Banner from '../components/Banner/Banner';
import HotCards from '../components/HotCards/HotCards';

import CardEl from "../components/CardEl/CardEl";
// import { listProduct } from '../utils/API';
import "./style.css";
import data from "../data"

const Homepage = () => {
const [productsList, setProductsList] = useState([]);
    


    useEffect(() => {
            setProductsList(data.products); 
       
    }, [])

    return (  
        <div className="container-fluid main-contain">
            <SearchBar />
            <h1>Homepage</h1>
            <Banner />
            <HotCards />
        
            

           { productsList.length && productsList.map((product) => 
            <CardEl key={product._id} product={product}/>
            )
            }
        
        </div>            
    )
            
      
    
}

export default Homepage;
