import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import { CartProvider } from './context/CartContext';

// Pages placeholders (we'll create these next)
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';
import About from './pages/About';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <CartProvider>
      <Router>
        <div className="vintage-frame">
          <div style={{ position: 'absolute', top: '-5px', right: '-5px', width: '10px', height: '10px', border: '1px solid rgba(198, 167, 105, 0.8)' }}></div>
          <div style={{ position: 'absolute', bottom: '-5px', left: '-5px', width: '10px', height: '10px', border: '1px solid rgba(198, 167, 105, 0.8)' }}></div>
        </div>
        <Navbar />
        <CartDrawer />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:id" element={<ProductDetail />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </CartProvider>
  );
};

export default App;
