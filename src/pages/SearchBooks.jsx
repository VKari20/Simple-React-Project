import { useEffect, useState } from 'react';
import Card from '../components/BookCard';

export default function SearchBooks() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchBooks = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`https://openlibrary.org/search.json?q=${query}`);
      const data = await res.json();
      setResults(data.docs.slice(0, 10)); // paginate or limit
    } catch (err) {
      setError('Failed to fetch');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (query) {
      const timeout = setTimeout(() => searchBooks(), 500); // debounce
      return () => clearTimeout(timeout);
    }
  }, [query]);

  return (
    <div>
      <input
        className="border p-2 w-full mb-4"
        placeholder="Search books..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid md:grid-cols-3 gap-4">
        {results.map(book => (
          <Card
            key={book.key}
            title={book.title}
            author={book.author_name?.[0] || 'Unknown'}
          />
        ))}
      </div>
    </div>
  );
}
