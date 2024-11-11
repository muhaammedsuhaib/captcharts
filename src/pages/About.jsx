import React from "react";
import banner from "../assets/aboutbanner.png";

const About = () => {
  return (
    <div className="w-full h-full flex flex-col items-center p-6 sm:p-8 md:p-12 lg:p-16 bg-gray-50">
      {/* About Header */}
      <div className="w-full text-start ml-6 md:ml-10 lg:ml-28 mb-6">
        <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-gray-800">
          About
        </h1>
      </div>

      {/* Captcharts Box */}
      <div className="w-[350px] bg-[#CF796C] p-2  text-end self-start mr-20 md:ml-10 lg:mr-32 mb-6">
        <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl text-white font-bold ">
          Captcharts
        </h1>
      </div>

      {/* Introduction Paragraph */}
      <p className="text-base sm:text-xl md:text-xl lg:text-lg text-gray-700 leading-relaxed text-start max-w-5xl mx-auto px-4 mb-6">
        Welcome to the world of limitless creativity and boundless
        possibilities! Imagine a photography camp where the shutter captures not
        just moments, but the spirit of determination and resilience.
        <br />
        <br />
        We're thrilled to present a unique experience tailored for students with
        determination, where the focus is not just on framing a shot, but on
        framing a brighter future.
        <br />
        <br />
        In the heart of this camp, we celebrate the power of visual storytelling
        as a means of empowerment. Our goal is to provide a supportive and
        inclusive environment for young photographers who navigate the world
        with determination. Through the lens of a camera, we embark on a journey
        that transcends barriers and amplifies the voices that often go unheard.
      </p>

      {/* Banner Image */}
      <div className="w-full max-w-5xl mt-4 mb-4 p-4">
        <img
          src={banner}
          alt="About Banner"
          className="w-full h-auto object-cover shadow-md"
        />
      </div>

      {/* Closing Paragraph */}
      <p className="text-base sm:text-xl md:text-xl lg:text-lg text-gray-700 leading-relaxed text-start max-w-5xl mx-auto px-4">
        This camp isn't just about technical skills. It's about unlocking
        individual potential, fostering self-expression, and building a
        community where everyone's unique perspective is not only welcomed but
        celebrated.
        <br />
        <br />
        This isn't just a photography camp; it's a kaleidoscope of inspiration,
        where each participant adds their own vibrant hue to the canvas of
        creativity. So, whether you're a novice or a seasoned photographer, come
        join us in capturing the extraordinary essence of determination through
        the lens of your camera. Let's embark on a journey where every snapshot
        is a testament to the willful spirit within us all.
      </p>
    </div>
  );
};

export default About;
