import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="container animate-fade-in" style={{ padding: '6rem 2rem' }}>
      <h1 className="heading-xl" style={{ textAlign: 'center', marginBottom: '4rem', color: 'var(--color-brown)' }}>Get in Touch</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
        <div>
          <h3 className="heading-md" style={{ marginBottom: '1.5rem', color: 'var(--color-brown)' }}>Contact Information</h3>
          <p style={{ marginBottom: '1rem', opacity: 0.8 }}>We would love to hear from you. Please reach out with any questions about our products, your order, or just to say hello.</p>
          
          <ul style={{ listStyle: 'none', padding: 0, marginTop: '2rem', lineHeight: '2' }}>
            <li><strong>Email:</strong> hello@veloura.com</li>
            <li><strong>Phone:</strong> +91 98765 43210</li>
            <li><strong>Instagram:</strong> <a href="https://www.instagram.com/rii_yaaaa_._/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>@rii_yaaaa_._</a></li>
          </ul>
        </div>
        
        <div>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <input type="text" placeholder="Your Name" style={{ padding: '1rem', border: '1px solid rgba(90, 62, 54, 0.2)', borderRadius: '4px', fontFamily: 'inherit', background: 'transparent' }} />
            <input type="email" placeholder="Your Email" style={{ padding: '1rem', border: '1px solid rgba(90, 62, 54, 0.2)', borderRadius: '4px', fontFamily: 'inherit', background: 'transparent' }} />
            <input type="text" placeholder="Subject" style={{ padding: '1rem', border: '1px solid rgba(90, 62, 54, 0.2)', borderRadius: '4px', fontFamily: 'inherit', background: 'transparent' }} />
            <textarea placeholder="Your Message" rows={5} style={{ padding: '1rem', border: '1px solid rgba(90, 62, 54, 0.2)', borderRadius: '4px', fontFamily: 'inherit', background: 'transparent', resize: 'vertical' }}></textarea>
            <button type="button" className="btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
