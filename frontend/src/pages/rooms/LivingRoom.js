import React from "react";
import Bin from "../devices/Bin";
import Curtain from "../devices/Curtain";
import Door from "../devices/Door";
import Watering from "../devices/Watering";

const Livingroom = () => {
  return (
    <div className="h-full grid grid-cols-1 xs:grid-cols-1 lg:grid-cols-2 pb-20">
      <Watering />
      <Door />
      <Bin />
      <Curtain />
    </div>
  );
};

export default Livingroom;
