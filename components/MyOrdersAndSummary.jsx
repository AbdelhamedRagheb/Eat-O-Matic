// MyOrdersAndSummary.jsx
import React from "react";
import "./MyOrdersAndSummary.css";

const MyOrdersAndSummary = () => {
  return (
    <div className="container">
      {/* My Orders Page */}
      <div className="card">
        <h2>My Orders</h2>
        <div className="step-indicator">
          <div className="step filled"></div>
          <div className="step filled"></div>
          <div className="step"></div>
        </div>

        <div className="order-item">
          <img src="https://img.icons8.com/emoji/48/hamburger-emoji.png" alt="burger" />
          <div className="info">
            <strong>Veg Burger</strong>
            <p>American Cheese, Snack, French Fries</p>
            <span>$9.89</span>
          </div>
          <div className="qty-control">
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
        </div>

        <div className="order-item">
          <img src="https://img.icons8.com/emoji/48/bread-emoji.png" alt="garlic bread" />
          <div className="info">
            <strong>Garlic Bread</strong>
            <p>Asian Tandoori Flavour</p>
            <span>$6.67</span>
          </div>
          <div className="qty-control">
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
        </div>

        <div className="order-item">
          <img src="https://img.icons8.com/emoji/48/pizza-emoji.png" alt="pizza" />
          <div className="info">
            <strong>Farmer's Pizza</strong>
            <p>Jalapeno, Cheese, Bacon</p>
            <span>$10.00</span>
          </div>
          <div className="qty-control">
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
        </div>

        <div className="order-item">
          <img src="https://img.icons8.com/color/48/pepsi.png" alt="pepsi" />
          <div className="info">
            <strong>Pepsi</strong>
            <p></p>
            <span>$4.69</span>
          </div>
          <div className="qty-control">
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
        </div>

        <div className="summary-row">
          <span>Total Price</span>
          <span className="amount">$31.69</span>
        </div>
        <div className="summary-row">
          <span>Delivery Time</span>
          <span>27mins</span>
        </div>
        <button className="btn">Order Now</button>
      </div>

      {/* Summary Page */}
      <div className="card">
        <h2>Summary</h2>
        <div className="step-indicator">
          <div className="step filled"></div>
          <div className="step filled"></div>
          <div className="step filled"></div>
        </div>
        <div className="details-box">
          <p>Veg Burger <span>$9.89</span></p>
          <p>Garlic Bread <span>$6.67</span></p>
          <p>Farmer's Pizza <span>$10.00</span></p>
          <p>Pepsi <span>$4.69</span></p>
          <hr />
          <p>Subtotal <span>$31.69</span></p>
          <p>Service Fee <span>$2.31</span></p>
          <p><strong>Total</strong> <span className="amount">$34</span></p>
        </div>
        <div className="summary-row">
          <span>Total Price</span>
          <span className="amount">$34</span>
        </div>
        <div className="summary-row">
          <span>Delivery Time</span>
          <span>27mins</span>
        </div>
        <button className="btn">Pay Now</button>
      </div>
    </div>
  );
};

export default MyOrdersAndSummary;
