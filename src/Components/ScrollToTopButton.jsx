import React, { useState, useEffect } from "react";
import { BsArrowUpCircle } from "react-icons/bs";
import { BiPhoneCall } from "react-icons/bi";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed bottom-6 right-6 transition-opacity duration-300 ease-in-out opacity-0 ${
        isVisible ? "opacity-100" : ""
      }`}
    >
      {/* Call */}
      <a
        href="https://calendar.app.google/k9diqHZ3Jfzo3rbY7"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="bg-[#1f1e1e] hover:bg-yellow-400 opacity-20 hover:opacity-80 transition-all duration-300 text-white hover:text-black font-semibold rounded-full w-12 h-12 flex items-center justify-center focus:outline-none">
          <BiPhoneCall />
        </button>
      </a>
      <button
        onClick={scrollToTop}
        className="mt-2 bg-[#1f1e1e] hover:bg-yellow-400 opacity-20 hover:opacity-80 transition-all duration-300 text-white hover:text-black font-semibold rounded-full w-12 h-12 flex items-center justify-center focus:outline-none"
      >
        <BsArrowUpCircle />
      </button>
    </div>
  );
}

export default ScrollToTopButton;
