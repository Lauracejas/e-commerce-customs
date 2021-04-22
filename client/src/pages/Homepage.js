import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SearchBar from "../components/SearchBar/SearchBar";
import Banner from '../components/Banner/Banner';
import HotCards from '../components/HotCards/HotCards';
import { getAllProducts } from "../utils/API"
import { Link } from 'react-router-dom'
// import { getProduct } from "../utils/productAction";


import "./style.css";


const Homepage = (props) => {
    const {id} = useParams();
    const [products, setProducts] = useState({});
    


    useEffect(() => {
        
        getAllProducts(id)
        .then(res => setProducts(res.data))
        .catch(err => console.log(err));
        
        
    }, [])
    
    console.log(products)
 

    return (  
        <div className="container-fluid main-contain">
            <SearchBar />
            <Banner />
           

            { products.length && products.map((product) => 
            <HotCards key={product._id} product={product}/>
            )
            }

            {/* <HotCards 
            key={products._id}
            product={products[1]}
            /> */}
          
           
       
            
            
            
            
            
        
            

           
        
        </div>            
    )
            
      
    
}

export default Homepage;
