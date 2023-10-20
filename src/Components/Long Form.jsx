import React from "react";
import { Link } from "react-scroll";
import LongVideo from "../assets/videos/Long.mp4";
import thum from "../assets/images/thumbnail.jpeg";

import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";

function Highlight() {
  //   console.log(data);
  return (
    <div id="long" className="w-full relative flex flex-row bg-black h-screen">
      {/* background design */}
      <div className="w-16 h-full border-r border-gray-700"></div>
      <div className="w-72 h-full border-r border-gray-700"></div>
      <div className="w-72 h-full border-r border-gray-700"></div>
      <div className="w-72 h-full border-r border-gray-700"></div>
      <div className="w-72 h-full border-r border-gray-700"></div>
      {/* End of background design */}

      <div className="absolute w-full h-full flex">
        <div className="container mx-auto py-10">
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
                className="uppercase cursor-pointer text-xs sm:text-md md:text-xl text-yellow-400 bg-black transition-opacity duration-500 rounded-md border-b-2 border-yellow-400 px-2"
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
                className="uppercase cursor-pointer text-xs sm:text-md md:text-xl text-[#1f1e1e] hover:text-yellow-400 bg-black transition-opacity duration-500 rounded-md border-b-2 border-[#1f1e1e] hover:border-yellow-400 px-2"
              >
                Websites
              </Link>
            </div>
          </div>
          {/* End Sample Work */}

          {/* Display Works */}
          <div className="w-full h-5/6 flex flex-wrap justify-center items-center px-10 py-2 sm:py-8 gap-10">
            {/* One */}
            <div className="w-5/6 grid place-items-center">
              <Video
                src={LongVideo}
                loop
                controls={["PlayPause", "Seek", "Time", "Volume", "Fullscreen"]}
                poster={thum}
              ></Video>
            </div>
          </div>
          {/* End of Display Works */}
        </div>
      </div>
    </div>
  );
}

export default Highlight;
