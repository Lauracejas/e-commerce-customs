import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import SearchBar from "../components/SearchBar/SearchBar";
import Banner from '../components/Banner/Banner';
import HotCards from '../components/HotCards/HotCards';
import { getAllProducts } from "../utils/API"
import "./style.css";


const Homepage = () => {
        const [products, setProducts] = useState([]);
        const [searchItem, setSearchItem] = useState([]);

        const searchProduct = (event) => {
            const filter = event.target.value.toLowerCase();
            const filterProducts = products.filter((product) => {
                return product.name.toLowerCase().indexOf(filter) > -1;

            } )
            // Update the product list with the filtered name
            setSearchItem(filterProducts);
           
        };
      
        useEffect(() => {
         getAllProducts()
         .then(res => setProducts(res.data))
         .catch(err => console.log(err));
       }, [searchItem])
       console.log(searchItem);  

    return (  
        <div className="container-fluid ">
            
            <SearchBar
             searchProduct={searchProduct}/>
            <Banner />
           
            <Row className="apiFlex">

            { searchItem.length ? searchItem.map((product) => 
            <HotCards  key={product._id} product={product}/>
            ) :
            products.length && products.map((product) => 
            <HotCards  key={product._id} product={product}/>
            )}

            </Row>
            <Row style={{margin: "35px"}}/>
        </div>            
    )
}

export default Homepage;
