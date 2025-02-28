import React from "react";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";

const MainContent = () => {
  return (
    <ul className="l-main-content main-content">
      <About />
      <Skills />
      <Projects />
    </ul>
  );
};

export default MainContent;
