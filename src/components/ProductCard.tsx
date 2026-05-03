import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  shortDesc: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, price, image, shortDesc }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart({ id, name, price, image, quantity: 1 });
  };

  return (
    <Link to={`/shop/${id}`} className="product-card animate-fade-in">
      <div className="product-image-container">
        <img src={image} alt={name} className="product-image" />
        <div className="product-overlay">
          <button className="btn-primary add-to-cart-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-desc">{shortDesc}</p>
        <p className="product-price">₹{price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
