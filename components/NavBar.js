"use client";

// ------------------------------------------
// Imports
// ------------------------------------------
import { FaFileAlt } from "react-icons/fa";

// ---------------------------------------------------
// NavBar Component
// ---------------------------------------------------
export default function NavBar({ toggleDiv }) {
  return (
    // Wrapper navigation bar
    <nav className="navbar">

      {/*---------- Logo Section ----------*/}
      <div className="logo-div">
        <span onClick={() => window.location.reload()}>RESUME</span>
        <FaFileAlt size={32} />
      </div>

      {/*---------- Navigation Links ----------*/}
      <ul className="navLinks">
        <li><a href="#about">About</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#digitalSkills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/*---------- Toggle Button ----------*/}
      {toggleDiv}

    </nav>
  );
}
