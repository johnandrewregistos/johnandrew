import React, { useState, useEffect } from "react";
import { BiPhoneCall } from "react-icons/bi";
import { Link } from "react-scroll";
import Favicon from "../assets/favicon.png";

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(true);

  const toogleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setMenuOpen(true);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="text-black font-bold body-font">
      <div className="container mx-auto flex p-3 md:p-5 justify-between flex-row items-center">
        <a
          href="https://www.instagram.com/john_andrew.edits/"
          target="_blank"
          className="flex items-center mb-4 md:mb-0"
        >
          <img src={Favicon} alt="John Andrew" className="w-10 h-10" />
          <span className="ml-3 text-yellow-400 md:text-xl">John Andrew</span>
        </a>

        <nav className="hidden md:ml-auto md:flex flex-wrap items-center text-base justify-center">
          <Link
            to="works"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={0}
            className="mr-10 cursor-pointer uppercase text-yellow-400 hover:opacity-50 transition-opacity duration-300"
          >
            Works
          </Link>
          <Link
            to="contact"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={0}
            className="mr-10 cursor-pointer uppercase text-yellow-400 hover:opacity-50 transition-opacity duration-300"
          >
            Contact
          </Link>
        </nav>
        <a
          href="https://calendar.app.google/k9diqHZ3Jfzo3rbY7"
          target="_blank"
          rel="noopener noreferrer"
          className="-top-10"
        >
          <button className="inline-flex items-center bg-yellow-400 hover:bg-yellow-200 transition-colors duration-500 border-0 py-1 px-3 focus:outline-none rounded text-base">
            Book <BiPhoneCall className="ml-1" />
          </button>
        </a>
      </div>
    </header>
  );
}

export default Header;
