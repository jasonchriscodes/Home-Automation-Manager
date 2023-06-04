import React from "react";
import Bin from "../devices/Bin";
import Watering from "../devices/Watering";

const Kitchen = () => {
  return (
    <div className="h-full grid grid-cols-1 xs:grid-cols-1 lg:grid-cols-2 pb-20">
      <Bin />
      <Watering />
    </div>
  );
};

export default Kitchen;
