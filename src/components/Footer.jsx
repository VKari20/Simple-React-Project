export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 text-center text-sm text-gray-600 dark:text-gray-300 py-4 mt-auto">
      &copy; {new Date().getFullYear()} Book Tracker. All rights reserved.
    </footer>
  );
}
