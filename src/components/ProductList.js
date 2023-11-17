// Importing React library and the 'useDispatch' hook from 'react-redux'
import React from "react";
import { useDispatch } from "react-redux";

// Importing the 'addToCart' action from the 'cartSlice' file
import { addToCart } from "../features/cartSlice";

// Importing the 'products' array from the 'data' file and a CSS file for styling
import products from "../data";
import './ProductList.css';

// Importing the 'CartIcon' component
import CartIcon from "./CartIcon";

// Defining the 'ProductList' functional component
const ProductList = () => {
  // Initializing the 'dispatch' function from the 'react-redux' library
  const dispatch = useDispatch();

  // Handling the 'Add to Cart' button click event
  const handleAddToCart = (product) => {
    // Logging the selected product information to the console for verification
    console.log("Adding to cart:", product);
    
    // Dispatching the 'addToCart' action with the selected product
    dispatch(addToCart(product));
  };

  // Rendering the product list component
  return (
    // Container for the entire product list section
    <div className="product-list-container">
      {/* Heading for the product listings */}
      <h2 style={{textAlign:"center" ,color:"black",fontSize:"45px",fontFamily:"revert-layer",padding:"15px",backgroundColor:"blueviolet"}}>Smartphones List</h2>

      {/* Rendering the 'CartIcon' component for a visual representation of the shopping cart */}
      <CartIcon />

      {/* Mapping through the 'products' array and rendering individual product cards */}
      {products.map((product) => (
        // Container for each product card, using the product's unique 'id' as the 'key'
        <div className="product-card" key={product.id}>
          {/* Displaying the brand name of the product */}
          <h3>Brand: {product.name}</h3>
          
          {/* Displaying the price of the product */}
          <p>Price: ₹{product.price}</p>
          
          {/* Displaying the model or description of the product */}
          <p>Model: {product.description}</p>
          
          {/* Button to add the product to the cart, calling 'handleAddToCart' on click */}
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

// Exporting the 'ProductList' component as the default export
export default ProductList;
