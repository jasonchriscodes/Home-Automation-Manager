import React, { useEffect, useState } from "react";
import CurtainAnimation from "../../components/CurtainAnimation";
import Switch from "./../../components/Switch";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";

const Curtain = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [lighStatus, setLightStatus] = useState(false);
  const [loading, setLoading] = useState(false);

   useEffect(() => {
    fetchLightDevice();
  }, [])
  
  const fetchLightDevice = async () => {
    const response = await fetch('http://localhost:8080/devices/645c48d6781e46b6e35c4fe6');
    const responseData = await response.json();

    setLightStatus(responseData.status === 'on' ? true : false);
  }

  const handleSwitchToggle = async (value) => {
    console.log(value)

    setLoading(true);
    // Fetch the API to toggle the Switch
    const response = await fetch('http://localhost:8080/devices/645c48d6781e46b6e35c4fe6/status', {
      method: "PUT",
      body: value ? "on" : "off"
    });

    const responseData = await response.json();

    setLightStatus(responseData.status === 'on' ? true : false);

    setLoading(false);
  }

  return (
    <div
      className="p-4 shadow-md flex flex-wrap flex-col justify-between"
      style={{ backgroundColor: `${colors.primary[400]}` }}
    >
      <div className="flex-col">
        <div className="flex items-start flex-row justify-between p-3">
          <h1>Curtain</h1>
          <Switch loading={loading} defaultValue={lighStatus} toggleSwitch={handleSwitchToggle} />
        </div>
      </div>
      <div className="flex-col">
        <CurtainAnimation />
      </div>
    </div>
  );
};

export default Curtain;
