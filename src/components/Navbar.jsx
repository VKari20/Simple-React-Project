import { NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { darkMode, setDarkMode } = useTheme();

  const activeClass =
    'text-blue-600 dark:text-yellow-300 font-semibold border-b-2 border-blue-600 dark:border-yellow-300';

  const baseClass =
    'transition duration-200 px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-white';

  return (
    <nav className="bg-white dark:bg-gray-900 shadow fixed w-full top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          📚 Book Tracker
        </h1>

        {/* Nav Links */}
        <div className="flex space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${baseClass} ${activeClass}` : baseClass
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/my-books"
            className={({ isActive }) =>
              isActive ? `${baseClass} ${activeClass}` : baseClass
            }
          >
            My Books
          </NavLink>
          <NavLink
            to="/search"
            className={({ isActive }) =>
              isActive ? `${baseClass} ${activeClass}` : baseClass
            }
          >
            Search
          </NavLink>
        </div>

        {/* Dark Mode Toggle Button */}
        <button
          onClick={() => setDarkMode((prev) => !prev)}
          className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2 rounded hover:opacity-80 transition"
        >
          {darkMode ? '☀ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>
    </nav>
  );
}
