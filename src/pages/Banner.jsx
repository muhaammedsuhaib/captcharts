import React from "react";
import banner from "../assets/banner.png";
import { BiLogInCircle } from "react-icons/bi";

const Banner = () => {
  return (
    <div className="relative w-full h-full">
      <img
        src={banner}
        alt="Banner"
        className="w-full h-auto object-cover"
      />

      <div className="absolute inset-0 flex flex-col justify-end items-start text-white px-6 md:px-16 lg:px-28 bg-gradient-to-t from-black/70 via-transparent to-transparent">
        <h1 className="text-1xl sm:text-1xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 md:mb-6 lg:mb-8 leading-snug">
          Capture Your Imagination <br /> with{" "}
          <span
            className="text-1xl sm:text-1xl md:text-2xl lg:text-3xl xl:text-4xl font-light"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: "500",
              lineHeight: "1.2",
              color: "#333",
              textShadow:
                "-1px -1px 0 #CF796C, 1px -1px 0 #CF796C, -1px 1px 0 #CF796C, 1px 1px 0 #CF796C",
            }}
          >
            Captcharts
          </span>
        </h1>
        <button className="flex items-center gap-2  text-lg font-medium mb-14 text-white">
          Explore
          <BiLogInCircle size={28} />
        </button>
      </div>
    </div>
  );
};

export default Banner;
