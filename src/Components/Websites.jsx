import React from "react";
import { Link } from "react-scroll";
import Website1 from "../assets/videos/1.mp4";
import Website2 from "../assets/videos/2.mp4";
import Website3 from "../assets/videos/3.mp4";
import Website4 from "../assets/videos/4.mp4";

import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";

function Highlight() {
  //   console.log(data);
  return (
    <div
      id="website"
      className="w-full relative flex flex-row bg-black h-screen"
    >
      {/* background design */}
      <div className="w-16 h-full border-r border-gray-700"></div>
      <div className="w-72 h-full border-r border-gray-700"></div>
      <div className="w-72 h-full border-r border-gray-700"></div>
      <div className="w-72 h-full border-r border-gray-700"></div>
      <div className="w-72 h-full border-r border-gray-700"></div>
      {/* End of background design */}

      <div className="absolute w-full h-full flex">
        <div className="container mx-auto py-16">
          {/* Sample Work */}
          <div className="w-full flex flex-col justify-center items-center px-8 py-5 gap-5">
            <div className="w-[250px] sm:w-[300px] md:w-[450px] flex justify-between items-center">
              {/* Short Form */}
              <Link
                to="works"
                activeClass="active"
                smooth={true}
                spy={true}
                offset={0}
                className="uppercase cursor-pointer text-xs sm:text-md md:text-xl text-[#1f1e1e] hover:text-yellow-400 bg-black transition-opacity duration-500 rounded-md border-b-2 border-[#1f1e1e] hover:border-yellow-400 px-2"
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
                className="uppercase cursor-pointer text-xs sm:text-md md:text-xl text-[#1f1e1e] hover:text-yellow-400 bg-black transition-opacity duration-500 rounded-md border-b-2 border-[#1f1e1e] hover:border-yellow-400 px-2"
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
                className="uppercase cursor-pointer text-xs sm:text-md md:text-xl text-yellow-400 bg-black transition-opacity duration-500 rounded-md border-b-2 border-yellow-400 px-2"
              >
                Websites
              </Link>
            </div>
          </div>
          {/* End Sample Work */}

          {/* Display Works */}
          <div className="w-full h-5/6 grid grid-cols-2 place-items-center px-10 py-6 gap-8">
            {/* One */}
            <div className="w-[8rem] sm:w-[16rem] md:w-[20rem] h-3/4 flex flex-col justify-center items-center gap-2">
              <Video
                src={Website1}
                autoPlay
                // controls={["PlayPause", "Seek", "Time", "Volume", "Fullscreen"]}
                loop
                muted
                className="w-full rounded-md"
              ></Video>
              <div className="w-full flex flex-col sm:flex-row items-center justify-evenly">
                <p className="text-amber-400 font-semibold text-sm sm:text-lg md:text-2xl">
                  Real Estate
                </p>
                <a
                  href="https://johnandrewregistos.github.io/Real-Estate-Site/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-lg md:text-xl text-amber-400 hover:text-amber-500 bg-black hover:opacity-70 border-2 border-yellow-600 px-3 py-1 rounded-md hover:border-yellow-400 transition-all duration-300"
                >
                  View Site
                </a>
              </div>
            </div>
            {/* Two */}
            <div className="w-[8rem] sm:w-[16rem] md:w-[20rem] h-3/4 flex flex-col justify-center items-center gap-2">
              <Video
                src={Website2}
                autoPlay
                // controls={["PlayPause", "Seek", "Time", "Volume", "Fullscreen"]}
                loop
                muted
                className="w-full rounded-md"
              ></Video>
              <div className="w-full flex flex-col sm:flex-row items-center justify-evenly">
                <p className="text-amber-400 font-semibold text-sm sm:text-lg md:text-2xl">
                  Ecommerce Store
                </p>
                <a
                  href="https://johnandrewregistos.github.io/React-Ecommerce-Store/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-lg md:text-xl text-amber-400 hover:text-amber-500 bg-black hover:opacity-70 border-2 border-yellow-600 px-3 py-1 rounded-md hover:border-yellow-400 transition-all duration-300"
                >
                  View Site
                </a>
              </div>
            </div>
            {/* Three */}
            <div className="w-[8rem] sm:w-[16rem] md:w-[20rem] h-3/4 flex flex-col justify-center items-center gap-2">
              <Video
                src={Website3}
                autoPlay
                // controls={["PlayPause", "Seek", "Time", "Volume", "Fullscreen"]}
                loop
                muted
                className="w-full rounded-md"
              ></Video>
              <div className="w-full flex flex-col sm:flex-row items-center justify-evenly">
                <p className="text-amber-400 font-semibold text-sm sm:text-lg md:text-2xl">
                  Portfolio
                </p>
                <a
                  href="https://johnandrewregistos.github.io/react-tailwind-project/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-lg md:text-xl text-amber-400 hover:text-amber-500 bg-black hover:opacity-70 border-2 border-yellow-600 px-3 py-1 rounded-md hover:border-yellow-400 transition-all duration-300"
                >
                  View Site
                </a>
              </div>
            </div>
            {/* Four */}
            <div className="w-[8rem] sm:w-[16rem] md:w-[20rem] h-3/4 flex flex-col justify-center items-center gap-2">
              <Video
                src={Website4}
                autoPlay
                // controls={["PlayPause", "Seek", "Time", "Volume", "Fullscreen"]}
                loop
                muted
                className="w-full rounded-md"
              ></Video>
              <div className="w-full flex flex-col sm:flex-row items-center justify-evenly">
                <p className="text-amber-400 font-semibold text-sm sm:text-lg md:text-2xl">
                  Butad Tailoring
                </p>
                <a
                  href="https://johnandrewregistos.github.io/BUTAD_TAILORING_SERVICE/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-lg md:text-xl text-amber-400 hover:text-amber-500 bg-black hover:opacity-70 border-2 border-yellow-600 px-3 py-1 rounded-md hover:border-yellow-400 transition-all duration-300"
                >
                  View Site
                </a>
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
