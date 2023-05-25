import React from "react";
import Bin from "../devices/Bin";

const Kitchen = () => {
  return (
    <div className="h-full grid grid-cols-1 xs:grid-cols-1 lg:grid-cols-2 pb-20">
      <Bin />
    </div>
  );
};

export default Kitchen;
