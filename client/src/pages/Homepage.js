import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import SearchBar from "../components/SearchBar/SearchBar";
import Banner from '../components/Banner/Banner';
import HotCards from '../components/HotCards/HotCards';
import { getAllProducts } from "../utils/API"
import "./style.css";


const Homepage = () => {
        const [products, setProducts] = useState([]);
      
        useEffect(() => {
         getAllProducts()
         .then(res => setProducts(res.data))
         .catch(err => console.log(err));

       }, [])
       console.log(products)

  

    return (  
        <div className="container-fluid main-contain">
            <SearchBar />
            <Banner />
           
            <Row className="apiFlex">

            { products.length && products.map((product) => 
            <HotCards  key={product._id} product={product}/>
            )
            }
            </Row>
        </div>            
    )
}

export default Homepage;
