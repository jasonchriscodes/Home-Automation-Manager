import React, { useState } from "react";
import Switch from "./../../components/Switch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync } from "@fortawesome/free-solid-svg-icons";

const Watering = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const buttonText = isOpen ? "Stop" : "Water";
  const gradientStart = isOpen
    ? "from-red-500 via-red-600 bg-pos-0"
    : "from-blue-800 via-blue-600 bg-pos-0";
  const gradientEnd = isOpen
    ? "to-red-400 bg-pos-100"
    : "to-blue-400 bg-pos-100";

  const [isSpinning, setIsSpinning] = useState(false);

  const handleSpinClick = () => {
    setIsSpinning(true);
    setTimeout(() => {
      setIsSpinning(false);
    }, 1500); // Change the timeout value to match refresh time
  };

  return (
    <div className="p-4 shadow-md flex flex-wrap flex-col justify-between bg-white">
      <div className="flex-col">
        <div className="flex items-start flex-row justify-between p-3">
          <h1>Watering</h1>
          <Switch />
        </div>
      </div>
      <div className="flex items-start flex-col justify-between p-3">
        <button
          className="text-gray-300 font-bold py-2 px-4 rounded"
          onClick={handleSpinClick}
          style={{ fontSize: 20 }}
        >
          {isSpinning ? (
            <FontAwesomeIcon icon={faSync} spin className="animate-spin-fast" />
          ) : (
            <FontAwesomeIcon icon={faSync} />
          )}{" "}
        </button>
        <h1>Bonsai</h1>
        <h2>Watered on 15.04.2023</h2>
        <div className="flex-col">
          <div className="flex">
            <div>water symbol </div>
            <div>10%</div>
          </div>
          <h3>Humidity</h3>
        </div>
      </div>
      <div className="flex-col">
        <div className="flex items-start flex-row justify-center p-3 gap-12">
          <button
            onClick={handleClick}
            className={`bg-gradient-to-r ${gradientStart} ${gradientEnd} text-white px-12 py-5 rounded-md transition-all duration-500`}
            style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Watering;
