import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetch(`/api/products?search=${query}`)
      .then(res => res.json())
      .then(setProducts);
  }, [query]);

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <div>
        {products.map(product => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}