import React from 'react';

function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('sbg.jpg')" }}>
      <div className="bg-white bg-opacity-20 backdrop-blur-lg p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold mb-6 text-center text-black">Sign Up</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="username" className="block mb-2 text-sm font-medium text-white">Username</label>
            <input
              type="text"
              id="username"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              placeholder="Enter your username"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Password</label>
            <input
              type="password"
              id="password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              placeholder="Enter your password"
              required
            />
          </div>
          <div>
            <label htmlFor="age" className="block mb-2 text-sm font-medium text-white">Age</label>
            <input
              type="number"
              id="age"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              placeholder="Enter your age"
              required
            />
          </div>
          <div>
            <label htmlFor="blood-group" className="block mb-2 text-sm font-medium text-white">Blood Group</label>
            <select
              id="blood-group"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              required
            >
              <option value="" disabled selected>Select your blood group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
