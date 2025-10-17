import Image from "next/image";
import { FaDownload } from "react-icons/fa";


export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-grid">
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
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hi! I am{" "}
            <span>
              <strong>Nasir Khan</strong>
            </span>
            , a full-stack web developer passionate about building modern and
            user-friendly web applications. I enjoy working with Next.js, React,
            PHP, Tailwind and SCSS to craft beautiful, responsive designs.
          </p>
          <div className="btn-con">
            <a href="/Resume.pdf" download="Resume.pdf" className="main-btn">
              <span className="btn-text">Download CV</span>
              <span className="btn-icon">
               <FaDownload size={20} color="white" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
