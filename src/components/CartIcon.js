import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './CartIcon.css'

const CartIcon = () => {
    const cart = useSelector(state => state.cart);
    const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/cart'); // Navigate to the Cart page
    }

    return (
        <div className="cart-icon" onClick={handleClick}>
            <img src="cart.png" alt="Cart Icon" />
            {totalQuantity > 0 && <span className="cart-quantity">{totalQuantity}</span>}
        </div>
    );
}

export default CartIcon;
