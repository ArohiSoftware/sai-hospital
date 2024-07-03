import React, { useState } from 'react';
import { FaBars, FaHome, FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa';

export default function Sidebar({ toggleSidebar,isOpen }){
  

  return (
    <div className={`flex flex-col h-screen bg-gray-800 ${isOpen ? 'w-64' : 'w-16'} transition-width duration-300 fixed`}>
      <div className="flex items-center justify-between text-white p-4">
        {isOpen && <span className="text-xl">Admin</span>}
        <FaBars className="cursor-pointer" onClick={toggleSidebar} />
      </div>
      <ul className="flex flex-col text-gray-300">
        <li className="flex items-center p-4 hover:bg-gray-700 cursor-pointer">
          <FaHome />
          {isOpen && <span className="ml-4">Home</span>}
        </li>
        <li className="flex items-center p-4 hover:bg-gray-700 cursor-pointer">
          <FaUser />
          {isOpen && <span className="ml-4">Profile</span>}
        </li>
        <li className="flex items-center p-4 hover:bg-gray-700 cursor-pointer">
          <FaCog />
          {isOpen && <span className="ml-4">Settings</span>}
        </li>
        <li className="flex items-center p-4 hover:bg-gray-700 cursor-pointer">
          <FaSignOutAlt />
          {isOpen && <span className="ml-4">Logout</span>}
        </li>
      </ul>
    </div>
  );
};

