import Navbar from './Navbar';
import Footer from './Footer';


export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <nav className="bg-white dark:bg-gray-800 shadow fixed w-full top-0 z-50">
        {/* Navbar content here */}
      </nav>

      <main className="flex-grow pt-24 max-w-6xl mx-auto w-full px-4">
        {children}
      </main>

      <footer className="bg-white dark:bg-gray-800 text-center text-sm text-gray-600 dark:text-gray-300 py-4 mt-auto">
        &copy; {new Date().getFullYear()} Book Tracker. All rights reserved.
      </footer>
    </div>
  );
}

