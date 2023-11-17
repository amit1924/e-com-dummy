// Importing React library and necessary hooks from 'react-redux'
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Importing the 'removeFromCart' action from the 'cartSlice' file
import { removeFromCart } from '../features/cartSlice';

// Importing the shopping cart icon from 'react-icons'
import { FaShoppingCart } from 'react-icons/fa';

// Importing CSS file for styling
import './ShoppingCart.css';

// Importing 'useNavigate' hook from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

// Defining the 'ShoppingCart' functional component
const ShoppingCart = () => {
  // Accessing the 'cart' state from the Redux store
  const cart = useSelector(state => state.cart);
  
  // Logging the current cart state to the console for verification
  console.log(cart);

  // Initializing the 'dispatch' function from the 'react-redux' library
  const dispatch = useDispatch();

  // Initializing the 'navigate' function from the 'react-router-dom' library
  const navigate = useNavigate();

  // Function to navigate to the checkout page
  const clickOrder = () => {
    navigate('/Checkout');
  };

  // Rendering the shopping cart component
  return (
    <>
      {/* Link to the home page */}
      <a href='/' style={{ textDecoration: "none", fontSize: "25px" }}>Home Page</a>
      
      {/* Container for the shopping cart section */}
      <div className="shopping-cart-container" style={{ textAlign: "center", marginTop: "-105px" }}>
        
        {/* Heading for the shopping cart section with a shopping cart icon */}
        <h2>
          <FaShoppingCart className="cart-icon" /> Shopping Cart
        </h2>
        
        {/* Mapping through the 'cart' array and rendering individual cart items */}
        {cart.map(item => (
          // Container for each cart item, using the product's unique 'id' as the 'key'
          <div className="cart-item" key={item.product.id}>
            {/* Displaying the name of the product in the cart */}
            <h3>{item.product.name}</h3>
            
            {/* Button to initiate the order process */}
            <button onClick={clickOrder}>Order now</button>
            
            {/* Displaying the price of the product in the cart */}
            <p>
              Price: ${item.product.price}
            </p>
            
            {/* Displaying the quantity of the product in the cart */}
            <p>Quantity: {item.quantity}</p>
            
            {/* Button to remove the product from the cart, calling 'removeFromCart' action on click */}
            <button onClick={() => dispatch(removeFromCart(item.product))}>Remove from Cart</button>
          </div>
        ))}
      </div>
    </>
  );
};

// Exporting the 'ShoppingCart' component as the default export
export default ShoppingCart;
