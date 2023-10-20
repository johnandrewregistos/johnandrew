import React from "react";
import { BsArrow90DegRight } from "react-icons/bs";
import Instagram from "../assets/instagram.png";

function Contact() {
  return (
    <div
      id="contact"
      className="w-full h-[25rem] relative flex flex-row bg-black"
    >
      {/* background design */}
      <div className="w-16 h-full border-r border-gray-700"></div>
      <div className="w-72 h-full border-r border-gray-700"></div>
      <div className="w-72 h-full border-r border-gray-700"></div>
      <div className="w-72 h-full border-r border-gray-700"></div>
      <div className="w-72 h-full border-r border-gray-700"></div>
      {/* End of background design */}

      <div className="absolute w-full h-full flex">
        <div className="container mx-auto grid place-items-center py-16">
          <div className="w-full grid place-items-center">
            <h1 className="text-2xl sm:text-4xl md:text-6xl text-yellow-400 uppercase">
              Contact
            </h1>
          </div>
          <div className="w-full flex justify-between items-center px-8">
            <div className="w-3/6 h-full ">
              <h1 className="text-2xl sm:text-4xl text-yellow-400 flex justify-evenly items-center">
                Message Me Your <br className="hidden md:block" /> Project
                Details <BsArrow90DegRight />
              </h1>
            </div>
            <div className="w-3/6 h-full">
              <a
                href="https://www.instagram.com/john_andrew.edits/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full grid place-items-center"
              >
                <img
                  src={Instagram}
                  alt="John Andrew"
                  className="w-4/6 md:w-2/6"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
