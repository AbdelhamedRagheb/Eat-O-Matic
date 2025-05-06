import React from 'react';
import { FaStar } from 'react-icons/fa';

export default function Rating({ stars = 5, reviews = 1788 }) {
  return (
    <div className="flex flex-col items-start space-y-2">
      
      <div className="flex space-x-1">
        {Array.from({ length: stars }).map((_, i) => (
          <FaStar key={i} className="text-yellow-400 w-5 h-5" />
        ))}
      </div>
      
      <div className="text-left">
        <p className="text-sm font-semibold">{stars} star rating</p>
        <p className="text-xs text-gray-500">based on {reviews} reviews</p>
      </div>
    </div>
  );
}
