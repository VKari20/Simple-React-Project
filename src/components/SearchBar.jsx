export default function SearchBar({ filterText, setFilterText }) {
  return (
    <input
      type="text"
      value={filterText}
      onChange={(e) => setFilterText(e.target.value)}
      placeholder="Search by title or status..."
      className="w-full p-2 mb-4 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-600"
    />
  );
}
