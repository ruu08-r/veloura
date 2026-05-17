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
  gallery?: string[];
  badge?: string;
  sizes?: { size: string; price: number; isBestSeller?: boolean }[];
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, price, image, shortDesc, gallery, badge, sizes }) => {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = React.useState(false);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  // Use the unique gallery provided from data.ts, or just the main image if it doesn't exist
  const productGallery = gallery && gallery.length > 0 ? [image, ...gallery] : [image];

  // Preload images for smooth transition
  React.useEffect(() => {
    productGallery.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, [productGallery]);

  React.useEffect(() => {
    let interval: number;
    if (isHovered && productGallery.length > 1) {
      interval = window.setInterval(() => {
        setCurrentImageIndex(prev => (prev + 1) % productGallery.length);
      }, 1500); // Change image every 1.5 seconds while hovering
    } else {
      setCurrentImageIndex(0); // Reset to main image when not hovering
    }
    return () => clearInterval(interval);
  }, [isHovered, productGallery.length]);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    const defaultSize = sizes && sizes.length > 0 ? sizes[0].size : '100 g';
    const defaultPrice = sizes && sizes.length > 0 ? sizes[0].price : price;
    addToCart({ 
      id: `${id}-${defaultSize.replace(/\s+/g, '')}`, 
      name, 
      price: defaultPrice, 
      image, 
      quantity: 1,
      size: defaultSize
    });
  };

  return (
    <Link 
      to={`/shop/${id}`} 
      className="product-card animate-fade-in"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="product-image-container">
        {badge && <span className="product-badge">{badge}</span>}
        <img 
          src={productGallery[currentImageIndex]} 
          alt={`${name} detail ${currentImageIndex + 1}`} 
          className="product-image active" 
        />
        
        {/* Magical Glow/Shine overlay */}
        <div className="shine-overlay"></div>

        <div className="product-overlay">
          <button className="btn-primary add-to-cart-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-desc">{shortDesc}</p>
        <p className="product-price">from ₹{price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
