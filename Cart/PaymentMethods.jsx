import React from 'react';

const PaymentMethods = () => {
  return (
    <div className="bg-gray-100 p-8 rounded-3xl w-80 mx-auto font-sans">
      <h2 className="text-center text-orange-600 text-xl mb-5">Payment Methods</h2>

      <div className="flex flex-col gap-4">
        {/* Payment Options */}
        <div className="bg-white p-4 rounded-lg border border-gray-300">
          <div className="py-2 text-center">UPI</div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-300">
          <div className="py-2 text-center">Debit Cards</div>
        </div>

        {/* Credit Section */}
        <div className="bg-white p-4 rounded-lg border border-gray-300">
          <p className="font-bold mb-2">Credit Cards</p>
          <div className="bg-gray-200 p-2 mb-2 rounded-md">🔘 Axis Bank xxxx68</div>
          <div className="bg-gray-200 p-2 mb-2 rounded-md">🔘 VYX Bank xxxx54</div>
          <button className="w-full py-2 mt-2 bg-white text-orange-600 border border-orange-600 rounded-xl font-bold">
            Add New Card
          </button>
        </div>

        {/* Add New Payment Method Button */}
        <button className="w-full py-2 bg-white text-orange-600 border border-orange-600 rounded-xl font-bold">
          ➕ Add new method
        </button>

        {/* Pay Now Button */}
        <button className="w-full py-3 bg-orange-600 text-white rounded-xl text-lg font-bold">
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default PaymentMethods;

