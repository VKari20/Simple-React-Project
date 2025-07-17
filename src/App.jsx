import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import SearchBooks from './pages/SearchBooks';
import Home from './pages/Home'; // ✅ import Home

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} /> {/* ✅ show homepage */}
        <Route path="/search" element={<SearchBooks />} />
      </Routes>
    </Layout>
  );
}

export default App;
