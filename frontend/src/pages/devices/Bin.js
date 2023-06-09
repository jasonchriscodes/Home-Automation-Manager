import Switch from "./../../components/Switch";
import BinCalendar from "../../components/BinCalendar";
import { useEffect, useState } from "react";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";

const Bin = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isOpen, setIsOpen] = useState(false);
  const [binStatus, setBinStatus] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchBinDevice();
  }, []);

  const fetchBinDevice = async () => {
    const response = await fetch(
      "http://localhost:8080/devices/6469d505077d45277bce9e51"
    );
    const responseData = await response.json();

    setBinStatus(responseData.status === "on" ? true : false);
  };

  const handleSwitchToggle = async (value) => {
    console.log(value);

    setLoading(true);
    // Fetch the API to toggle the Switch
    const response = await fetch(
      "http://localhost:8080/devices/6469d505077d45277bce9e51/status",
      {
        method: "PUT",
        body: value ? "on" : "off",
      }
    );

    const responseData = await response.json();

    setBinStatus(responseData.status === "on" ? true : false);

    setLoading(false);
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const gradientStart = isOpen
    ? "from-red-500 via-red-600 bg-pos-0"
    : "from-blue-800 via-blue-600 bg-pos-0";
  const gradientEnd = isOpen
    ? "to-red-400 bg-pos-100"
    : "to-blue-400 bg-pos-100";
  return (
    <div
      className="p-4 shadow-md flex flex-wrap flex-col justify-between"
      style={{ backgroundColor: `${colors.primary[400]}` }}
    >
      <div className="flex-col">
        <div className="flex items-start flex-row justify-between p-3">
          <h1>Bin</h1>
          <Switch
            loading={loading}
            defaultValue={binStatus}
            toggleSwitch={handleSwitchToggle}
          />
        </div>
        <div className="flex items-start flex-row justify-center p-3">
          <h1 className="text-3xl font-bold">Set time for scrap collections</h1>
        </div>
      </div>
      <div className="flex-col">
        <div className="flex items-start flex-row justify-center p-3 gap-12">
          <BinCalendar />
        </div>
        <div className="flex items-start flex-row justify-center p-3 gap-12">
          <button
            onClick={handleClick}
            className={`bg-gradient-to-r ${gradientStart} ${gradientEnd} text-white px-12 py-5 rounded-md transition-all duration-500`}
            style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}
          >
            Set time
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bin;
