import React from 'react';
import event1 from '../assets/event1.png';
import event2 from '../assets/event2.png';
import event3 from '../assets/event3.png';

const Event = () => {
  return (
    <div className="w-full py-12 bg-white">
      <div className="max-w-screen-xl mx-auto px-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-start text-gray-800 mb-8">
          Events
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {/* Event Card 1 */}
          <div className="group flex flex-col items-center">
            <img src={event1} alt="Event 1" className="w-full  object-cover mb-4" />
            <p className="text-gray-700 text-start group-hover:text-gray-900 transition-colors duration-200">
              Lorem Ipsum is simply dummy text of the printing
            </p>
          </div>

          {/* Event Card 2 */}
          <div className="group flex flex-col items-center">
            <img src={event2} alt="Event 2" className="w-full  object-cover mb-4" />
            <p className="text-gray-700 text-start group-hover:text-gray-900 transition-colors duration-200">
              Lorem Ipsum is simply dummy text of the printing
            </p>
          </div>

          {/* Event Card 3 */}
          <div className="group flex flex-col items-center ">
            <img src={event3} alt="Event 3" className="w-full  object-cover mb-4" />
            <p className="text-gray-700 text-start group-hover:text-gray-900 ">
              Lorem Ipsum is simply dummy text of the printing
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
