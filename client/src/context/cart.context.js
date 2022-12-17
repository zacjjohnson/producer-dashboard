import React, { useState } from 'react';
const CartContext = React.createContext();

function CartContextWrapper(props) {
  const [cartItems, setCartItems] = useState([]);

  // Add a function to add an item to the cart
  function addToCart(item) {
    setCartItems(prevItems => [...prevItems, item]);
  }

  // Add a function to remove an item from the cart
  function removeFromCart(item) {
    setCartItems(prevItems => prevItems.filter(i => i !== item));
  }

  // Create the value for the context
  const cartContextValue = {
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart
  };

  // Render the context provider with the value
  return (
    <CartContext.Provider value={cartContextValue}>
      {props.children}
    </CartContext.Provider>
  );
}

export { CartContextWrapper, CartContext };