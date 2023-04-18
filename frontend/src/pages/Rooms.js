import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

import VectorMap, { Layer, Tooltip, Label } from "devextreme-react/vector-map";

import { roomsData, buildingData } from "./../constants";

const projection = {
  to: ([l, lt]) => [l / 100, lt / 100],
  from: ([x, y]) => [x * 100, y * 100],
};

const Rooms = () => {
  const navigate = useNavigate();

  function customizeTooltip(arg) {
    if (arg.layer.name === "rooms") {
      return {
        text: `Devices On: ${arg.attribute("device")} / ${arg.attribute(
          "totalDevices"
        )}`,
      };
    }
    return null;
  }

  return (
    <div className="h-screen mx-5">
      <div className="flex justify-center">
        <VectorMap
          className="h-1/2 w-full"
          maxZoomFactor={4}
          projection={projection}
        >
          <Layer
            dataSource={buildingData}
            hoverEnabled={false}
            name="building"
          ></Layer>
          <Layer
            dataSource={roomsData}
            name="rooms"
            borderWidth={1}
            color="transparent"
            onClick={() => navigate(`http://localhost:3000/rooms/${roomsData}`)}
            // how to take path property from constants
          >
            <Label enabled={true} dataField="name"></Label>
          </Layer>
          <Tooltip enabled={true} customizeTooltip={customizeTooltip}></Tooltip>
        </VectorMap>
      </div>
      <div className="flex justify-center gap-3 mx-3 p-5">
        <NavLink className="hover:text-blue-400" to="bedroom">
          Bedroom
        </NavLink>
        <NavLink className="hover:text-blue-400" to="kitchen">
          Kitchen
        </NavLink>
        <NavLink className="hover:text-blue-400" to="livingroom">
          Livingroom
        </NavLink>
        <NavLink className="hover:text-blue-400" to="office">
          Office
        </NavLink>
      </div>
      <div className="flex-col">
        <Outlet />
      </div>
    </div>
  );
};

export default Rooms;
