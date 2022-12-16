import { useContext } from "react";
import { CartContext } from "../music/music.component";




const Cart = () => {
    const { cartItems, setCartItems } = useContext(CartContext);

  const removeFromCart = (beat) => {
    setCartItems(cartItems.filter((item) => item !== beat));
  }
console.log(cartItems)

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