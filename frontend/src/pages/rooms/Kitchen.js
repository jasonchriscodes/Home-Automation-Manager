import React from "react";
import Bin from "../devices/Bin";
import Light from "../devices/Light";

const Kitchen = () => {
  return (
    <div className="h-full grid grid-cols-1 xs:grid-cols-1 lg:grid-cols-2 pb-20">
      <Light />
      <Bin />
    </div>
  );
};

export default Kitchen;
