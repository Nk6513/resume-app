"use client";

// ------------------------------------------
// Imports
// ------------------------------------------
import { FiSun, FiMoon } from "react-icons/fi";

// ---------------------------------------------------
// ToggleButton Component
// ---------------------------------------------------
export default function ToggleButton({
  logoColor,
  toggleClass,
  setToggleClass,
  setLogoColor,
}) {
  // Handler to toggle light/dark mode and logo color
  const handleClick = () => {
    setToggleClass(toggleClass === "" ? "light-mode" : "");
    setLogoColor(logoColor === "#fff" ? "#121212" : "#fff"); // University Logo
  };

  return (
    // Wrapper toggle div
    <div className={`toggle-div ${toggleClass}`} onClick={handleClick}>
      {/* Display sun or moon icon based on current theme */}
      {toggleClass === "light-mode" ? <FiSun /> : <FiMoon />}
    </div>
  );
}
