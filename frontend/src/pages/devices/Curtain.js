import React from "react";
import CurtainAnimation from "../../components/CurtainAnimation";
import Switch from "./../../components/Switch";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";

const Curtain = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <div
      className="p-4 shadow-md flex flex-wrap flex-col justify-between"
      style={{ backgroundColor: `${colors.primary[400]}` }}
    >
      <div className="flex-col">
        <div className="flex items-start flex-row justify-between p-3">
          <h1>Curtain</h1>
          <Switch />
        </div>
      </div>
      <div className="flex-col">
        <CurtainAnimation />
      </div>
    </div>
  );
};

export default Curtain;
