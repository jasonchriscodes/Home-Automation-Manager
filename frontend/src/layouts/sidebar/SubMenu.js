import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { NavLink, useLocation } from "react-router-dom";

const SubMenu = ({ data }) => {
  const { pathname } = useLocation();
  return (
    <>
      <li className={`link ${pathname.includes(data.name) && "text-blue-600"}`}>
        <data.icon size={23} className="min-w-max" />
        <p className="capitalize flex-1">{data.name}</p>
        <IoIosArrowDown className="" />
      </li>
      <ul className="flex flex-col pl-14 text=[0.8rem] font-normal overflow-hidden">
        {data.menus.map((menu) => (
          <li key={menu}>
            {/* 
            /devices/light 
            /devices/curtain 
            */}
            <NavLink
              to={`/${data.name}/${menu}`}
              className="link !bg-transparent capitalize"
            >
              {menu}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SubMenu;
