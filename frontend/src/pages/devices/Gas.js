import React, { useEffect, useState } from "react";
import LockButton from "../../components/LockButton";
import Switch from "./../../components/Switch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { faGasPump } from "@fortawesome/free-solid-svg-icons";

const Door = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [gasStatus, setGasStatus] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchGasDevice();
    console.log("gas: ", gasStatus);
  }, []);

  const fetchGasDevice = async () => {
    const response = await fetch(
      "http://localhost:8080/devices/647bc059c9bca3e7d6fa3737"
    );
    const responseData = await response.json();

    setGasStatus(responseData.status === "on" ? true : false);
  };

  const handleSwitchToggle = async (value) => {
    setLoading(true);
    // Fetch the API to toggle the Switch
    const response = await fetch(
      "http://localhost:8080/devices/647bc059c9bca3e7d6fa3737/status",
      {
        method: "PUT",
        body: value ? "on" : "off",
      }
    );

    const responseData = await response.json();

    setGasStatus(responseData.status === "on" ? true : false);

    setLoading(false);
  };
  return (
    <div
      className="p-4 shadow-md flex flex-wrap flex-col justify-start"
      style={{ backgroundColor: `${colors.primary[400]}` }}
    >
      <div className="flex flex-col">
        <div className="flex items-start flex-row justify-between p-3">
          <h1>Gas</h1>
          <Switch
            loading={loading}
            defaultValue={gasStatus}
            toggleSwitch={handleSwitchToggle}
          />
        </div>
      </div>
      <div className="flex items-start flex-row justify-center p-3">
        {/* <ColorPicker {...color} onInput={onInput} /> */}
        <FontAwesomeIcon icon={faGasPump} fontSize={275} />
      </div>
    </div>
  );
};

export default Door;
