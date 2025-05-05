import React from "react";

const Confirmation = () => {
  return (
    <div className="w-80 bg-white rounded-2xl p-4 shadow-lg text-sm text-center">
      <div className="text-5xl text-orange-500 my-4">✔️</div>
      <h2 className="font-bold text-lg mb-2">Confirmed</h2>
      <div className="text-left text-xs border rounded-lg p-2 bg-gray-50 mb-4">
        <p>Order No: 1456224564822</p>
        <p>Total: $34.00</p>
        <p>Date & Time: 09/01/2023 - 22:19</p>
        <p>Payment: PayTM</p>
        <p>Review: 4.8 ★</p>
        <p>Email: azizullah.s@eat.com</p>
      </div>
      <p className="mb-4 text-xs">A receipt will be sent to your email.</p>
      <button className="w-full bg-orange-500 text-white py-2 rounded-xl mb-2">
        Review
      </button>
      <button className="w-full bg-gray-300 text-black py-2 rounded-xl">
        Done
      </button>
    </div>
  );
};

export default Confirmation;