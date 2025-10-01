"use client";
import { FiSun, FiMoon } from "react-icons/fi";


<<<<<<< HEAD
export default function ToggleButton ({toggleClass, handleClick}) {
    return (
        <div className={`toggle-div ${toggleClass}`} onClick={handleClick}>
=======


export default function ToggleButton ({toggleClass, setToggleClass}) {


    const HandleClick = () => {
        setToggleClass(toggleClass === '' ? 'light-mode': '');
    }
    return (
        <div className={`toggle-div ${toggleClass}`} onClick={HandleClick}>
>>>>>>> 97b874d3576499051763889123d9da03c956101e
          {toggleClass === 'light-mode' ? <FiSun/> : <FiMoon/> }
        </div>
    )
}