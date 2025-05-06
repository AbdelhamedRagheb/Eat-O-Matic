import React from 'react';
import './Cart.css';
import burgerImg from './assets/burger.png'; // لازم تحط الصورة هنا

const Cart = () => {
  return (
    <div className="cart-container">
      <h2 className="cart-title">My Cart</h2>

      <div className="cart-item">
        <img src={burgerImg} alt="Burger" className="item-img" />
        <div className="item-info">
          <p className="item-price">$60</p>
        </div>
        <div className="item-count">6</div>
      </div>

      <div className="offer-row">
        <span className="offer-label">Offers</span>
        <span className="offer-code">Add code</span>
      </div>

      <div className="order-summary">
        <h3 className="summary-title">Order Summary</h3>
        <div className="summary-row">
          <span>Order</span><span>$60</span>
        </div>
        <div className="summary-row">
          <span>Delivery</span><span>$6</span>
        </div>
        <div className="summary-row total">
          <span>Total</span><span>$66</span>
        </div>
      </div>

      <div className="address-row">
        <span className="address-label">Address</span>
        <div className="address-value">TD53, Kaya...</div>
      </div>

      <button className="checkout-button">Check Out</button>
    </div>
  );
};

export default Cart;
