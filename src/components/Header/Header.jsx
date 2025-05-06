import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // استيراد useLocation
import { FaSearch } from 'react-icons/fa';

export default function Header() {
  const [query, setQuery] = useState('');
  const location = useLocation(); // الحصول على الموقع الحالي

  // التحقق من الصفحة الحالية
  const isHomePage = location.pathname === '/';
  const isAboutPage = location.pathname === '/about';

  return (
    <header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-4">
      <div className="text-3xl font-bold text-orange-600">
        Eat_<span className="text-orange-600">O_Matic</span>
        <div className="text-sm font-normal text-gray-600">
          Delicious Food, Delivered Fast
        </div>
      </div>

      <nav className="flex flex-wrap gap-8 items-center text-lg">
        <Link
          to="/"
          className={`px-3 py-1 rounded-full ${isHomePage ? 'bg-orange-500 text-white' : 'text-orange-600 hover:bg-orange-500'} transition-colors`}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`hover:text-orange-600 transition-colors ${isAboutPage ? 'bg-orange-500 text-white px-3 py-1 rounded-full' : ''}`} // تغيير اللون والخلفية فقط للرابط About
        >
          About
        </Link>
        <a
          href="#"
          className="hover:text-orange-600 transition-colors"
        >
          Menu
        </a>
        <a
          href="#"
          className="hover:text-orange-600 transition-colors"
        >
          Cart
        </a>
        <a
          href="#"
          className="hover:text-orange-600 transition-colors"
        >
          Login/Sign Up
        </a>

        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search"
            className="pl-4 pr-10 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <button
            onClick={() => console.log('Searching for:', query)}
            className="absolute right-1 top-1/2 transform -translate-y-1/2 p-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            <FaSearch />
          </button>
        </div>
      </nav>
    </header>
  );
}





