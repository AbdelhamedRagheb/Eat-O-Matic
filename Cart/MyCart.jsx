import React from 'react';

const MyCart = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-3xl w-80 mx-auto font-sans">
      <h2 className="text-center text-orange-600 text-xl mb-5">My Cart</h2>

      <div className="flex items-center bg-white rounded-lg p-4 mb-4">
        <img
          src="/images/burger.png"
          alt="Burger"
          className="w-12 h-12 mr-4"
        />
        <div className="flex-grow">
          <p>$60</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-2 py-1 bg-gray-300 rounded">-</button>
          <span>1</span>
          <button className="px-2 py-1 bg-gray-300 rounded">+</button>
        </div>
      </div>

      <div className="flex justify-between my-4">
        <span>Offers</span>
        <a href="#" className="text-orange-500">Add code</a>
      </div>

      <div className="bg-white p-4 rounded-lg mb-4">
        <p><b>Order summary</b></p>
        <p className="flex justify-between">
          Order <span>$60</span>
        </p>
        <p className="flex justify-between">
          Delivery <span>$6</span>
        </p>
        <p className="flex justify-between font-bold">
          Total <span>$66</span>
        </p>
      </div>

      <div className="bg-white p-4 rounded-lg mb-4">
        <p><b>Address</b></p>
        <p>TD53, Kaya...</p>
      </div>

      <button className="w-full bg-orange-600 text-white py-3 rounded-xl text-lg">Check Out</button>
    </div>
  );
};

export default MyCart;
