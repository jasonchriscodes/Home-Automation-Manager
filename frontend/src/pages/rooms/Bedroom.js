import React from "react";
import Curtain from "../devices/Curtain";
import Light from "../devices/Light";

const Bedroom = () => {
  return (
    <div className="h-full grid grid-cols-1 xs:grid-cols-1 lg:grid-cols-2 pb-20">
      <Light />
      <Curtain />
    </div>
  );
};

export default Bedroom;
