import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white bg-opacity-50 shadow-md fixed w-full z-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#home" className="text-2xl lg:ml-20 font-bold text-gray-800">Hospital</a>
          </div>
          <div className="hidden md:block">
            <ul className="flex lg:space-x-12 text-lg lg:mr-20">
              <li><a href="#home" className="text-gray-800 hover:text-gray-600">Home</a></li>
              <li><a href="#about" className="text-gray-800 hover:text-gray-600">About</a></li>
              <li><a href="#services" className="text-gray-800 hover:text-gray-600">Services</a></li>
              <li><a href="#contact" className="text-gray-800 hover:text-gray-600">Contact</a></li>
              <li><a href="#testimonials" className="text-gray-800 hover:text-gray-600">Testimonials</a></li>
       
            </ul>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <li><a href="#home" className="block text-gray-800 hover:bg-gray-200 rounded-md px-3 py-2">Home</a></li>
          <li><a href="#about" className="block text-gray-800 hover:bg-gray-200 rounded-md px-3 py-2">About</a></li>
          <li><a href="#services" className="block text-gray-800 hover:bg-gray-200 rounded-md px-3 py-2">Services</a></li>
          <li><a href="#testimonials" className="block text-gray-800 hover:bg-gray-200 rounded-md px-3 py-2">Testimonials</a></li>
          <li><a href="#contact" className="block text-gray-800 hover:bg-gray-200 rounded-md px-3 py-2">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
