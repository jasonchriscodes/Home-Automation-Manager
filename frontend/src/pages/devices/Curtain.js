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

  return (
    <div className="p-4 shadow-md flex flex-wrap flex-col justify-around bg-white">
      <div className="flex-col">
        <div className="flex items-start flex-row justify-between p-3">
          <h1>Curtain</h1>
          <Switch />
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
