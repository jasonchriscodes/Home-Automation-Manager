import React from "react";
import { motion } from "framer-motion";

const Sidebar = () => {
  const SidebarAnimation = {
    // System view
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

  return (
    <div>
      <motion.div
        variants={SidebarAnimation}
        animate={"open"}
        className="bg-white text-gray shadow-xl z-[999] w-[16rem] max-w-[16rem] h-screen overflow-hidden md:relative fixed"
      ></motion.div>
    </div>
  );
};

export default Sidebar;
