import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div className="flex items-center mx-8">
          <span className="font-bold text-2xl text-blue-800">accredian</span>
        </div>
        <div className="hidden font-semibold mx-8 my-1 text-lg md:flex space-x-16">
          <a href="/" className="text-gray-600 py-1 hover:text-blue-600">Refer & Earn</a>
          <a href="/" className="text-gray-600 py-1 hover:text-blue-600">Resources</a>
          <a href="/" className="text-gray-600 py-1 hover:text-blue-600">About Us</a>
          <button className="text-gray-600 hover:text-blue-600">Login</button>
          <button className="bg-blue-600 text-white py-1 px-4 rounded hover:bg-blue-700">Try for free</button>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-600 hover:text-blue-600 focus:outline-none">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <a href="/" className="block px-4 py-2 text-gray-600 hover:text-blue-600">Refer & Earn</a>
          <a href="/" className="block px-4 py-2 text-gray-600 hover:text-blue-600">Resources</a>
          <a href="/" className="block px-4 py-2 text-gray-600 hover:text-blue-600">About Us</a>
          <button className="block px-4 py-2 text-gray-600 hover:text-blue-600">Login</button>
          <button className="block w-full text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Try for free</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
