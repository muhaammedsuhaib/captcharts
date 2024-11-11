import React from 'react';
import { IoMdQuote } from 'react-icons/io';

const Introduction = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center lg:items-start bg-gray-50 p-6 sm:p-8 lg:p-12">
      <div className="w-full lg:w-1/3 h-[300px] grid place-content-center">
        <h1 className="text-[#C08C5D] text-xl sm:text-3xl lg:text-5xl font-semibold text-center lg:text-left leading-snug ml-10">
          Lorem Ipsum is simply dummy text of the printing
        </h1>
      </div>

      <div className="w-full lg:w-2/3 flex flex-col items-start text-gray-800 px-4 lg:px-8">
        <span className="self-start mb-4">
          <IoMdQuote className="text-4xl lg:text-5xl text-[#C08C5D]" />
        </span>
        <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-center lg:text-left">
          Hey there! I’m Megha Mohan, a 16-year-old UAE-based enthusiast with a passion for photography and astrophysics.
          Whether I’m diving into the world of photography or exploring the latest news on dark matter, you can bet I’m always
          up for an adventure. On this webpage, I’m sharing my thoughts, experiences, and maybe a sprinkle of my insights on photography.
          <br />
          When I’m not lost in the virtual world or buried in my favorite books, you can catch me hanging out with my camera and telescope,
          tackling the latest challenges, and trying my hands at astrophotography. So, buckle up, join me on this digital escapade,
          and let’s navigate the world of photography together.
        </p>
        <span className="self-end mt-4">
          <IoMdQuote className="text-4xl lg:text-5xl text-[#C08C5D]" />
        </span>
        <h2 className="mt-4 text-xl font-semibold text-center lg:text-left">MEGHA MOHAN</h2>
      </div>
    </div>
  );
};

export default Introduction;
