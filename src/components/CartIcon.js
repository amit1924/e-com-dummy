// Importing React library and necessary hooks from 'react-redux' and 'react-router-dom'
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// Importing CSS file for styling
import './CartIcon.css';

// Defining the 'CartIcon' functional component
const CartIcon = () => {
    // Accessing the 'cart' state from the Redux store
    const cart = useSelector(state => state.cart);

    // Calculating the total quantity of items in the cart
    const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

    // Initializing the 'navigate' function from the 'react-router-dom' library
    const navigate = useNavigate();

    // Handling click event to navigate to the Cart page
    const handleClick = () => {
        navigate('/cart'); // Navigate to the Cart page
    }

    // Rendering the CartIcon component
    return (
        // Container for the cart icon, clicking on it navigates to the Cart page
        <div className="cart-icon" onClick={handleClick}>
            {/* Image of the cart icon */}
            <img src="cart.png" alt="Cart Icon" />
            
            {/* Displaying the total quantity of items in the cart, if it's greater than 0 */}
            {totalQuantity > 0 && <span className="cart-quantity">{totalQuantity}</span>}
        </div>
    );
}

// Exporting the 'CartIcon' component as the default export
export default CartIcon;
