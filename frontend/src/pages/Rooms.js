import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Rooms = () => {
  return (
    <div className="h-screen mx-12">
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
