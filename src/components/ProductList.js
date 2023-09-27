import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import products from "../data";
import './ProductList.css'; // Add a CSS file for styling
import CartIcon from "./CartIcon";


const ProductList = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    console.log("Adding to cart:", product); // Check if product info is correct
    dispatch(addToCart(product)); // Check if dispatch is called
  };

  return (
    <div className="product-list-container">
      <h2>Product Listings</h2>
      <CartIcon />
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          <p>{product.description}</p>
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
