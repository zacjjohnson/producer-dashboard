import React, { useState } from 'react';
const CartContext = React.createContext();


function CartContextWrapper(props){

    const [ cartItems, setCartItems ] = useState([]);


}

export { CartContextWrapper, CartContext };