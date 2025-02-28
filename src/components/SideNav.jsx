import React from "react";

const SideNav = () => {
  return (
    <nav className="l-side-nav">
      <ul className="side-nav">
        <li className="is-active"><span>About</span></li>
        <li><span>Skills</span></li>
        <li><span>Projects</span></li>
        <li><span>Resume</span></li>
        <li><span>Hire me</span></li>
      </ul>
    </nav>
  );
};

export default SideNav;
