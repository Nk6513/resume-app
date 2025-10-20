"use client";

// ------------------------------------------
// Imports
// ------------------------------------------
import { useState } from "react";
import NavBar from "@/components/NavBar";
import About from "@/components/About";
import Education from "@/components/Education";
import DigitalSkills from "@/components/DigitalSkills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ToggleButton from "@/components/ToggleButton";

// ---------------------------------------------------
// Main Page Component
// ---------------------------------------------------
export default function Page() {
  // State to manage CSS toggle class for dark/light theme or layout changes
  const [toggleClass, setToggleClass] = useState("");

  // State to manage logo color dynamically (e.g., white in dark mode, black in light mode)
  const [logoColor, setLogoColor] = useState("#fff");

  return (
    // Wrapper div that changes class based on toggle state 
    <div className={toggleClass}>
      {/*---------- Navigation Bar Section passed a toggle div as a prop ---------- */}
      <NavBar
        toggleDiv={
          <ToggleButton
            logoColor={logoColor}
            setLogoColor={setLogoColor}
            toggleClass={toggleClass}
            setToggleClass={setToggleClass}
          />
        }
      />

      {/*---------- Main Section ---------- */}
      <main>
        <About />
        <Education logoColor={logoColor} />
        <DigitalSkills />
        <Projects />
        <Contact />
      </main>

      {/*---------- Footer Section with another toggle button for convenience ---------- */}
      <Footer
        toggleDiv={
          <ToggleButton
            toggleClass={toggleClass}
            setToggleClass={setToggleClass}
          />
        }
      />
    </div>
  );
}
