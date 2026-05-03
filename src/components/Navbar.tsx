import React from 'react';
import { ShoppingBag, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Navbar.css';

const Navbar: React.FC = () => {
  const { cart, setIsCartOpen } = useCart();
  const itemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="navbar">
      <div className="navbar-container container">
        <button className="nav-toggle">
          <Menu size={24} />
        </button>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About</Link>
        </nav>

        <div className="logo-container">
          <Link to="/" className="logo">
            <h1>Veloura</h1>
            <span>by Dhanwani's</span>
          </Link>
        </div>

        <div className="nav-actions">
          <Link to="/contact" className="contact-link">Contact</Link>
          <button className="cart-btn" onClick={() => setIsCartOpen(true)}>
            <ShoppingBag size={24} />
            {itemCount > 0 && <span className="cart-badge">{itemCount}</span>}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
