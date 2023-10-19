import React, { useState } from "react";
import { Link } from "react-scroll";

function Highlight() {
  //   console.log(data);
  return (
    <div id="works" className="w-full relative flex flex-row bg-black h-screen">
      {/* background design */}
      <div className="w-16 h-full border-r border-gray-700"></div>
      <div className="w-72 h-full border-r border-gray-700"></div>
      <div className="w-72 h-full border-r border-gray-700"></div>
      <div className="w-72 h-full border-r border-gray-700"></div>
      <div className="w-72 h-full border-r border-gray-700"></div>
      {/* End of background design */}

      <div className="absolute w-full h-full flex">
        <div className="container mx-auto">
          {/* Sample Work */}
          <div className="w-full flex flex-col justify-center items-center px-8 py-5 gap-5">
            <h1 className="text-2xl sm:text-4xl md:text-6xl text-yellow-400 uppercase">
              Sample Work
            </h1>
            <div className="w-[250px] sm:w-[300px] md:w-[450px] flex justify-between items-center">
              {/* Short Form */}
              <Link
                to="works"
                activeClass="active"
                smooth={true}
                spy={true}
                offset={0}
                className="uppercase cursor-pointer text-xs sm:text-md md:text-xl text-yellow-400 bg-black  transition-opacity duration-500 rounded-md border-b-2 border-yellow-400 px-2"
              >
                Shorts
              </Link>
              {/* Long Form */}
              <Link
                to="long"
                activeClass="active"
                smooth={true}
                spy={true}
                offset={0}
                className="uppercase cursor-pointer text-xs sm:text-md md:text-xl text-[#1f1e1e] hover:text-yellow-400 bg-black  transition-opacity duration-500 rounded-md border-b-2 border-[#1f1e1e] hover:border-yellow-400 px-2"
              >
                Long Forms
              </Link>
              {/* Web Design */}
              <Link
                to="website"
                activeClass="active"
                smooth={true}
                spy={true}
                offset={0}
                className="uppercase cursor-pointer text-xs sm:text-md md:text-xl text-[#1f1e1e] hover:text-yellow-400 bg-black  transition-opacity duration-500 rounded-md border-b-2 border-[#1f1e1e] hover:border-yellow-400 px-2"
              >
                Websites
              </Link>
            </div>
          </div>
          {/* End Sample Work */}

          {/* Display Works */}
          <div className="w-full h-4/6 grid grid-cols-2 md:grid-cols-4 place-items-center gap-3">
            {/* One */}
            <div className="w-7/12 sm:w-6/12 md:w-9/12 h-3/4 md:h-full grid place-items-center">
              <video controls loop muted className="w-full rounded-md">
                <source src="/videos/Ali Abdaal Style.mp4" type="video/mp4" />
              </video>
              <div className="flex flex-col justify-center items-center">
                <p className="text-md sm:text-xl md:text-2xl text-yellow-400 font-semibold">
                  Ali Abdaal
                </p>
              </div>
            </div>
            {/* two */}
            <div className="w-7/12 sm:w-6/12 md:w-9/12 h-3/4 md:h-full grid place-items-center">
              <video controls loop muted className="w-full rounded-md">
                <source src="/videos/Devin Jatho Orig.mp4" type="video/mp4" />
              </video>
              <div className="flex flex-col justify-center items-center">
                <p className="text-md sm:text-xl md:text-2xl text-yellow-400 font-semibold">
                  Devin Jatho
                </p>
              </div>
            </div>
            {/* three */}
            <div className="w-7/12 sm:w-6/12 md:w-9/12 h-3/4 md:h-full grid place-items-center">
              <video controls loop muted className="w-full rounded-md">
                <source src="/videos/Natt Style.mp4" type="video/mp4" />
              </video>
              <div className="flex flex-col justify-center items-center">
                <p className="text-md sm:text-xl md:text-2xl text-yellow-400 font-semibold">
                  Natt Style
                </p>
              </div>
            </div>
            {/* four */}
            <div className="w-7/12 sm:w-6/12 md:w-9/12 h-3/4 md:h-full grid place-items-center">
              <video controls loop muted className="w-full rounded-md">
                <source src="/videos/Devin Jatho.mp4" type="video/mp4" />
              </video>
              <div className="flex flex-col justify-center items-center">
                <p className="text-md sm:text-xl md:text-2xl text-yellow-400 font-semibold">
                  Personal Style
                </p>
              </div>
            </div>
          </div>
          {/* End of Display Works */}
        </div>
      </div>
    </div>
  );
}

export default Highlight;
