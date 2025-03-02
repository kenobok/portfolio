import React from "react";
import Header from './Header';
import Footer from './Footer';
import SideNav from './SideNav';
import Home from "./Home";
import Skills from "./Skills";
import Projects from "./Projects";
import Resume from "./Resume";
import Hire from "./Hire";

const MainContent = () => {
  return (
    <div className="perspective effect-rotate-left">
        <div className="container-fluid px-0">
            <div className="outer-nav--return"></div>
            <div id="viewport" className="l-viewport">
            <div className="l-wrapper">
                <Header />
                <SideNav />
                <ul className="l-main-content main-content">
                  <Home />
                  <Skills />
                  <Projects />
                  <Resume />
                  <Hire />
                </ul>
            </div>
            </div>
        </div>
        <Footer />
    </div>
  );
};

export default MainContent;
