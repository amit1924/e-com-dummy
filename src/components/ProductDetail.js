import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';
import './ProductDetail.css'; // Add a CSS file for styling

const ProductDetail = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    console.log('Product:', product); // Check if product info is correct
    dispatch(addToCart(product)); // Check if dispatch is called
  }

  return (
    <div className="product-detail-container">
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <p>{product.description}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductDetail;
