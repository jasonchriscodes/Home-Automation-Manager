import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const SubMenu = ({ data }) => {
  const { pathname } = useLocation();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <li
        className={`link ${pathname.includes(data.name) && "text-blue-600"}`}
        onClick={() => navigate("/rooms")}
      >
        <data.icon size={23} className="min-w-max" />
        <p className="capitalize flex-1">{data.name}</p>
        <IoIosArrowDown
          onClick={() => setSubMenuOpen(!subMenuOpen)}
          className={`${subMenuOpen && "rotate-180"} duration-200`}
        />
      </li>
      <motion.ul
        animate={
          subMenuOpen
            ? {
                height: "fit-content",
              }
            : {
                height: 0,
              }
        }
        className="flex flex-col pl-14 text=[0.8rem] font-normal overflow-hidden h-0"
      >
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
      </motion.ul>
    </>
  );
};

export default SubMenu;
