// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header'; // Шинэ Header-г импортлох
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';

function App() {
  return (
    <BrowserRouter>
      <Header /> {/* Header-г энд дуудсанаар бүх хуудсанд харагдана */}
      <main className="content-wrap">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;