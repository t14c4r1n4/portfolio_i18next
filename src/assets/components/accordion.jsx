import React, { useState } from 'react';
import careerEvents from '../constants/experience';

const TimelineAccordion = () => {
  const accordionData = careerEvents;
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="accordion">
      {accordionData.map((e, index) => (
        <li
          key={index}
          className={`accordion-title ${activeIndex === index ? 'active' : ''}`}
          onClick={() => setActiveIndex(activeIndex === index ? null : index)}
        >      
        <div className="md:flex flex-start">
        <div className="bg-zinc-900 w-8 h-8 flex items-center justify-center rounded-full -ml-4 ">
          <img
            className="hover:scale-150"
            height={40}
            src={e.icon}
            alt={e.company}
          />
        </div>
      </div>
      <div className="block p-6 rounded-lg shadow-lg glass max-w-md ml-6 mb-10">
        <div className="flex justify-between mb-4">
          <button
            className="font-medium text-cyan-600 hover:text-cyan-700 focus:text-cyan-800 duration-300 transition ease-in-out text-sm"
          >
            {e.company}, {e.location}
          </button>
          <button
            to="#"
            className="font-medium text-cyan-600 hover:text-cyan-700 focus:text-cyan-800 duration-300 transition ease-in-out text-sm"
          >
            {e.date}
          </button>
        </div>
      </div>
          <div>{title}</div>
          <div>{activeIndex === index ? '-' : '+'}</div>
          {activeIndex === index && (
            <div key={`content-${index}`} className="accordion-content">
              {e.description}
            </div>
          )};
        </li>))};
    </div>)}

  export default TimelineAccordion;



  // https://www.freecodecamp.org/news/build-accordion-menu-in-react-without-external-libraries/