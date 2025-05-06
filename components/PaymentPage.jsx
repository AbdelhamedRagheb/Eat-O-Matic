// PaymentPage.jsx
import React from "react";
import "./PaymentPage.css";

const PaymentPage = () => {
  return (
    <div className="container">
      {/* Step Indicator */}
      <div className="step-indicator">
        <div className="step filled"></div>
        <div className="step filled"></div>
        <div className="step filled"></div>
      </div>

      {/* Payment Form */}
      <div className="card">
        <h2>Payment</h2>
        <label>Payment Method</label>
        <input type="text" placeholder="Card, PAYTM, etc." />

        <label>Cardholder Name</label>
        <input type="text" placeholder="John Doe" />

        <label>Card Number</label>
        <input type="text" placeholder="**** **** **** ****" />

        <div className="row">
          <div className="half">
            <label>Expiry</label>
            <input type="text" placeholder="MM/YY" />
          </div>
          <div className="half">
            <label>CVV</label>
            <input type="text" placeholder="***" />
          </div>
        </div>

        <div className="checkbox-row">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Remember this card</label>
        </div>
        <div className="checkbox-row">
          <input type="checkbox" id="receipt" />
          <label htmlFor="receipt">Send receipt to my email</label>
        </div>

        <div className="summary-row">
          <span>Amount Payable</span>
          <span className="amount">$34</span>
        </div>
        <button className="btn">Pay Now</button>
      </div>

      {/* Confirmation Section */}
      <div className="card">
        <div className="check-icon">✔</div>
        <h2>Confirmed</h2>
        <div className="details-box">
          <p><strong>Order No.:</strong> 1485156254595612</p>
          <p><strong>Total:</strong> $34.00</p>
          <p><strong>Date & Time:</strong> 05.11.2023 - 21:29:10</p>
          <p><strong>Payment Method:</strong> PAYTM</p>
          <p><strong>Name:</strong> ASHUTOSH SHARMA</p>
          <p><strong>Email:</strong> ashutoshiux@gmail.com</p>
        </div>
        <p className="note">A receipt will be sent directly to the email</p>
        <div className="button-group">
          <button className="btn">Review</button>
          <button className="btn outline">Done</button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
