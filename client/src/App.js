import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Homepage from "./pages/Homepage"
// import ProductScreen from "./pages/Dashboard"
import Cart from "./pages/Cart"
import Inventory from "./pages/Inventory";
import { GlobalStyles } from './components/Global/Global';
import { ThemeProvider } from 'styled-components';

import { theme } from './components/Theme/Theme';
import Profile from './pages/Profile';
import ProductPage from './pages/ProductPage';
import SigninPage from './pages/SigninPage';
import RegisterPage from './pages/RegisterPage';
import { getProduct } from './utils/API';


const App = () => {
  const [user, setUser] = useState({});
  const [userLog, setUserLog] = useState({});
  const [userLogout, setUserLogout] = useState({});
  const [products, setProducts] = useState({})
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('shoppingCart')) || [];
    setCart(cart);
    console.log(cart);
  },[]);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const addToCart = async (id) => {
    const { data } = await getProduct(id);
    const exists = cart.find(product => product._id === data._id);
    if (exists) return console.log('Product Already in Cart'); // TODO: Add Modal
    const cartData = ([...cart, data]);
    const products = JSON.stringify(cartData);
    localStorage.setItem("shoppingCart", products);
    setCart(cartData);
  }

  const removeFromCart = (id) => {
    const cartData = cart.filter(product => product._id !== id);
    const products = JSON.stringify(cartData);
    localStorage.setItem("shoppingCart", products);
    setCart(cartData);
  }

  const handleSignin = (data) => {
    // const loggedInUser = {};
    setUserLog(data);
  }

  const handleCreateAccount = (data) => {
    // const accountUser = {};
    setUser(data);
  }

  const handleLogout = (data) => {
    // const accountUser = {};
    setUserLogout(data);
  }

  const handleProduct = (data) => {
    // const loggedInUser = {};
    setProducts(data);
  }


  return (
    <Router>      

      <div className="main-wrapper">
        <ThemeProvider theme={theme}>
          <GlobalStyles />
        <Header 
         userLog={userLog} 
         setUserLog={setUserLog}
         userLogout={userLogout} 
         user={user}
         setUser={setUser}
         handleLogout={handleLogout} 
             
         ></Header>   
        <Route exact path="/" component={Homepage} />
        {/* <Route exact path="/products/:_id" component={ProductScreen} /> */}
        <Route exact path="/profile" component={Profile} />
        <Route
          exact path="/cart"
          render={(props) => <Cart {...props} products={cart} removeFromCart={removeFromCart} handleProduct={handleProduct}/>}
         />         
        <Route exact path="/inventory" component={Inventory} />
        <Route 
          exact path="/product/:id" 
          render={(props) => <ProductPage {...props} cart={cart} addToCart={addToCart} />} 
        />
        <Route 
          exact path="/signin" 
          render={(props) => <SigninPage {...props} userLog={userLog} handleSignin={handleSignin} />} 
        />
        <Route
         exact path="/register" 
         render={(props) => <RegisterPage {...props} user={user} handleCreateAccount={handleCreateAccount} />}
         />
        
        <Footer />
        </ThemeProvider>
      </div>
      
    </Router>
    )
}

export default App

