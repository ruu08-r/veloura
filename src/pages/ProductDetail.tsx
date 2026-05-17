import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data';
import { useCart } from '../context/CartContext';
import './ProductDetail.css';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  // Find default size (prefer Best Seller, otherwise first size)
  const defaultSizeObj = product ? (product.sizes.find(s => s.isBestSeller) || product.sizes[0]) : null;
  const [selectedSize, setSelectedSize] = useState(defaultSizeObj ? defaultSizeObj.size : '');

  if (!product) {
    return (
      <div className="container" style={{ padding: '6rem 2rem', textAlign: 'center' }}>
        <h2>Product not found</h2>
        <Link to="/shop" className="btn-primary" style={{ display: 'inline-block', marginTop: '2rem' }}>Back to Shop</Link>
      </div>
    );
  }

  const currentSizeObj = product.sizes.find(s => s.size === selectedSize) || product.sizes[0];
  const currentPrice = currentSizeObj.price;

  const handleAddToCart = () => {
    addToCart({
      id: `${product.id}-${selectedSize.replace(/\s+/g, '')}`,
      name: product.name,
      price: currentPrice,
      image: product.image,
      quantity,
      size: selectedSize,
    });
  };

  return (
    <div className="product-detail-page container animate-fade-in">
      <div className="product-detail-grid">
        <div className="product-image-section">
          <div className="main-image-container">
            <img src={product.image} alt={product.name} className="main-image" />
          </div>
        </div>

        <div className="product-info-section">
          {product.badge && <div className="product-detail-badge">{product.badge}</div>}
          <h1 className="heading-lg">{product.name}</h1>
          <p className="price">₹{currentPrice}</p>
          <p className="short-desc">{product.shortDesc}</p>

          {/* Size Selector */}
          <div className="size-selector-section">
            <span className="size-label">Select Size:</span>
            <div className="size-options">
              {product.sizes.map((s) => (
                <button
                  key={s.size}
                  type="button"
                  className={`size-btn ${selectedSize === s.size ? 'active' : ''}`}
                  onClick={() => setSelectedSize(s.size)}
                >
                  <div className="size-btn-left">
                    <span className="size-text">{s.size}</span>
                    {s.isBestSeller && <span className="size-bestseller-badge">Best Seller</span>}
                  </div>
                  <span className="size-price-tag">₹{s.price}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="add-to-cart-section">
            <div className="quantity-selector">
              <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(q => q + 1)}>+</button>
            </div>
            <button className="btn-primary full-width" onClick={handleAddToCart}>
              Add to Cart - ₹{currentPrice * quantity}
            </button>
          </div>

          <div className="product-tabs">
            <div className="tab-headers">
              <button 
                className={activeTab === 'description' ? 'active' : ''} 
                onClick={() => setActiveTab('description')}
              >
                Description
              </button>
              <button 
                className={activeTab === 'ingredients' ? 'active' : ''} 
                onClick={() => setActiveTab('ingredients')}
              >
                Ingredients
              </button>
              <button 
                className={activeTab === 'how-to-use' ? 'active' : ''} 
                onClick={() => setActiveTab('how-to-use')}
              >
                How to Use
              </button>
            </div>
            <div className="tab-content">
              {activeTab === 'description' && (
                <div>
                  <p>{product.description}</p>
                  <h4 style={{ marginTop: '1rem', marginBottom: '0.5rem', color: 'var(--color-brown)' }}>Key Benefits</h4>
                  <ul style={{ paddingLeft: '1.2rem', color: 'var(--color-brown)', opacity: 0.8 }}>
                    {product.benefits.map((benefit, idx) => (
                      <li key={idx}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              )}
              {activeTab === 'ingredients' && (
                <p>{product.ingredients}</p>
              )}
              {activeTab === 'how-to-use' && (
                <p>{product.howToUse}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
