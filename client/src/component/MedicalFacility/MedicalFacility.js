import React from 'react';

function MedicalFacility() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div
        className="relative w-4/5 h-[80vh] bg-cover bg-center flex flex-col justify-center items-center"
        style={{ backgroundImage: 'url(https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQaRRECLSh8YqzuZi-8pljq5R7pvBoMX1RNoefTyoHzISUs6JqC)' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div> {/* Overlay to darken the background image */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-red-500 text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-2">Card 1</h3>
            <p className="text-lg">This is some text inside card 1.</p>
          </div>
          <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-2">Card 2</h3>
            <p className="text-lg">This is some text inside card 2.</p>
          </div>
          <div className="bg-green-500 text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-2">Card 3</h3>
            <p className="text-lg">This is some text inside card 3.</p>
          </div>
          <div className="bg-yellow-500 text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-2">Card 4</h3>
            <p className="text-lg">This is some text inside card 4.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MedicalFacility;
