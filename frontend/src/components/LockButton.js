import React, { useState } from "react";
import "./LockButton.css";
const imageFolder = "/assets";

function LockButton() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const buttonText = isOpen ? "Unlock" : "Lock";
  const icon = isOpen
    ? `${imageFolder}/unlocked.svg`
    : `${imageFolder}/locked.svg`;

  return (
    <div className="col-2 Lockout-container">
      <img className="Lockout_icon" src={icon} alt="" onClick={handleClick} />
      <p className="text-2xl font-bold">{buttonText}</p>
    </div>
  );
}

export default LockButton;
