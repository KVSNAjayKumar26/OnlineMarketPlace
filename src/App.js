import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Note: Routes is used instead of Switch
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import ProductPage from './pages/ProductPage';
import Navbar from './components/Navbar';
import './styles/styles.scss';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<HomePage />} />

          {/* Cart Page */}
          <Route path="/cart" element={<CartPage cart={cart} />} />

          {/* Product Page */}
          <Route path="/product/:id" element={<ProductPage addToCart={addToCart} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
