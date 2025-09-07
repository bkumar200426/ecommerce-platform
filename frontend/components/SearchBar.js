export default function SearchBar({ setQuery }) {
  return (
    <input
      type="text"
      placeholder="Search products..."
      onChange={e => setQuery(e.target.value)}
      style={{ margin: '10px 0', padding: '8px', width: '100%' }}
    />
  );
}