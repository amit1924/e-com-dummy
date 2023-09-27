import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../features/cartSlice";
import './Checkout.css'; // Add a CSS file for styling

const Checkout = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    paymentMethod: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Payment Method:</label>
          <input type="text" name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} required />
        </div>
        <button type="submit">Place Order</button>
      </form>
      <h2>Items in Cart</h2>
      {cart.map(item => (
        <div className="cart-item" key={item.product.id}>
          <h3>{item.product.name}</h3>
          <p>Price: ${item.product.price}</p>
          <p>Quantity: {item.quantity}</p>
          <button onClick={() => dispatch(removeFromCart(item.product))}>Remove from Cart</button>
        </div>
      ))}
    </div>
  )
}

export default Checkout;
