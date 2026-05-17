import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data';
import './Home.css';

const Home: React.FC = () => {
  // Show all products on the home page so the user sees everything immediately
  const featuredProducts = products;

  return (
    <div className="home-page animate-fade-in">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content container">
          <h1 className="heading-xl">Luxury your skin deserves</h1>
          <p className="hero-subtitle">Handmade, sensory body scrubs crafted for the ultimate aesthetic self-care ritual.</p>
          <Link to="/shop" className="btn-primary">Shop Now</Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-section container">
        <h2 className="heading-lg section-title">Featured Collections</h2>
        <div className="product-grid">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>

      {/* Brand Story Teaser */}
      <section className="story-section">
        <div className="container story-container">
          <div className="story-text">
            <h2 className="heading-lg">Our Soft Luxury Story</h2>
            <p>
              Veloura was born out of a desire to merge the aesthetic beauty of vintage French perfumeries with the nourishing power of nature. Every jar is a testament to the art of self-care.
            </p>
            <Link to="/about" className="btn-secondary">Read Our Story</Link>
          </div>
          <div className="story-image-placeholder">
            {/* Elegant placeholder for story image */}
            <img src="https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=600&auto=format&fit=crop" alt="Aesthetic setup" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section container">
        <h2 className="heading-lg section-title">Loved by You</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p className="testimonial-text">"The Golden Rio scrub completely transformed my skin. It feels like a spa day every time I use it. The aesthetic is just a bonus!"</p>
            <p className="testimonial-author">- Ayesha M.</p>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-text">"I am obsessed with the Rose Cloud polish. The subtle blush pink color and the real rose petals make it feel so incredibly luxurious."</p>
            <p className="testimonial-author">- Priya S.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
