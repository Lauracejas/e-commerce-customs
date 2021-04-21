import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Homepage from "./pages/Homepage"
// import ProductScreen from "./pages/Dashboard"
import Cart from "./pages/Cart"
import { GlobalStyles } from './components/Global/Global';
import { ThemeProvider } from 'styled-components';

import { theme } from './components/Theme/Theme';
import Dashboard from './pages/Dashboard';
import ProductPage from './pages/ProductPage';



const App = () => {
  return (
    <Router>
      

      <div>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
        <Header />
       
       
        <Route exact path="/" component={Homepage} />
        {/* <Route exact path="/products/:_id" component={ProductScreen} /> */}
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/product/:id" component={ProductPage} />
        
        {/* <Footer /> */}
        </ThemeProvider>
      </div>
      
    </Router>
    )
}

export default App

