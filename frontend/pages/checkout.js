import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function Checkout() {
  const { cart } = useContext(CartContext);

  const handleCheckout = async () => {
    const res = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: cart }),
    });
    const data = await res.json();
    window.location.href = data.url;
  };

  return (
    <div>
      <h2>Checkout</h2>
      <button onClick={handleCheckout}>Pay with Stripe</button>
    </div>
  );
}