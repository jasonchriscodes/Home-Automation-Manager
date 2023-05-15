import React, { useState } from "react";
import Switch from "./../../components/Switch";
import ColorPicker from "@radial-color-picker/react-color-picker";
import "@radial-color-picker/react-color-picker/dist/react-color-picker.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClosedCaptioning,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { useLocation, useParams } from "react-router-dom";
import DeviceService from "./../../services/DeviceService";

const imageFolder = "/assets";

const Light = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const location = useLocation();
  const [color, setColor] = useState({
    hue: 90,
    saturation: 100,
    luminosity: 50,
    alpha: 1,
  });

  const onInput = (hue) => {
    setColor((prev) => {
      return {
        ...prev,
        hue,
      };
    });
  };

  const [brightness, setBrightness] = useState(100);

  const handleBrightnessChange = (event) => {
    setBrightness(event.target.value);
  };

  const [isOn, setIsOn] = useState(false);

  const handleClick = (e) => {};

  const buttonText = isOn ? "Close" : "Open";
  const gradientStart = isOn
    ? "from-red-500 via-red-600 bg-pos-0"
    : "from-blue-800 via-blue-600 bg-pos-0";
  const gradientEnd = isOn ? "to-red-400 bg-pos-100" : "to-blue-400 bg-pos-100";

  const { deviceId } = useParams();
  const [deviceButton, setDeviceButton] = useState({
    deviceId: deviceId,
    room: "",
    device: "",
    status: false,
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setDeviceButton({ ...deviceButton, [e.target.name]: value });
  };

  return (
    <div
      className="p-4 shadow-md flex flex-wrap flex-col justify-around"
      style={{ backgroundColor: `${colors.primary[400]}` }}
    >
      <div className="flex-col">
        <div className="flex items-start flex-row justify-between p-3">
          <h1>Lights</h1>
          <Switch status={location.state.status} />
        </div>
        <div className="flex items-start flex-row justify-between p-3">
          <ColorPicker {...color} onInput={onInput} />
          <FontAwesomeIcon
            icon={faLightbulb}
            fontSize={275}
            style={{
              filter: `brightness(${brightness}%)`,
              color: "orange",
            }}
          />
        </div>
        <div className="flex items-center flex-row justify-center p-3">
          <div class="slider-container my-4">
            <div class="slider-brightness-box">
              <img
                style={{ width: "30px", height: "auto" }}
                src={`${imageFolder}/moon.png`}
                alt="curtain-right"
                className="my-3 mx-3"
              />
              <input
                type="range"
                id="slider-range"
                min="10"
                max="100"
                value={brightness}
                onChange={handleBrightnessChange}
              ></input>
              <img
                style={{ width: "30px", height: "auto" }}
                src={`${imageFolder}/sun.png`}
                alt="curtain-right"
                className="my-3 mx-3"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center flex-row justify-center p-3">
          <div className="flex items-start flex-row justify-center p-3 gap-12">
            <button
              onClick={handleClick}
              onChange={(e) => handleChange(e)}
              className={`bg-gradient-to-r ${gradientStart} ${gradientEnd} text-white px-12 py-5 rounded-md transition-all duration-500`}
              style={{
                transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Light;
