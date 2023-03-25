import React from "react";
import { useParams } from "react-router-dom";

const Devices = () => {
  const { deviceId } = useParams();
  return <div>Devices / {deviceId}</div>;
};

export default Devices;
