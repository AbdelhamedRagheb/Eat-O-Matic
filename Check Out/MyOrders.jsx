import React from "react";

const MyOrders = ({ next }) => {
  return (
    <div className="w-80 bg-white rounded-2xl p-4 shadow-lg text-sm">
      <h2 className="text-center font-bold text-lg mb-4">My Orders</h2>
      <div className="space-y-2">
        {[
          { name: "Veg Burger", price: 8.89 },
          { name: "Garlic Bread", price: 6.67 },
          { name: "Farmer’s Pizza", price: 10.00 },
          { name: "Pepsi", price: 4.69 },
        ].map((item) => (
          <div className="flex justify-between items-center border p-2 rounded-lg" key={item.name}>
            <div>{item.name}</div>
            <div>${item.price.toFixed(2)}</div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-right">
        <div>Total Price: <span className="text-red-500 font-semibold">$31.69</span></div>
        <div>Delivery Time: <span className="text-orange-500 font-semibold">27mins</span></div>
      </div>
      <button
        onClick={next}
        className="w-full bg-orange-500 mt-4 text-white py-2 rounded-xl"
      >
        Order Now
      </button>
    </div>
  );
};

export default MyOrders;