"use client";

// ------------------------------------------
// Imports
// ------------------------------------------
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

// ---------------------------------------------------
// Footer Component
// ---------------------------------------------------
export default function Footer({ toggleDiv }) {
  return (
    // Wrapper footer element
    <footer className="footer">
      <div className="footer-content">

        {/*---------- Toggle Button ----------*/}
        <div className="footer-toggle">
          {toggleDiv}
        </div>

        {/*---------- Social Links ----------*/}
        <div className="footer-scoial-links">
          <a href="mailto:your@email.com">
            <MdEmail />
          </a>
          <a
            href="https://github.com/Nk6513"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/nasir-khan-105102229/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>

        {/*---------- Footer Navigation Links ----------*/}
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#digitalSkills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        {/*---------- Copyright ----------*/}
        <p>© {new Date().getFullYear()} Nasir Khan. All rights reserved.</p>
        
      </div>
    </footer>
  );
}
