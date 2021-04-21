import React, { useState, useEffect } from 'react';
import CardEl from "../components/CardEl/CardEl";
// import { listProduct } from '../utils/productAction';
import "./style.css";
import data from "../data"

const Homepage = () => {
const [productsList, setProductsList] = useState([]);
    


    useEffect(() => {
            setProductsList(data.products); 
       
    }, [])

    return (  
        <div className="container-fluid main-contain">
            <h1>Homepage</h1>
           { productsList.length && productsList.map((product) => 
            <CardEl key={product._id} product={product}/>
            )
            }
        
      </div>            
    )
            
      
    
}

export default Homepage
