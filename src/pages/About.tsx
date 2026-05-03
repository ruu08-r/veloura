import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container animate-fade-in" style={{ padding: '6rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 className="heading-xl" style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--color-brown)' }}>Our Story</h1>
      
      <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-brown)', opacity: 0.9 }}>
        <p style={{ marginBottom: '2rem' }}>
          Veloura was born out of a quiet desire to merge the aesthetic beauty of vintage French perfumeries with the grounding, nourishing power of nature. Founded by Riya Dhanwani, our brand is a love letter to the art of self-care.
        </p>
        
        <p style={{ marginBottom: '2rem' }}>
          We believe that skincare shouldn't just be a routine; it should be a sensory experience. From the creamy, luxurious textures of our scrubs to the delicate, lingering scents of rose petals and roasted coffee, every detail is meticulously crafted to elevate your everyday moments.
        </p>
        
        <h2 className="heading-lg" style={{ marginTop: '4rem', marginBottom: '1.5rem', textAlign: 'center' }}>Our Vision</h2>
        
        <p style={{ marginBottom: '2rem' }}>
          Our vision is simple: <strong>Luxury your skin deserves</strong>. We source only the finest, most sustainable ingredients to create formulas that are as kind to the earth as they are to your body.
        </p>
        
        <p>
          At Veloura, we celebrate the feminine spirit—soft, powerful, and deeply beautiful. We invite you to slow down, draw a bath, and indulge in a moment that is entirely yours.
        </p>
      </div>
    </div>
  );
};

export default About;
