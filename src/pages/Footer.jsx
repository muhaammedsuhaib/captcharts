import React from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import brandimage from '../assets/footerimge.png'

const Footer = () => {
  return (
    // <div className="flex justify-center p-5">
    //   <div className="w-full rounded-lg overflow-auto bg-[#6b4b4b] text-[#333333] p-6">
    //     <img src={brandimage} alt="" />
        // <h1 className="text-center text-white">Let’s Connect!</h1>
        // <p className="text-center text-white mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        
        // <div className="flex justify-center items-center gap-0 mb-4">
        //   <input
        //     type="text"
        //     className="p-2 w-50 rounded-md border border-[#333333] text-black"
        //     placeholder="Your message"
        //   />
        //   <button
        //     className="px-4 py-2 rounded-md bg-[#C08C5D] text-white hover:bg-[#A67D2D] transition"
        //     type="button"
        //   >
        //     Send
        //   </button>
        // </div>

    //     <div className="text-center mt-4 relative ml-[1100px] ">
    //       <FaArrowCircleUp className="text-white text-3xl cursor-pointer hover:text-[#FFD700]"  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
    //     </div>
    //   </div>
    // </div>
    <div className="w-full h-full flex inset-0 top-6 relative rounded-xl gap-3 bg-[#C08C5D]"> 
    <div className="w-full ">
        <img src={brandimage} alt="" className='w-auto h-52 relative' />
    </div>
    <div className="w-full">
    <h1 className="text-center text-white">Let’s Connect!</h1>
        <p className="text-center text-white mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        
        <div className="flex justify-center items-center gap-0 mb-4">
          <input
            type="text"
            className="p-2 w-50 rounded-md border border-[#333333] text-black"
            placeholder="Your message"
          />
          <button
            className="px-4 py-2 rounded-md bg-[#C08C5D] text-white hover:bg-[#A67D2D] transition"
            type="button"
          >
            Send
          </button>
        </div>
    </div>
    <div className="w-full bg-black h-7"></div>
    </div>
  );
};

export default Footer;
