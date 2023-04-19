import { useState } from "react";
import { useTheme } from "@mui/material";
import { tokens } from "./../theme";

export default function Toggle() {
  const [enabled, setEnabled] = useState(false);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

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
              setEnabled(!enabled);
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
