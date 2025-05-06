import React, { useEffect, useState } from 'react';
import style from './AboutIntro.module.css';

export default function AboutIntro() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // Placeholder for any logic you want to add
  }, []);

  return (
    <section
      className="relative bg-cover bg-center rounded-3xl overflow-hidden mx-auto my-8 max-w-5xl"
      style={{
        backgroundImage: "url('./src/assets/About.jpg')",
      }}
    >
      <div className="bg-black bg-opacity-60 p-10 text-center text-white">
        <h2 className="text-4xl font-bold mb-6 leading-snug">
          Get Our Promo Code by <br /> Subscribing to our Restaurant
        </h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mt-4 relative">
          <div className="relative">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-8 py-4 rounded-full text-black w-72 shadow-md focus:outline-none focus:ring-2 focus:ring-orange-500 pr-16 "
            />
            <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 shadow-md transition duration-300 absolute right-0 top-0 bottom-0 my-auto mx-2 mt-2 mb-2 flex justify-center items-center">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}






