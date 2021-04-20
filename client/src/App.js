import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Homepage from "./pages/Homepage"
import Dashboard from "./pages/Dashboard"
import Cart from "./pages/Cart"


const App = () => {
  return (
    <Router>

      <div>
        <Header />
     
        <Route exact path="/" component={Homepage} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/cart" component={Cart} />
        <Footer />
      </div>
    </Router>
    )
}

export default App

