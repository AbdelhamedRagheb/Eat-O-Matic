import React, { useState } from 'react';
import './PaymentMethods.css';

const PaymentMethods = () => {
  const [selectedCard, setSelectedCard] = useState('axis');

  return (
    <div className="payment-container">
      <h2 className="payment-title">Payment Methods</h2>

      <div className="payment-option">UPI <span>&gt;</span></div>
      <div className="payment-option">Debit Cards <span>&gt;</span></div>

      <div className="credit-section">
        <h3 className="credit-title">Credit Cards</h3>

        <div
          className={`credit-card ${selectedCard === 'axis' ? 'selected' : ''}`}
          onClick={() => setSelectedCard('axis')}
        >
          <span>💳 Axis Bank xxxx68</span>
          <div className="radio-button">
            {selectedCard === 'axis' && <div className="radio-dot"></div>}
          </div>
        </div>

        <div
          className={`credit-card ${selectedCard === 'vyx' ? 'selected' : ''}`}
          onClick={() => setSelectedCard('vyx')}
        >
          <span>💳 VYX Bank xxxx54</span>
          <div className="radio-button">
            {selectedCard === 'vyx' && <div className="radio-dot"></div>}
          </div>
        </div>

        <button className="add-card-btn">➕ Add New Card</button>
      </div>

      <button className="add-method-btn">➕ Add new method</button>
      <button className="pay-now-btn">Pay Now</button>
    </div>
  );
};

export default PaymentMethods;
