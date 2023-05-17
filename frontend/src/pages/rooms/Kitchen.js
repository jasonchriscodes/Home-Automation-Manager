import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Bin from "../devices/Bin";
import Light from "../devices/Light";

const Kitchen = () => {
  const location = useLocation();
  useEffect(() => {
    console.log("location in kitchen.js: ", location);
    console.log("Device status in kitchen.js: ", location.state);
  }, []);
  return (
    <div className="h-full grid grid-cols-1 xs:grid-cols-1 lg:grid-cols-2 pb-20">
      <Light status={location.state?.status} />
      <Bin />
    </div>
  );
};

export default Kitchen;
