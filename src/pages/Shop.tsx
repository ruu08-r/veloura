import React from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data';
import './Shop.css';

const Shop: React.FC = () => {
  return (
    <div className="shop-page container animate-fade-in">
      <div className="shop-header">
        <h1 className="heading-xl">Our Collection</h1>
        <p className="shop-subtitle">Discover the perfect blend of nature and luxury. Handcrafted to elevate your everyday routine.</p>
      </div>

      <div className="product-grid shop-grid">
        {products.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
