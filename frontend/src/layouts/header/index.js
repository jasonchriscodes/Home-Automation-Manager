import React from "react";
import {
  HiOutlineBell,
  HiOutlineChatAlt,
  HiOutlineSearch,
} from "react-icons/hi";
import { Popover } from "@headlessui/react";

const index = ({ children }) => {
  return (
    <div className="bg-white h-20 px-4 flex justify-between items-center border-b border-gray-200">
      <div className="relative">
        <HiOutlineSearch
          fontSize={20}
          className="text-gray-400 absolute top-1/2 -translate-y-1/2 left-3"
        />
        <input
          type="text"
          placeholder="Search..."
          className="text-sm focus:outline-none active:outline-none h-10 w-[24rem] border border-gray-300 rounded-md pr-4 pl-11"
        />
      </div>
      <div className="flex items-center gap-2 mr-2">
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button className="p-1.5 rounded-sm inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100">
                <HiOutlineChatAlt fontSize={24} />
              </Popover.Button>
            </>
          )}
        </Popover>
        <HiOutlineBell fontSize={24} />
      </div>
      {/* <div className="max-w-5xl flex-1 mx-auto py-4">{children}</div> */}
    </div>
  );
};

export default index;
