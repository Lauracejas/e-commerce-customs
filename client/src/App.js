import React, { useState } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Footer from "./components/Footer/Footer"
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


const App = () => {
  const [user, setUser] = useState({});
  const [userLog, setUserLog] = useState({});
  const [userLogout, setUserLogout] = useState({});
  


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


  return (
    <Router>      

      <div>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
        <Header 
         userLog={userLog} 
         userLogout={userLogout} 
         user={user}
         handleLogout={handleLogout} 
             
         ></Header>       
         
      
          
       
        <Route exact path="/" component={Homepage} />
        {/* <Route exact path="/products/:_id" component={ProductScreen} /> */}
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/inventory" component={Inventory} />
        <Route exact path="/product/:id" component={ProductPage} />
        <Route 
          exact path="/signin" 
          render={(props) => <SigninPage {...props} userLog={userLog} handleSignin={handleSignin} />} 
        />
        <Route
         exact path="/register" 
         render={(props) => <RegisterPage {...props} user={user} handleCreateAccount={handleCreateAccount} />}
         />
        
        {/* <Footer /> */}
        </ThemeProvider>
      </div>
      
    </Router>
    )
}

export default App

