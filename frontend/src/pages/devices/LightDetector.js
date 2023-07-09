import React, { useEffect, useState } from "react";
import CheckBox from "./../../components/CheckBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormControlLabel, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";

const Door = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [lightdetectorStatus, setLigtdetectorStatus] = useState(false);

  useEffect(() => {
    fetchGasDevice();
  }, []);

  const fetchGasDevice = async () => {
    const response = await fetch(
      "http://localhost:8080/devices/647c3e36c9bca3e7d6fa3739"
    );
    const responseData = await response.json();
    console.log("responseData: ", responseData.status);
    setLigtdetectorStatus(responseData.status === "on" ? true : false);
    console.log("light status: ", lightdetectorStatus);
  };

  const handleCheckboxChange = async (isChecked) => {
    try {
      // Update the local state immediately
      setLigtdetectorStatus(isChecked);

      // Make an API call to update the light detector status
      await fetch(
        "http://localhost:8080/devices/647c3e36c9bca3e7d6fa3739/status",
        {
          method: "PUT",
          body: isChecked ? "on" : "off",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.error("Error updating light detector status:", error);
    }
  };

  return (
    <div
      className="p-4 shadow-md flex flex-wrap flex-col justify-start"
      style={{ backgroundColor: `${colors.primary[400]}` }}
    >
      <div className="flex flex-col">
        <div className="flex items-start flex-row justify-between p-3">
          <h1>Light Detector</h1>
        </div>
        <div className="flex items-start flex-row justify-center p-3">
          <center>
            <FontAwesomeIcon icon={faGear} fontSize={100} />
            <FontAwesomeIcon icon={faLightbulb} fontSize={100} />
          </center>
        </div>
        <div className="flex items-start flex-row justify-center p-3">
          <center>
            <FormControlLabel
              control={
                <CheckBox
                  defaultValue={lightdetectorStatus}
                  toggleSwitch={handleCheckboxChange}
                  color="primary"
                />
              }
              label="Check if you want to automate light when curtain closes"
            />
          </center>
        </div>
      </div>
    </div>
  );
};

export default Door;
