import { useEffect, useState } from "react";
import { useTheme } from "@mui/material";
import { tokens } from "./../theme";
import axios from "axios";
import base_url from "./../services/DeviceService";
import { useLocation } from "react-router-dom";

export default function Switch(props) {
  const [enabled, setEnabled] = useState(false);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const location = useLocation();
  const [device, setDevice] = useState({});
  const [deviceStatus, setDeviceStatus] = useState(location.state.status);

  const updateDeviceFromServerById = (newStatus) => {
    const searchParams = new URLSearchParams(location.search);

    // console.log("id: ", props.param);
    axios
      .put(`${base_url}/update/${searchParams.get("deviceId")}`, {
        status: newStatus,
      })
      .then(
        (response) => {
          // setDevice(response.data);
          // setDeviceStatus(response.data.status);
          // console.log("!! Device Updated Successfully in Light.js");
          // console.log(
          //   `location deviceid in Light.js: ${location.state.deviceId}`
          // );
          // console.log(`Response in Light.js: ${response}`);
          // console.log(`Response data in Light.js: ${response.data}`);
          // console.log(`Response status in Light.js: ${response.data.status}`);
          setEnabled(!enabled);
        },
        (error) => {
          console.log(
            "!! Something went wrong on Server. We are looking at it. !!"
          );
        }
      );
    // console.log(`Device in Light.js: ${device}`);
    // console.log(`Device status in Light.js: ${device.status}`);
    // console.log(`DeviceStatus in Light.js: ${deviceStatus}`);
  };

  useEffect(() => {
    if (deviceStatus === "True") {
      setEnabled(true);
    } else {
      setEnabled(false);
    }
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden">
      <div className="flex">
        <div className="items-center mr-2">
          <span
            className="ml-2 text-sm font-medium"
            style={{ color: `${colors.redAccent[400]}` }}
          >
            OFF
          </span>
        </div>
        <label class="inline-flex relative items-center mr-5 cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={enabled}
            readOnly
          />
          <div
            onClick={() => {
              updateDeviceFromServerById(enabled ? "False" : "True");
            }}
            className="w-11 h-6 bg-gray-400 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
          ></div>
          <span
            className="ml-2 text-sm font-medium"
            style={{ color: `${colors.greenAccent[400]}` }}
          >
            ON
          </span>
        </label>
      </div>
    </div>
  );
}
