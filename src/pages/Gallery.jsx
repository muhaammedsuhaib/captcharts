import React from 'react';
import photo1 from '../assets/gallery1.png';
import photo2 from '../assets/gallery2.png';
import photo3 from '../assets/gallery3.png';
import photo4 from '../assets/gallery4.png';
import photo5 from '../assets/gallery5.png';

const Gallery = () => {
  return (
    <div className="w-full py-12 bg-[#FFFFFF]">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Title and Description */}
        <h1 className="text-3xl sm:text-4xl font-bold text-start text-gray-800 mb-2 p-2">
          Gallery
        </h1>
        <p className="text-lg sm:text-xl text-start text-gray-600 mb-5 p-2">
          Lorem Ipsum is simply dummy text <br /> of the printing
        </p>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-0">
          <div className="flex flex-col gap-0">
            <img src={photo1} alt="Gallery Image 1" className="w-full h-auto object-cover" />
            <img src={photo2} alt="Gallery Image 2" className="w-full h-auto object-cover" />
          </div>
          <div className="flex items-center justify-center">
            <img src={photo3} alt="Gallery Image 3" className="w-full h-auto object-cover" />
          </div>
          <div className="flex flex-col gap-0">
            <img src={photo4} alt="Gallery Image 4" className="w-full h-auto object-cover" />
            <img src={photo5} alt="Gallery Image 5" className="w-full h-auto object-cover" />
          </div>
        </div>

        {/* Placeholder Boxes */}
        <div className="w-full flex flex-col sm:flex-row gap-6 mt-8">
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 h-[248px] bg-[#F3F3F3] rounded-2xl"></div>
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 h-[248px] bg-[#F3F3F3] rounded-2xl"></div>
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 h-[248px] bg-[#F3F3F3] rounded-2xl"></div>
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 h-[248px] bg-[#F3F3F3] rounded-2xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
