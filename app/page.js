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

// ---------------------------------------------------
// Main Page Component
// ---------------------------------------------------
  const [toggleClass, setToggleClass] = useState("");
  const [uniLogoColor, setUniLogoColor] = useState("#ffffff");

  // Handler that flips state for the toggle and university logo color
  const handleToggle = () => {
    setToggleClass((prev) => (prev === "light-mode" ? "" : "light-mode"));
    setUniLogoColor(uniLogoColor === "#ffffff" ? "#121212" : "#ffffff");
  };

  return (
    // Wrapper div that changes class based on toggle state //
    <div className={toggleClass}>

      {/*---------- Navbar ---------- */}
      <NavBar toggleDiv = {<ToggleButton onToggle={handleToggle}
          logoUniColor={uniLogoColor}
          setUniLogoColor={setUniLogoColor}
          toggleClass={toggleClass}/>} />

      {/*---------- Main Section ---------- */}
      <main>
        <About uniLogoColor={uniLogoColor} />
        <Education uniLogoColor={uniLogoColor} />
        <DigitalSkills />
        <Projects uniLogoColor={uniLogoColor} />
        <Contact />
      
      </main>

      {/*---------- Footer Section ---------- */}
      <Footer toggleDiv={  <ToggleButton
          onToggle={handleToggle}
          toggleClass={toggleClass}
        />} />
    </div>
  );
}
