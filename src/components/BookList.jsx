import { useEffect, useState } from "react";
import BookCard from "./BookCard";
import SearchBar from "./SearchBar";

export default function BookList() {
  const [books, setBooks] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch books from mock API
 fetch("https://www.googleapis.com/books/v1/volumes?q=harry+potter")
  .then((res) => res.json())
  .then((data) => {
    const books = data.items.map((item) => {
      const info = item.volumeInfo;
      return {
        id: item.id,
        title: info.title || "Untitled",
        status: "Want to Read",
        cover:
          info.imageLinks?.thumbnail ||
          "https://covers.openlibrary.org/b/id/10958349-L.jpg",
        progress: 0,
      };
    });
    setBooks(books);
    setLoading(false);
  })
  .catch((err) => {
    console.error("Failed to fetch books:", err);
    setLoading(false);
  });




  const handleStatusChange = (id) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) => {
        if (book.id === id) {
          const nextStatus =
            book.status === "Want to Read"
              ? "Reading"
              : book.status === "Reading"
              ? "Read"
              : "Want to Read";
          const nextProgress =
            nextStatus === "Want to Read"
              ? 0
              : nextStatus === "Reading"
              ? 50
              : 100;
          return { ...book, status: nextStatus, progress: nextProgress };
        }
        return book;
      })
    );
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(filterText.toLowerCase()) ||
    book.status.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div className="px-4">
      <h2 className="text-2xl font-bold mb-2">📘 Welcome to the Book Tracker App</h2>
      <SearchBar filterText={filterText} setFilterText={setFilterText} />
      <p className="text-gray-600 dark:text-gray-300 mb-4">Track your reading journey and stay inspired 📖</p>

      {loading ? (
        <p className="text-center text-gray-500 dark:text-gray-400">Loading books...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-y-auto max-h-[80vh] pb-4">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} onStatusChange={handleStatusChange} />
          ))}
        </div>
      )}
    </div>
  );
}
