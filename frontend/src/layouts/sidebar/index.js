import React, { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { NavLink, useLocation } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineAppstore } from "react-icons/ai";
import { SlSettings } from "react-icons/sl";
import { MdOutlineBedroomParent, MdMenu } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import { ImTable } from "react-icons/im";
import { HiOutlineQuestionMarkCircle, HiOutlineLogout } from "react-icons/hi";
import SubMenu from "./SubMenu";
import { useTheme } from "@mui/material";
import { ColorModeContext, tokens } from "./../../theme";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";

const imageFolder = "/assets";

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  let isTab = useMediaQuery({ query: "(max-width: 768px)" });
  const { pathname } = useLocation();

  console.log("isTab=" + isTab);
  // sidebar open state
  const [isOpen, setIsOpen] = useState(isTab ? false : true);

  const SidebarAnimation = isTab
    ? // mobile view
      {
        open: {
          x: 0,
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          x: -250,
          width: 0,
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
      }
    : {
        // system view
        open: {
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          width: "4rem",
          transition: {
            damping: 40,
          },
        },
      };

  useEffect(() => {
    if (isTab) {
      // mobile
      setIsOpen(false);
    } else {
      // laptop
      setIsOpen(true);
    }
  }, [isTab]);

  // pathname change -> close sidebar (only mobile view)
  useEffect(() => {
    isTab && setIsOpen(false);
  }, [pathname]);

  const subMenusList = [
    {
      name: "rooms",
      icon: MdOutlineBedroomParent,
      menus: ["bedroom", "kitchen", "livingroom", "office"],
    },
  ];

  return (
    <div className="h-screen sticky top-0">
      <div
        onClick={() => setIsOpen(false)}
        className={`md:hidden fixed inset-0 max-h-screen z-[998] bg-black/50 ${
          isOpen ? "block" : "hidden"
        }`}
      ></div>
      <motion.div
        variants={SidebarAnimation}
        initial={{ x: isTab ? -250 : 0 }}
        animate={isOpen ? "open" : "closed"}
        className="text-gray shadow-xl z-[999] w-[16rem] max-w-[16rem] h-screen overflow-hidden md:relative fixed"
        style={{ backgroundColor: `${colors.primary[400]}` }}
      >
        {/* app logo */}
        <div className="flex items-center gap-2.5 font-medium border-b border-slate-300 py-3 mx-3">
          <img
            onClick={colorMode.toggleColorMode}
            style={{ width: "55px", height: "auto" }}
            src={
              theme.palette.mode === "dark"
                ? `${imageFolder}/logo-dark.png`
                : `${imageFolder}/logo.png`
            }
            alt="app-logo"
            width={45}
          />
          <span className="text-xl whitespace-pre"> Auto Home</span>
        </div>

        {/* menus */}
        <div className="flex flex-col h-full">
          <ul
            className={
              isOpen
                ? "whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col max-h-full gap-1 font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100 h-[63%]"
                : "whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col max-h-full gap-1 font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100"
            }
          >
            <li>
              <NavLink to="/" className={"link"}>
                <AiOutlineAppstore size={23} className="min-w-max" />
                Home
              </NavLink>
            </li>

            {/* submenus */}
            {isOpen && (
              <div className="border-y py-5 border-slate-300">
                <small className="pl-3 text-slate-500 inline-block mb-2">
                  Device menus
                </small>
                {subMenusList?.map((menu) => (
                  <div key={menu.name} className="flex flex-col gap-1">
                    <SubMenu data={menu} />
                  </div>
                ))}
              </div>
            )}

            <li>
              <NavLink to="/dashboard" className={"link"}>
                <TbReportAnalytics size={23} className="min-w-max" />
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/calendar" className={"link"}>
                <CalendarTodayOutlinedIcon size={23} className="min-w-max" />
                Calendar
              </NavLink>
            </li>
            <li>
              <NavLink to="/analytics" className={"link"}>
                <ImTable size={23} className="min-w-max" />
                Analytics
              </NavLink>
            </li>
            <li>
              <NavLink to="/settings" className={"link"}>
                <SlSettings size={23} className="min-w-max" />
                Settings
              </NavLink>
            </li>
            <li>
              <NavLink to="/helpandsupport" className={"link"}>
                <HiOutlineQuestionMarkCircle size={23} className="min-w-max" />
                Help & Support
              </NavLink>
            </li>
            <li>
              <NavLink to="/logout" className={"link"}>
                <HiOutlineLogout size={23} className="min-w-max" />
                Logout
              </NavLink>
            </li>
          </ul>
          <div
            className={
              isOpen
                ? "flex-1 text-sm z-50  max-h-10 my-auto  whitespace-pre   w-full  font-medium"
                : "flex-1 text-sm z-50 justify-start my-auto  whitespace-pre   w-full  font-medium"
            }
          >
            <div className="flex border-y border-slate-300 pl-4 pr-4 pt-2 pb-2 items-center justify-start gap-6 ">
              <img
                src={`${imageFolder}/profile-image.jpg`}
                className="w-12 h-12 rounded-full"
                alt="user-profile"
              />
              <p>Jason Christian</p>
            </div>
          </div>
        </div>

        {/* control button */}
        <motion.div
          animate={
            isOpen
              ? {
                  x: 0,
                  y: 0,
                  rotate: 0,
                }
              : {
                  x: 0,
                  y: 0,
                  rotate: 180,
                }
          }
          transition={{
            duration: 0,
          }}
          onClick={() => setIsOpen(!isOpen)}
          className="absolute w-fit h-fit z-50 right-5 bottom-5 cursor-pointer
          border-dark-purple border-2 rounded-full hover:bg-blue-100 md:block hidden
          "
        >
          <IoIosArrowBack size={25} />
        </motion.div>
      </motion.div>
      <div
        className="m-3 md-hidden lg:hidden xl:hidden 2xl:hidden"
        onClick={() => setIsOpen(true)}
      >
        <MdMenu size={25} />
      </div>
    </div>
  );
};

export default Sidebar;
