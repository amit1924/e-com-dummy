// Importing React and ReactDOM from 'react' and 'react-dom/client'
import React from 'react';
import ReactDOM from 'react-dom/client';

// Importing CSS file for global styling
import './index.css';

// Importing the main App component
import App from './App';

// Importing the 'Provider' component from 'react-redux' for Redux integration
import { Provider } from 'react-redux';

// Importing the 'configureStore' function from '@reduxjs/toolkit' to create the Redux store
import { configureStore } from '@reduxjs/toolkit';

// Importing the cart reducer from the 'cartSlice' file
import cartReducer from './features/cartSlice';

// Creating the Redux store with the 'cartReducer' as part of the root reducer
const store = configureStore({
  reducer: {
    cart: cartReducer
  }
});

// Creating a root for React rendering using 'ReactDOM.createRoot'
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the main App component within the Redux 'Provider' to provide access to the store
root.render(
  <React.StrictMode>
    {/* Wrapping the entire application with the 'Provider' to enable Redux functionality */}
    <Provider store={store}>
      {/* Rendering the main App component */}
      <App />
    </Provider>
  </React.StrictMode>
);
