"use client";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ToggleButton({ toggleClass, setToggleClass }) {
  const handleClick = () => {
    setToggleClass(toggleClass === '' ? 'light-mode' : '');
  };

  return (
    <div className={`toggle-div ${toggleClass}`} onClick={handleClick}>
      {toggleClass === 'light-mode' ? <FiSun /> : <FiMoon />}
    </div>
  );
}
