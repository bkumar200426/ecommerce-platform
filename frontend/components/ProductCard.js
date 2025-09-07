import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { cart, setCart } = useContext(CartContext);

  const addToCart = () => setCart([...cart, product]);

  return (
    <div style={{ border: '1px solid #ccc', margin: 10, padding: 10 }}>
      <img src={product.image} alt={product.name} width={100} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}