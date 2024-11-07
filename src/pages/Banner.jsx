import React from 'react';
import banner from '../assets/banner.png';

const Banner = () => {
  return (
    <div className="relative w-full h-full">
      <img
        src={banner}
        alt="A promotional banner showcasing the website"
        className="w-full h-auto object-cover"
      />

      <div className="absolute inset-0 flex flex-col justify-end items-start text-start text-white px-4 md:px-16 lg:px-28">
        <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold  md:mb-24 ">
          Capture Your Imagination <br /> with {' '}
          <span
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: '500',
              lineHeight: '52px',
              color: '#333',
              textShadow: `-1px -1px 0 #CF796C, 1px -1px 0 #CF796C, -1px 1px 0 #CF796C, 1px 1px 0 #CF796C`,
            }}
          >
             Captcharts
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Banner;
