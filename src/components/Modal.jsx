import React from 'react';
import { FaTimes } from 'react-icons/fa';


const Modal= ({ children,onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-screen h-screen bg-black bg-opacity-50 p-4 md:p-8 transition-opacity duration-300 ease-in-out">
      <div
        className="relative w-full max-w-2xl md:max-w-3xl lg:max-w-2xl rounded-lg shadow-lg p-6 md:p-8 lg:p-10 overflow-auto bg-[#FFFFFF] text-[#333333]"
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
          onClick={onClose}
          aria-label="Close Profile"
        >
          <FaTimes className="text-2xl" />
        </button>
        
        <div className="max-h-[70vh] overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
