import React from "react";
import Logo from "./logo.png";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-8">
      <div className="container mx-auto flex flex-wrap">
        <div className="w-full md:w-1/4 p-4 flex flex-col items-start">
          <img src={Logo} alt="Sai Hospital Logo" className="mb-4 w-60 h-auto" />
       
        </div>
        <div className="w-full md:w-1/4 p-4">
          <h3 className="font-bold mb-4 text-2xl">Our Main Services</h3>
          <ul className="text-lg text-gray-700">
            <li>Sample Preparations</li>
            <li>Healthcare Labs</li>
            <li>Advanced Microscopy</li>
            <li>Chemical Research</li>
            <li>Pathology Testing</li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 p-4">
          <h3 className="font-bold mb-4 text-2xl">Useful Links</h3>
          <ul className="text-lg">
            <li>
              <a href="#" className="text-gray-700 hover:text-green-500">About Us</a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-green-500">Contact Us</a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-green-500">Meet Our Team</a>
            </li>
            <li>
              <a href="#" className=" text-gray-700 hover:text-green-500">Our Services</a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 p-4">
          <h3 className="font-bold mb-4 text-2xl">Contact</h3>
          <p className="text-gray-700">Your contact details here</p>
          <p className="text-lg text-gray-700">
            <span className="block">Sai Multispeciality Hospital</span>
            <span className="block">Sai Nivas, Shrigonda, Ahmednagar, India</span>
            <span className="block">Email: <a href="mailto:saihospital@gmail.com" className="text-gray-500 hover:text-green-500">saihospital@gmail.com</a></span>
          </p>
        </div>
      </div>
      <div className="text-center py-4 border-t border-gray-300">
        <p className="text-xl">© 2024 Sai Hospital. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
