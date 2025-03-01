import React from "react";
import Home from "./Home";
import Skills from "./Skills";
import Projects from "./Projects";
import Resume from "./Resume";
import Hire from "./Hire";

const MainContent = () => {
  return (
    <ul className="l-main-content main-content">
      <Home />
      <Skills />
      <Projects />
      <Resume />
      <Hire />
    </ul>
  );
};

export default MainContent;
