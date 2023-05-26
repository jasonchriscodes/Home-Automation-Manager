import React, { useEffect, useState } from "react";
import LockButton from "../../components/LockButton";
import Switch from "./../../components/Switch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";

const Door = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [doorStatus, setDoorStatus] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchDoorDevice();
  }, []);

  const fetchDoorDevice = async () => {
    const response = await fetch(
      "http://localhost:8080/devices/6469d4bb077d45277bce9e50"
    );
    const responseData = await response.json();

    setDoorStatus(responseData.status === "on" ? true : false);
  };

  const handleSwitchToggle = async (value) => {
    console.log(value);

    setLoading(true);
    // Fetch the API to toggle the Switch
    const response = await fetch(
      "http://localhost:8080/devices/6469d4bb077d45277bce9e50/status",
      {
        method: "PUT",
        body: value ? "on" : "off",
      }
    );

    const responseData = await response.json();

    setDoorStatus(responseData.status === "on" ? true : false);

    setLoading(false);
  };
  return (
    <div
      className="p-4 shadow-md flex flex-wrap flex-col justify-start"
      style={{ backgroundColor: `${colors.primary[400]}` }}
    >
      <div className="flex flex-col">
        <div className="flex items-start flex-row justify-between p-3">
          <h1>Door</h1>
          <Switch
            loading={loading}
            defaultValue={doorStatus}
            toggleSwitch={handleSwitchToggle}
          />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center flex-row justify-center p-3 ml-4">
          <LockButton />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="text-lg font-medium">
          Once tagged, please wait until the tag is beeping...
        </p>
        <div className="flex items-center flex-row justify-center p-4 bg-gray-400 my-7 gap-2 rounded-full">
          <FontAwesomeIcon icon={faTag} />
          <p>Record Tag</p>
        </div>
        <div className="overflow-y-scroll h-40">
          <div className="flex items-center flex-row justify-center p-4 ">
            <FontAwesomeIcon icon={faCircle} fontSize={10} className="pr-2" />
            <p className="text-md font-light">2023.4.18 08:58 close</p>
          </div>
          <div className="flex items-center flex-row justify-center p-4 ">
            <FontAwesomeIcon icon={faCircle} fontSize={10} className="pr-2" />
            <p className="text-md font-light">2023.4.18 08:56 open</p>
          </div>
          <div className="flex items-center flex-row justify-center p-4 ">
            <FontAwesomeIcon icon={faCircle} fontSize={10} className="pr-2" />
            <p className="text-md font-light">2023.4.18 06:36 close</p>
          </div>
          <div className="flex items-center flex-row justify-center p-4 ">
            <FontAwesomeIcon icon={faCircle} fontSize={10} className="pr-2" />
            <p className="text-md font-light">2023.4.18 06:35 open</p>
          </div>
          <div className="flex items-center flex-row justify-center p-4 ">
            <FontAwesomeIcon icon={faCircle} fontSize={10} className="pr-2" />
            <p className="text-md font-light">2023.4.17 06:36 close</p>
          </div>
          <div className="flex items-center flex-row justify-center p-4 ">
            <FontAwesomeIcon icon={faCircle} fontSize={10} className="pr-2" />
            <p className="text-md font-light">2023.4.17 06:35 open</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Door;
