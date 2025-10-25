"use client";

// ------------------------------------------
// Imports
// ------------------------------------------
import { FiSun, FiMoon } from "react-icons/fi";

// ---------------------------------------------------
// ToggleButton Component
// ---------------------------------------------------
export default function ToggleButton({toggleClass, onToggle}) {


  return (
    // Wrapper toggle div
    <div className={`toggle-div ${toggleClass || ''}`} onClick={onToggle}>
      {/* Display sun or moon icon based on current theme */}
      {toggleClass === "light-mode" ? <FiSun /> : <FiMoon />}
    </div>
  );
}
