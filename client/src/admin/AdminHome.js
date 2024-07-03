import React, { useState } from 'react';
import Sidebar from "./components/global/Sidebar";
import Dash from "./components/global/Dash";

export default function AdminHome(){
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

    return(
        <div className="app">
          <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
          <main className={`content transition-all duration-300 ${isOpen ? 'ml-64' : 'ml-16'}`}>
          <h2 className="p-6 text-3xl font-bold">DASHBOARD</h2>
            <Dash />
          </main>
        </div>
    );
}