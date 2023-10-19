import React from "react";
import HomePage from "./Components/HomePage";
import Shorts from "./Components/Shorts";
import Long from "./Components/Long Form";
import Website from "./Components/Websites";
import Contact from "./Components/Contact";
import ScrollToTopButton from "./Components/ScrollToTopButton";

function App() {
  return (
    <>
      <HomePage />
      <Shorts />
      <Long />
      <Website />
      <Contact />
      <ScrollToTopButton />
    </>
  );
}

export default App;
