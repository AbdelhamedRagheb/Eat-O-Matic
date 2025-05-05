import React from "react";

const Summary = ({ next }) => {
  return (
    <div className="w-80 bg-white rounded-2xl p-4 shadow-lg text-sm">
      <h2 className="text-center font-bold text-lg mb-4">Summary</h2>
      <ul className="space-y-1">
        <li>Veg Burger - $8.89</li>
        <li>Garlic Bread - $6.67</li>
        <li>Farmer’s Pizza - $10.00</li>
        <li>Pepsi - $4.69</li>
        <li>Subtotal: $16.59</li>
        <li>Service Fee: $2.31</li>
        <li className="font-bold">Total: $34</li>
      </ul>
      <div className="mt-4 text-right">
        <div>Total Price: <span className="text-red-500 font-semibold">$34</span></div>
        <div>Delivery Time: <span className="text-orange-500 font-semibold">27mins</span></div>
      </div>
      <button
        onClick={next}
        className="w-full bg-orange-500 mt-4 text-white py-2 rounded-xl"
      >
        Pay Now
      </button>
    </div>
  );
};

export default Summary;