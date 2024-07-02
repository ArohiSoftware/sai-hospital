import React from "react";

function HeroSection() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-gray-100 p-8">
      <div className="w-full md:w-1/2 p-8">
        <h1 className="text-xl font-bold text-green-800">
          Welcome to Sai Hospital
        </h1>
        <div className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight  ">
          <p>We’ll Ensure You</p>
          <p>Always Get The</p>
          <p>Best Result.</p>
        </div>
        <p className="text-lg mt-6 md:mt-8">
          Welcome to Sai Multispeciality Hospital in Shrigonda, Ahmednagar, the
          original and largest Sai Multispeciality Hospital campus. Located in
          the heart of Shrigonda, Ahmednagar — a dynamic city just 90 minutes
          East of Pune, Sai Multispeciality Hospital has been safely
          caring for patients from around the world for more than 10 years.
          <span className="block text-green-500 font-semibold mt-2">
            Sai Multispeciality Hospital will always be your safe care destination.
          </span>
        </p>
        <button className="mt-6 md:mt-8 px-4 py-3 font-bold text-lg md:text-xl bg-blue-500 text-white rounded-lg">
          Make An Appointment
        </button>
      </div>
      <div className="w-full md:w-1/2 p-8 mt-10 md:mt-0 flex justify-center">
        <img
          src="https://websitedemos.net/diagnostics-lab-02/wp-content/uploads/sites/662/2020/08/diagnostic-lab-hero-img.jpg"
          alt="Diagnostic Lab"
          className="w-full md:w-[600px] h-auto rounded-lg"
        />
      </div>
    </div>
  );
}

export default HeroSection;
