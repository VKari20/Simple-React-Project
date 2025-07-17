export default function BookCard({ book, onStatusChange }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow hover:shadow-lg transition duration-300">
      <img
        src={book.cover}
        alt={book.title}
        className="w-full h-48 object-cover rounded mb-4"
      />
      <h3 className="text-lg font-semibold dark:text-white">{book.title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">{book.author}</p>
      
      <div className="my-2">
        <p className="text-xs mb-1 text-gray-500 dark:text-gray-400">Progress</p>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div
            className="bg-blue-500 h-2.5 rounded-full transition-all duration-300"
            style={{ width: `${book.progress}%` }}
          ></div>
        </div>
      </div>

      <button
        onClick={() => onStatusChange(book.id)}
        className="mt-4 text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full hover:bg-blue-200 dark:bg-blue-900 dark:text-white dark:hover:bg-blue-800 transition"
      >
        {book.status}
      </button>
    </div>
  );
}
