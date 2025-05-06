import React from 'react';
import { Link } from 'react-router-dom';
import { FaUtensils, FaRobot } from 'react-icons/fa';

export default function ActionButtons({ onAsk }) {
  return (
    <div className="flex space-x-4">
      
      <Link
        to="/menu"
        className="flex items-center space-x-2 px-12 border-2 border-orange-500 text-orange-500 rounded-full font-semibold uppercase hover:bg-orange-500 hover:text-white shadow-md hover:shadow-lg transition"
      >
        <FaUtensils className="w-5 h-5" />
        <span>Menu</span>
      </Link>

      
      <button
        onClick={onAsk}
        className="flex items-center space-x-2 px-12 bg-orange-100 text-black rounded-full font-semibold uppercase hover:bg-orange-200 shadow-md hover:shadow-lg transition"
      >
        <FaRobot className="w-5 h-5" />
        <span>Ask AI</span>
      </button>
    </div>
  );
}









