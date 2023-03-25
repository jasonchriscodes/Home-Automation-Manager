import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowBack } from "react-icons/io";

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

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <motion.div
        variants={SidebarAnimation}
        animate={isOpen ? "open" : "closed"}
        className="bg-white text-gray shadow-xl z-[999] w-[16rem] max-w-[16rem] h-screen overflow-hidden md:relative fixed"
      >
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="absolute w-fit h-fit z-50 right-2 bottom-5 cursor-pointer
          border-dark-purple border-2 rounded-full hover:bg-blue-100 md:block hidden
          "
        >
          <IoIosArrowBack size={25} />
        </div>
      </motion.div>
    </div>
  );
};

export default Sidebar;
