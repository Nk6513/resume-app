export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Nasir Khan. All rights reserved.</p>
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#digitalSkills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}
