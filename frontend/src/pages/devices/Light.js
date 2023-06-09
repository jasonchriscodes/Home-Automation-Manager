import React, { useEffect, useState } from "react";
import Switch from "../../components/Switch";
import ColorPicker from "@radial-color-picker/react-color-picker";
import "@radial-color-picker/react-color-picker/dist/react-color-picker.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import axios from "axios";

const imageFolder = "/assets";

const Light = ({ id = 0 }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [color, setColor] = useState({
    hue: 90,
    saturation: 100,
    luminosity: 50,
    alpha: 1,
  });

  const [lighStatus, setLightStatus] = useState(false);
  const [loading, setLoading] = useState(false);

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

  useEffect(() => {
    fetchLightDevice();
  }, []);

  const fetchLightDevice = async () => {
    const response = await fetch("http://localhost:8080/devices/" + id);
    const responseData = await response.json();

    setLightStatus(responseData.status === "on" ? true : false);
  };

  const handleSwitchToggle = async (value) => {
    setLoading(true);

    // Fetch the API to toggle the Switch
    const response = await fetch(`http://localhost:8080/devices/${id}/status`, {
      method: "PUT",
      body: value ? "on" : "off",
    });

    const responseData = await response.json();

    setLightStatus(responseData.status === "on" ? true : false);

    setLoading(false);
  };

  return (
    <div
      className="p-4 shadow-md flex flex-wrap flex-col justify-around"
      style={{ backgroundColor: `${colors.primary[400]}` }}
    >
      <div className={"flex-col" + (loading ? "cursor-wait" : "")}>
        <div className="flex items-start flex-row justify-between p-3">
          <h1>Lights</h1>
          <Switch
            loading={loading}
            defaultValue={lighStatus}
            toggleSwitch={handleSwitchToggle}
          />
        </div>
        <div className="flex items-start flex-row justify-center p-3">
          {/* <ColorPicker {...color} onInput={onInput} /> */}
          <FontAwesomeIcon
            icon={faLightbulb}
            fontSize={275}
            style={{
              filter: `brightness(${brightness}%)`,
              color: "orange",
            }}
          />
        </div>
        {/* <div className="flex items-center flex-row justify-center p-3">
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
        </div> */}
      </div>
    </div>
  );
};

export default Light;
