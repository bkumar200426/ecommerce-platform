import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function Cart() {
  const { cart } = useContext(CartContext);
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.map((item, idx) => (
        <div key={idx}>{item.name} - ${item.price}</div>
      ))}
      <p>Total: ${total}</p>
      <a href="/checkout"><button>Checkout</button></a>
    </div>
  );
}