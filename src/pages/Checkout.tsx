import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import './Checkout.css';

const Checkout: React.FC = () => {
  const { cart, cartTotal } = useCart();
  const [paymentMethod, setPaymentMethod] = useState('instagram');
  const [showToast, setShowToast] = useState(false);

  const handleInstagramCheckout = () => {
    const cartDetails = cart.map(item => `- ${item.name}${item.size ? ` (${item.size})` : ''} (Qty: ${item.quantity}) - ₹${item.price * item.quantity}`).join('\n');
    const textToCopy = `🌸 *Veloura Order Request* 🌸\n\n🛍️ *Items in Cart:*\n${cartDetails}\n\n💳 *Grand Total:* ₹${cartTotal}\n\n✨ Please arrange delivery for me!`;
    
    navigator.clipboard.writeText(textToCopy).then(() => {
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
        window.open("https://www.instagram.com/rii_yaaaa_._/", "_blank");
      }, 3000);
    }).catch(err => {
      console.error("Failed to copy cart details:", err);
    });
  };

  if (cart.length === 0) {
    return (
      <div className="container" style={{ padding: '6rem 2rem', textAlign: 'center' }}>
        <h2>Your cart is empty</h2>
        <Link to="/shop" className="btn-primary" style={{ display: 'inline-block', marginTop: '2rem' }}>Back to Shop</Link>
      </div>
    );
  }

  return (
    <div className="checkout-page container animate-fade-in">
      <h1 className="heading-lg" style={{ marginBottom: '3rem', textAlign: 'center' }}>Checkout</h1>
      
      <div className="checkout-grid">
        <div className="checkout-form-section">
          {/* Quick Instagram DM checkout card */}
          <div className="instagram-dm-checkout-card">
            <div className="insta-card-header">
              <span className="insta-icon">📸</span>
              <h4>✨ Direct Instagram DM Order</h4>
            </div>
            <p>Skip filling forms! Order directly with Riya on Instagram. One click copies your cart details and opens DM to complete your checkout instantly.</p>
            <button 
              type="button"
              className="insta-dm-btn full-width"
              onClick={handleInstagramCheckout}
            >
              Copy Cart & Order via Instagram DM
            </button>
            <span className="insta-help-text">Auto-copies items to clipboard & opens DM to @rii_yaaaa_._.</span>
          </div>

          {/* Shipping Form */}
          <div className="form-group">
            <h3 className="section-title-small">Shipping Information</h3>
            <div className="form-row">
              <input type="text" placeholder="First Name" className="form-input" />
              <input type="text" placeholder="Last Name" className="form-input" />
            </div>
            <input type="email" placeholder="Email Address" className="form-input" />
            <input type="text" placeholder="Address" className="form-input" />
            <div className="form-row">
              <input type="text" placeholder="City" className="form-input" />
              <input type="text" placeholder="Postal Code" className="form-input" />
            </div>
          </div>

          {/* Payment Options */}
          <div className="form-group">
            <h3 className="section-title-small">Payment Method</h3>
            <div className="payment-options">
              <label className={`payment-label ${paymentMethod === 'instagram' ? 'active' : ''}`}>
                <input 
                  type="radio" 
                  name="payment" 
                  value="instagram" 
                  checked={paymentMethod === 'instagram'}
                  onChange={() => setPaymentMethod('instagram')}
                />
                ✨ Order & Pay via Instagram DM (Direct Chat)
              </label>
              <label className={`payment-label ${paymentMethod === 'card' ? 'active' : ''}`}>
                <input 
                  type="radio" 
                  name="payment" 
                  value="card" 
                  checked={paymentMethod === 'card'}
                  onChange={() => setPaymentMethod('card')}
                />
                Debit / Credit Card
              </label>
              <label className={`payment-label ${paymentMethod === 'cod' ? 'active' : ''}`}>
                <input 
                  type="radio" 
                  name="payment" 
                  value="cod" 
                  checked={paymentMethod === 'cod'}
                  onChange={() => setPaymentMethod('cod')}
                />
                Cash on Delivery
              </label>
            </div>

            {/* Payment Details UI based on selection */}
            {paymentMethod === 'instagram' && (
              <div className="payment-details instagram-details">
                <p>Complete your purchase directly with Riya on Instagram. We'll verify your cart and guide you through the payment in direct chat.</p>
                <button 
                  type="button"
                  className="insta-dm-btn-small" 
                  onClick={handleInstagramCheckout}
                  style={{ width: '100%' }}
                >
                  Copy Cart & DM @rii_yaaaa_._
                </button>
              </div>
            )}
            
            {paymentMethod === 'card' && (
              <div className="payment-details card-details">
                <input type="text" placeholder="Card Number" className="form-input" />
                <div className="form-row">
                  <input type="text" placeholder="MM/YY" className="form-input" />
                  <input type="text" placeholder="CVV" className="form-input" />
                </div>
              </div>
            )}

            {paymentMethod === 'cod' && (
              <div className="payment-details cod-details">
                <p>Pay with cash upon delivery.</p>
              </div>
            )}
          </div>

          <button className="btn-primary full-width" style={{ marginTop: '2rem' }}>Complete Order</button>
        </div>

        {/* Order Summary */}
        <div className="order-summary-section">
          <div className="summary-card">
            <h3 className="section-title-small">Order Summary</h3>
            <div className="summary-items">
              {cart.map(item => (
                <div key={item.id} className="summary-item">
                  <div className="summary-item-img-container">
                     <img src={item.image} alt={item.name} />
                     <span className="summary-item-qty">{item.quantity}</span>
                  </div>
                  <div className="summary-item-info">
                    <h4>{item.name}</h4>
                    {item.size && (
                      <p className="summary-item-size" style={{ fontSize: '0.8rem', opacity: 0.7, margin: '0.2rem 0', color: 'var(--color-brown)' }}>
                        Size: {item.size}
                      </p>
                    )}
                    <p>₹{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="coupon-section">
              <input type="text" placeholder="Discount Code" className="form-input" />
              <button className="btn-secondary">Apply</button>
            </div>

            <div className="summary-totals">
              <div className="totals-row">
                <span>Subtotal</span>
                <span>₹{cartTotal}</span>
              </div>
              <div className="totals-row">
                <span>Shipping</span>
                <span>Calculated at next step</span>
              </div>
              <div className="totals-row grand-total">
                <span>Total</span>
                <span>₹{cartTotal}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Toast Notification */}
      <div className={`veloura-toast ${showToast ? 'show' : ''}`}>
        <span className="toast-icon">✨</span>
        <span className="toast-message">Order details copied to clipboard! Opening Instagram DM... 💖</span>
      </div>
    </div>
  );
};

export default Checkout;
