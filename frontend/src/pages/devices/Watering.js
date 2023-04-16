import React, { useState } from "react";
import Switch from "./../../components/Switch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync } from "@fortawesome/free-solid-svg-icons";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";
import { faTemperatureHalf } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

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

  const percentage = 66;

  function Container(props) {
    return (
      <div>
        <div style={{ display: "flex" }}>
          <div style={{ width: "70%" }}>
            <h3 className="h5">{props.label}</h3>
            <p>{props.description}</p>
          </div>
          <div style={{ width: "30%", paddingRight: 30 }}>{props.children}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 shadow-md flex flex-wrap flex-col justify-between bg-white">
      <div className="flex-col">
        <div className="flex items-start flex-row justify-between p-3">
          <h1>Watering</h1>
          <Switch />
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url("https://res.cloudinary.com/jasoncloud13542/image/upload/v1681652448/bonsai2_jm96dr.png")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "470px",
        }}
      >
        <div className="pl-3 pt-20 -mt-14">
          <button
            className="text-gray-400 font-bold rounded -mt-10"
            onClick={handleSpinClick}
            style={{ fontSize: 20 }}
          >
            {isSpinning ? (
              <FontAwesomeIcon
                icon={faSync}
                spin
                className="animate-spin-fast"
              />
            ) : (
              <FontAwesomeIcon icon={faSync} />
            )}{" "}
          </button>
          <div className="pt-5 pb-5">
            <p className="text-3xl font-bold">Bonsai</p>
            <p className="text-md font-light">Watered on 15.04.2023</p>
          </div>
          <div className="flex-col py-2">
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faDroplet}
                style={{ fontSize: 18 }}
                className="text-[#2563EB]"
              />
              <p className="text-xl px-2 font-bold">10%</p>
            </div>
            <p className="text-md font-light">Humidity</p>
          </div>
          <div className="flex-col py-2">
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faTemperatureHalf}
                style={{ fontSize: 18 }}
                className="text-[#2563EB]"
              />
              <p className="text-xl px-2 font-bold">2°C</p>
            </div>
            <p className="text-md font-light">Temperature</p>
          </div>
          <div className="flex-col py-2">
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faSun}
                style={{ fontSize: 18 }}
                className="text-[#2563EB]"
              />
              <p className="text-xl px-2 font-bold">70%</p>
            </div>
            <p className="text-md font-light">Light</p>
          </div>
        </div>
      </div>
      <div className="-mt-20 pl-3">
        <div className="flex items-start flex-row justify-between">
          <div className="flex flex-col ">
            <p className="text-xl font-bold">Watering schedule</p>
            <p className="text-md font-light">Today is 17.04.2023</p>
          </div>
          <div>
            <Container>
              <CircularProgressbarWithChildren
                value={percentage}
                strokeWidth={5}
              >
                {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                <img
                  style={{ width: 20, marginTop: -2 }}
                  src="https://res.cloudinary.com/jasoncloud13542/image/upload/v1681661824/droplet-solid_oyqych.png"
                  alt="water-droplet"
                />
                <div style={{ fontSize: 12, marginTop: 1 }}>
                  <strong>66%</strong>
                </div>
              </CircularProgressbarWithChildren>
            </Container>
          </div>
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
