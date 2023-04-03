import React, { useState } from "react";
import Switch from "./../../components/Switch";

const imageFolder = "/assets";

const Curtain = () => {
  const [positionLeft, setPositionLeft] = useState(10);

  const handlePositionLeftChange = (event) => {
    setPositionLeft(event.target.value);
  };
  const [positionRight, setPositionRight] = useState(100);

  const handlePositionRightChange = (event) => {
    setPositionRight(event.target.value);
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const buttonText = isOpen ? "Close" : "Open";
  const gradientStart = isOpen
    ? "from-red-500 via-red-600 bg-pos-0"
    : "from-blue-800 via-blue-600 bg-pos-0";
  const gradientEnd = isOpen
    ? "to-red-400 bg-pos-100"
    : "to-blue-400 bg-pos-100";

  return (
    <div className="p-4 shadow-md flex flex-wrap flex-col justify-around bg-white">
      <div className="flex-col">
        <div className="flex items-start flex-row justify-between p-3">
          <h1>Curtain</h1>
          <Switch />
        </div>
        <div className="flex items-start flex-row justify-center p-3 gap-12">
          <button
            onClick={handleClick}
            className={`bg-gradient-to-r ${gradientStart} ${gradientEnd} text-white px-12 py-5 rounded-md transition-all duration-500`}
            style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}
          >
            {buttonText}
          </button>
        </div>
        <div className="flex items-start flex-row justify-center p-3">
          <div class="slider-container my-4">
            <div class="slider-curtain-box">
              <img
                style={{ width: "45px", height: "auto" }}
                src={`${imageFolder}/curtain-left.png`}
                alt="curtain-left"
                width={45}
              />
              <input
                type="range"
                id="slider-range"
                min="10"
                max="50"
                value={positionLeft}
                onChange={handlePositionLeftChange}
              ></input>
              <input
                type="range"
                id="slider-range"
                min="60"
                max="100"
                value={positionRight}
                onChange={handlePositionRightChange}
              ></input>
              <img
                style={{ width: "45px", height: "auto" }}
                src={`${imageFolder}/curtain-right.png`}
                alt="curtain-right"
                width={45}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Curtain;
