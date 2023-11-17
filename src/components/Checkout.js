// Importing React library and necessary hooks from 'react-redux'
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Importing the 'removeFromCart' action from the 'cartSlice' file
import { removeFromCart } from "../features/cartSlice";

// Importing CSS file for styling
import './Checkout.css';

// Defining the 'Checkout' functional component
const Checkout = () => {
  // Accessing the 'cart' state from the Redux store
  const cart = useSelector(state => state.cart);

  // Initializing the 'dispatch' function from the 'react-redux' library
  const dispatch = useDispatch();

  // Initializing state for form data using the 'useState' hook
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    paymentMethod: ''
  });

  // Handling form input changes and updating the form data state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  // Handling form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic for handling the form submission (placing an order) here
    // You may want to dispatch an action or perform other actions related to order placement
  }

  // Rendering the Checkout component
  return (
    <>
      {/* Link to the home page */}
      <a href="/" style={{ textDecoration: "none", fontSize: "25px", color: "yellow", textAlign: "end" }}>Home Page</a>
      
      {/* Container for the checkout section */}
      <div className="checkout-container">
        {/* Heading for the checkout section */}
        <h2>Checkout</h2>
        
        {/* Form for collecting user information for the order */}
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

        {/* Heading for the items in the cart section */}
        <h2>Items in Cart</h2>
        
        {/* Mapping through the 'cart' array and rendering individual cart items */}
        {cart.map(item => (
          // Container for each cart item, using the product's unique 'id' as the 'key'
          <div className="cart-item" key={item.product.id}>
            {/* Displaying the name of the product in the cart */}
            <h3>{item.product.name}</h3>
            
            {/* Displaying the price of the product in the cart */}
            <p>Price: ${item.product.price}</p>
            
            {/* Displaying the quantity of the product in the cart */}
            <p>Quantity: {item.quantity}</p>
            
            {/* Button to remove the product from the cart, calling 'removeFromCart' action on click */}
            <button onClick={() => dispatch(removeFromCart(item.product))}>Remove from Cart</button>
          </div>
        ))}
      </div>
    </>
  )
}

// Exporting the 'Checkout' component as the default export
export default Checkout;
