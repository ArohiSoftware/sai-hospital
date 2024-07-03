/*import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const [isSignup, setIsSignup] = useState(true);
  const history = useHistory();

  const handleTabSwitch = (tab) => {
    if (tab === 'signIn') {
      history.push('/login'); // Adjust this path according to your router setup
    } else {
      setIsSignup(true);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg flex max-w-4xl p-0 overflow-hidden">
        <div className="hidden md:flex items-center justify-center w-1/2 bg-gradient-to-br from-blue-500 to-purple-500 relative">
          <div className="text-center p-10">
            <img src="path-to-your-image.jpg" alt="Medical Professional" className="rounded-full w-48 mx-auto" />
            <h2 className="text-white text-2xl mt-4">My Discounted Labs</h2>
          </div>
        </div>
        <div className="flex flex-col justify-center w-full md:w-1/2 p-8">
          <div className="flex justify-center mb-6">
            <button
              className={px-4 py-2 mx-2 font-bold ${isSignup ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'}}
              onClick={() => handleTabSwitch('signup')}
            >
              Sign Up
            </button>
            <button
              className={px-4 py-2 mx-2 font-bold ${!isSignup ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'}}
              onClick={() => handleTabSwitch('signIn')}
            >
              Sign In
            </button>
          </div>
          {isSignup ? (
            <>
              <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">Sign Up</h2>
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
                    Full Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="fullName"
                    type="text"
                    placeholder="Full Name"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Password
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="Password"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
              <p className="text-center text-gray-500 text-xs mt-6">
                &copy;2024 My Discounted Labs. All rights reserved.
              </p>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Signup;*/
import React from "react";

function Signup() {
  return <div></div>;
}

export default Signup;