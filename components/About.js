
// ------------------------------------------
// Imports
// ------------------------------------------
import Image from "next/image";
import { FaDownload } from "react-icons/fa";

// ---------------------------------------------------
// About Component
// ---------------------------------------------------
export default function About() {
  return (
    // Wrapper section for About Me
    <section id="about" className="about-section">
      {/*---------- Grid Layout for Image and Text ----------*/}
      <div className="about-grid">
        {/*---------- Profile Image ----------*/}
        <div className="about-image">
          <Image
            src="/profile.jpg"
            alt="profile image"
            width={400}
            height={500}
            className="profile-img"
            priority
            unoptimized
          />
        </div>

        {/*---------- About Me Text ----------*/}
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hi! I’m{" "}
            <span>
              <strong>Nasir Khan</strong>
            </span>
            , a full-stack web developer passionate about creating modern,
            user-friendly web applications. I love working with technologies
            like Next.js, React, PHP, Tailwind, and SCSS to build responsive,
            visually appealing, and efficient digital experiences.
          </p>

          {/*---------- Download CV Button ----------*/}
          <div className="btn-con">
            <a href="/Resume.pdf" download="Resume.pdf" className="main-btn">
              <span className="btn-text">Download CV</span>
              <span className="btn-icon">
                <FaDownload size={20} color="white" />
              </span>
            </a>
          </div>
          <div className="seperator"></div>
        </div>
      </div>
    </section>
  );
}
