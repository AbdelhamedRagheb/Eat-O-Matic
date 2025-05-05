import React from "react";

const Payment = ({ next }) => {
  return (
    <div className="w-80 bg-white rounded-2xl p-4 shadow-lg text-sm">
      <h2 className="text-center font-bold text-lg mb-4">Payment</h2>
      <input className="w-full p-2 border rounded mb-2" placeholder="Cardholder Name" />
      <input className="w-full p-2 border rounded mb-2" placeholder="Card Number" />
      <div className="flex gap-2 mb-2">
        <input className="w-1/2 p-2 border rounded" placeholder="MM/YY" />
        <input className="w-1/2 p-2 border rounded" placeholder="CVV" />
      </div>
      <div className="flex items-center mb-2">
        <input type="checkbox" className="mr-2" /> Remember this card
      </div>
      <div className="flex items-center mb-4">
        <input type="checkbox" className="mr-2" /> Send receipt to my email
      </div>
      <div className="text-right mb-2">Amount Payable: <span className="text-red-500 font-semibold">$34</span></div>
      <button
        onClick={next}
        className="w-full bg-orange-500 text-white py-2 rounded-xl"
      >
        Pay Now
      </button>
    </div>
  );
};

export default Payment;