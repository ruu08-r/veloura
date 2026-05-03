import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import './Checkout.css';

const Checkout: React.FC = () => {
  const { cart, cartTotal } = useCart();
  const [paymentMethod, setPaymentMethod] = useState('upi');

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
              <label className={`payment-label ${paymentMethod === 'upi' ? 'active' : ''}`}>
                <input 
                  type="radio" 
                  name="payment" 
                  value="upi" 
                  checked={paymentMethod === 'upi'}
                  onChange={() => setPaymentMethod('upi')}
                />
                UPI (GPay, PhonePe, Paytm)
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
            {paymentMethod === 'upi' && (
              <div className="payment-details upi-details">
                <p>Enter your UPI ID to receive a payment request.</p>
                <input type="text" placeholder="example@upi" className="form-input" />
                <p className="note">Or scan QR code on the next step (Placeholder for Razorpay/Cashfree integration).</p>
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
    </div>
  );
};

export default Checkout;
