import { useContext } from "react";
import { CartContext } from "../../context/cart.context";




const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.map((beat) => (
        <div key={beat._id}>
          <h3>{beat.name}</h3>
          <button onClick={() => removeFromCart(beat)}>Remove from Cart</button>
        </div>
      ))}
    </div>
  );
}

export default Cart;