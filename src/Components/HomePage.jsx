import React from "react";
import Header from "./Header";

function HomePage() {
  return (
    <div id="home" className="w-full h-screen bg-black flex flex-col">
      <Header />
      <video
        autoPlay
        loop
        muted
        className="w-full h-full object-fill md:object-cover "
      >
        <source src="https://github.com/johnandrewregistos/johnandrew/blob/main/public/videos/showreel.mp4" />
      </video>
    </div>
  );
}

export default HomePage;
