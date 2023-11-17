// Importing the 'createSlice' function from the '@reduxjs/toolkit' library
import { createSlice } from '@reduxjs/toolkit';

// Importing CSS file for styling
import './cartSlice.css';

// Creating a Redux slice named 'cartSlice'
const cartSlice = createSlice({
    // Name of the slice
    name: 'cart',

    // Initial state for the 'cart' slice is an empty array
    initialState: [],

    // Reducers define how the state can be modified in response to actions
    reducers: {
        // Reducer to add an item to the cart
        addToCart: (state, action) => {
            // Checking if the item already exists in the cart
            const existingItem = state.find(item => item.product.id === action.payload.id);

            // If the item already exists, increment its quantity
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                // If the item doesn't exist, add it to the cart with a quantity of 1
                state.push({ product: action.payload, quantity: 1 });
            }
        },

        // Reducer to remove an item from the cart
        removeFromCart: (state, action) => {
            // Filtering out the item with the specified ID from the cart
            return state.filter(item => item.product.id !== action.payload.id);
        }
    },
});

// Exporting the action creators from the 'cartSlice' slice
export const { addToCart, removeFromCart } = cartSlice.actions;

// Exporting the reducer function from the 'cartSlice' slice
export default cartSlice.reducer;
