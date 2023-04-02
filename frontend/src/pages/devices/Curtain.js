import React from "react";
import Switch from "../../components/Switch";

const Curtain = () => {
  return (
    <div className="p-4 shadow-md flex flex-wrap flex-col justify-around">
      <div className="flex items-center flex-row justify-between p-3">
        <h1>Curtain</h1>
        <Switch />
      </div>
    </div>
  );
};

export default Curtain;
