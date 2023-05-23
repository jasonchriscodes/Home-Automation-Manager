import React from "react";
import Door from "../devices/Door";
import Light from "../devices/Light";

const Livingroom = () => {
  return (
    <div className="h-full grid grid-cols-1 xs:grid-cols-1 lg:grid-cols-2 pb-20">
      <Light />
      <Door />
    </div>
  );
};

export default Livingroom;
