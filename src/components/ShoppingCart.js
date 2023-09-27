import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../features/cartSlice';
import { FaShoppingCart } from 'react-icons/fa'; // Importing cart icon
import './ShoppingCart.css'; // Add a CSS file for styling
import { useNavigate } from 'react-router-dom/dist';

const ShoppingCart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const navigate = useNavigate()

  const clickOrder=()=>{
    navigate('/Checkout')
  }

  return (
    <div className="shopping-cart-container">
      <h2>
        <FaShoppingCart className="cart-icon" /> Shopping Cart
      </h2>
      {cart.map(item => (
        <div className="cart-item" key={item.product.id}>
          <h3>{item.product.name}</h3>
          <button onClick={clickOrder}>Order now</button>
          <p>
            Price: ${item.product.price}
          </p>
          <p>Quantity: {item.quantity}</p>
          <button onClick={() => dispatch(removeFromCart(item.product))}>Remove from Cart</button>
        </div>
      ))}
    </div>
  )
}

export default ShoppingCart;
