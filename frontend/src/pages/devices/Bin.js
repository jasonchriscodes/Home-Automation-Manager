import Switch from "./../../components/Switch";
import Calendar from "../../components/Calendar";
import { useState } from "react";

const Bin = () => {
  const [isOpen, setIsOpen] = useState(false);

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
    <div className="p-4 shadow-md flex flex-wrap flex-col justify-between bg-white">
      <div className="flex-col">
        <div className="flex items-start flex-row justify-between p-3">
          <h1>Bin</h1>
          <Switch />
        </div>
        <div className="flex items-start flex-row justify-center p-3">
          <h1 className="text-3xl font-bold">Set time for scrap collections</h1>
        </div>
      </div>
      <div className="flex-col">
        <div className="flex items-start flex-row justify-center p-3 gap-12">
          <Calendar />
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
