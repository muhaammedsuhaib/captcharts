import React from 'react';
import banner from '../assets/explorebanner.png';

const Explore = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center lg:items-start bg-gray-50">

      {/* Left Section */}
      <div className="w-full lg:w-2/3 flex flex-col h-[500px] items-start bg-[#C08C5D] space-y-6 p-8 sm:p-10 md:p-16 lg:p-20">
        <h2 className="text-8xl font-bold text-white opacity-25 ">
          01
        </h2>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
          Lorem Ipsum is simply dummy text of the printing
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-100 leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/3 relative flex items-center justify-center overflow-hidden">
        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-start justify-start text-start p-6 sm:p-8 lg:p-10 z-10">
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-start lg:text-right drop-shadow-md">
            Explore the <br /> Program
          </p>
        </div>
        {/* Background Image */}
        <img src={banner} alt="Explore Program" className="w-full h-[500px] object-cover" />
      </div>
    </div>
  );
};

export default Explore;
