import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Homepage from "./pages/Homepage"
import ProductScreen from "./pages/Dashboard"
import Cart from "./pages/Cart"
import Wrapper from "./components/Wrapper/Wrapper"


const App = () => {
  return (
    <Router>
      <Wrapper>

      <div>
        <Header />     
        <Route exact path="/" component={Homepage} />
        <Route exact path="/product/:_id" component={ProductScreen} />
        <Route exact path="/cart" component={Cart} />
        <Footer />
      </div>
      </Wrapper>
    </Router>
    )
}

export default App

