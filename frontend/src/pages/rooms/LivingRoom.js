import React from "react";
import Door from "../devices/Door";
import Light from "../devices/Light";
import Gas from "../devices/Gas";

const Livingroom = () => {
  return (
    <div className="h-full grid grid-cols-1 xs:grid-cols-1 lg:grid-cols-2 pb-20">
      <Light id="645c4856781e46b6e35c4fe4" />
      <Door />
      <Gas />
    </div>
  );
};

export default Livingroom;
