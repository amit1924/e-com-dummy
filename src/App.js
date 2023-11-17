// Importing React library
import React from "react";

// Importing the 'ProductList', 'ShoppingCart', and 'Checkout' components
import ProductList from "./components/ProductList";
import ShoppingCart from "./components/ShoppingCart";
import Checkout from "./components/Checkout";

// Importing CSS file for global styling
import './App.css';

// Importing components from 'react-router-dom' for routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Defining the main App component
function App() {
  return (
    // Setting up the React Router with the 'BrowserRouter'
    <Router>
      {/* Main container for the application */}
      <div>
        {/* Main heading for the application */}
        <h1>E-Commerce</h1>

        {/* Defining routes using the 'Routes' and 'Route' components */}
        <Routes>
          {/* Route for the home page, rendering the 'ProductList' component */}
          <Route path="/" element={<ProductList />} />
          
          {/* Route for the cart page, rendering the 'ShoppingCart' component */}
          <Route path='/cart' element={<ShoppingCart />} />
          
          {/* Route for the checkout page, rendering the 'Checkout' component */}
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </Router>
  );
}

// Exporting the 'App' component as the default export
export default App;
