import React, { useEffect } from 'react';
//import { Link } from 'react-router-dom'
import CardEl from "../components/CardEl/CardEl";
import { useSelector, useDispatch } from 'react-redux'
import { listProduct } from '../utils/productAction';
import "./style.css";

const Homepage = () => {

    const productList = useSelector(state => state.productList);
    const { loading, error} = productList;
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(listProduct());       
       
    }, [dispatch])

    return loading ? <div>Loading...</div> :
    error ? <div>{error}</div> :
        <div className="container-fluid main-contain">
            <h1>Homepage</h1>
            <CardEl />
        
      </div>
            

            
      
    
}

export default Homepage
