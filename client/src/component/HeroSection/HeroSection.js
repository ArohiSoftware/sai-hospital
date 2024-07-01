import React from 'react';

function HeroSection() {
  return (
    <div className="flex items-center justify-between bg-gray-100 p-8">
      <div className="w-1/2 p-8">
        <h1 className="text-xl font-bold text-green-800">Welcome to PointLab</h1>
        <p className=" text-6xl  font-bold">
          <p>We’ll Ensure You</p>  <p>Always Get The </p><p>Best Result.</p>
        </p>
        <p className='text-lg mt-8'>Lacinia in netus vel a, scelerisque mauris quis et, purus blandit sapien, pharetra, viverra volutpat risus non tortor, cras egestas et maecenas facilisi imperdiet quam fringilla dui mauris enim, nec arcu, interdum sit nisi est facilisi sodales viverra proin et.</p>
        <button className="mt-8 px-4 py-2 bg-blue-500 text-white rounded-lg">
          Make An Appointment
        </button>
      </div>
      <div className="w-1/2 p-8 mt-10">
        <img 
          src="https://websitedemos.net/diagnostics-lab-02/wp-content/uploads/sites/662/2020/08/diagnostic-lab-hero-img.jpg" 
          alt="Diagnostic Lab" 
          className="w-[600px] h-[700px] rounded-lg"
         
        />
      </div>
    </div>
  );
}

export default HeroSection;
