import React from "react";
import Header from "./Header";
import videoBg from "../assets/SHOWREEL.mp4";

function HomePage() {
  return (
    <div id="home" className="w-full h-screen bg-black flex flex-col">
      <Header />
      <video
        src={videoBg}
        autoPlay
        loop
        muted
        className="w-full h-full object-fill md:object-cover "
      ></video>
    </div>
  );
}

export default HomePage;
