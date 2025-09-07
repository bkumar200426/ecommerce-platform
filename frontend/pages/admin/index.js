import { useEffect, useState } from 'react';

export default function AdminPanel() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('/api/products').then(res => res.json()).then(setProducts);
  }, []);
  return (
    <div>
      <h2>Admin Panel</h2>
      <ul>
        {products.map(p => (
          <li key={p._id}>{p.name} - ${p.price} (Stock: {p.stock})</li>
        ))}
      </ul>
    </div>
  );
}