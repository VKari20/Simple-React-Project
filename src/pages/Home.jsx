import BookList from "../components/BookList";

export default function Home() {
  return (
    <div className="pt-32 px-4 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800 dark:text-white">
        📚 Welcome to the Book Tracker App!
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        Track your reading journey and discover recommended books.
      </p>

      {/* Book List */}
      <BookList />
    </div>
  );
}
