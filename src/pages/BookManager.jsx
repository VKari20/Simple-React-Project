import { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import Card from '../components/BookCard';
import Button from '../components/Button';

const defaultBooks = [
  { id: 1, title: 'Atomic Habits', author: 'James Clear', status: 'Read' },
  { id: 2, title: 'The Alchemist', author: 'Paulo Coelho', status: 'Read' },
  { id: 3, title: 'Deep Work', author: 'Cal Newport', status: 'Read' },
  { id: 4, title: 'Sapiens', author: 'Yuval Noah Harari', status: 'Read' },
  { id: 5, title: 'Educated', author: 'Tara Westover', status: 'Read' },
  { id: 6, title: '1984', author: 'George Orwell', status: 'Read' },
  { id: 7, title: 'The Four Agreements', author: 'Don Miguel Ruiz', status: 'Read' },
  { id: 8, title: 'To Kill a Mockingbird', author: 'Harper Lee', status: 'Read' },
  { id: 9, title: 'The Subtle Art...', author: 'Mark Manson', status: 'Read' },
  { id: 10, title: 'Becoming', author: 'Michelle Obama', status: 'Read' },
];

export default function BookManager() {
  const [userBooks, setUserBooks] = useLocalStorage('books', []);
  const [filter, setFilter] = useState('All');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const addBook = () => {
    if (!title || !author) return;
    const newBook = {
      id: Date.now(),
      title,
      author,
      status: 'Want to Read'
    };
    setUserBooks([...userBooks, newBook]);
    setTitle('');
    setAuthor('');
  };

  const updateStatus = (id, newStatus) => {
    setUserBooks(userBooks.map(book =>
      book.id === id ? { ...book, status: newStatus } : book
    ));
  };

  const deleteBook = (id) => {
    setUserBooks(userBooks.filter(book => book.id !== id));
  };

  const filteredBooks = userBooks.filter(book =>
    filter === 'All' ? true : book.status === filter
  );

  return (
    <div className="max-w-6xl mx-auto mt-20 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">📘 My Book List</h2>

      {/* Add Book Form */}
      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Book Title"
          className="border p-2 rounded w-full"
        />
        <input
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author"
          className="border p-2 rounded w-full"
        />
        <div className="sm:col-span-2 flex justify-center">
          <Button onClick={addBook}>Add Book</Button>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {['All', 'Want to Read', 'Reading', 'Read'].map(status => (
          <Button
            key={status}
            variant={filter === status ? 'primary' : 'secondary'}
            onClick={() => setFilter(status)}
          >
            {status}
          </Button>
        ))}
      </div>

      {/* User Added Books */}
      {filteredBooks.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold mb-4">Your Books</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {filteredBooks.map(book => (
              <Card key={book.id} title={book.title} author={book.author} status={book.status}>
                <div className="space-x-2 mt-2">
                  {['Want to Read', 'Reading', 'Read'].map(status => (
                    <Button
                      key={status}
                      variant="secondary"
                      onClick={() => updateStatus(book.id, status)}
                    >
                      {status}
                    </Button>
                  ))}
                  <Button variant="danger" onClick={() => deleteBook(book.id)}>Delete</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Default Book Recommendations */}
      <h3 className="text-xl font-semibold mb-4">Recommended Books</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
        {defaultBooks.map(book => (
          <Card
            key={book.id}
            title={book.title}
            author={book.author}
            status={book.status}
          />
        ))}
      </div>
    </div>
  );
}
