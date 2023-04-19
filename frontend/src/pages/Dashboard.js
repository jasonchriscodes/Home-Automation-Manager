import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="h-screen mx-5">
      <div className="flex justify-center gap-3 mx-3 p-5">
        <NavLink className="hover:text-blue-400" to="bar">
          Bar
        </NavLink>
        <NavLink className="hover:text-blue-400" to="line">
          Pie
        </NavLink>
        <NavLink className="hover:text-blue-400" to="pie">
          Line
        </NavLink>
      </div>
      <div className="flex-col">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
