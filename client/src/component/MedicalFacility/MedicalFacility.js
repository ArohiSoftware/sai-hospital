import React from "react";
import Imgages from './opd.jpg'

function MedicalFacility() {
  return (
    <div className='w-full h-screen bg-white mt-20'>
            <div className='w-[85%] mx-auto flex flex-row rounded-lg relative'>
                <div className='w-[50%] bg-green-600 '>
                    <img src={Imgages} alt="myImages" className='z-0 h-[100%]' />
                </div>
                <div className='absolute z-10 w-[300px] bottom-0 right-[50%] bg-green-500 p-8 text-white'>
                    <h2 className='text-[1.7rem] font-semibold'>Our main Service</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex assumenda ipsam animi neque porro dolorum doloribus odit sequi accusantium maxime.</p>
                    <div className='mt-14'>
                        <a href="" className=' text-white'>learn more</a>
                    </div>
                </div>
                <div className='w-[50%] bg-red-400 flex flex-col'>
                    <div className='flex flex-row'>
                        <div className='text-black p-6 bg-white'>
                            <h2 className='text-[1.7rem] font-semibold'>Our Facilities</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex assumenda ipsam animi neque porro dolorum doloribus odit sequi accusantium maxime.</p>
                            <div className='mt-14'>
                                <a href="" className=' text-black'>learn more</a>
                            </div>
                        </div>
                        <div className='text-white bg-green-500 p-7'>
                            <h2 className='text-[1.7rem] font-semibold'>Our Location</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex assumenda ipsam animi neque porro dolorum doloribus odit sequi accusantium maxime.</p>
                            <div className='mt-14'>
                                <a href="" className=' text-white'>Get Direction</a>
                            </div>
                        </div>
                    </div>
                    <div className='p-7 bg-blue-700 text-white'>
                        <h2 className='text-[1.7rem] font-semibold'>Make an appointment</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore consequuntur nostrum corporis a aliquid voluptates, asperiores commodi mollitia delectus, nobis eum cum excepturi error assumenda dignissimos, dolor quo molestias illum.</p>
                        <div className='flex flex-row gap-7 mt-6'>
                            <button className='border-[2px] border-white bg-transparent hover:bg-transparent px-8 py-2'>Start Now</button>
                            <div className='w-[1px] bg-white'></div>
                            <div className='pl-6'>
                                <p>Book an appointment</p>
                                <p className='text-[1.4rem]'>+09876543</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default MedicalFacility;
