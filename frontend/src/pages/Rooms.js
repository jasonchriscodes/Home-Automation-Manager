import React from "react";
import { useParams } from "react-router-dom";

const Rooms = () => {
  const { roomId } = useParams();
  return <div>Rooms / {roomId}</div>;
};

export default Rooms;
