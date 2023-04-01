import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed } from "@fortawesome/free-solid-svg-icons";
import { faKitchenSet } from "@fortawesome/free-solid-svg-icons";
import { faCouch } from "@fortawesome/free-solid-svg-icons";
import { faLaptop } from "@fortawesome/free-solid-svg-icons";
import Toogle from "./../components/Toggle";

const Home = () => {
  return (
    <div className="h-screen grid grid-cols-1 xs:grid-cols-1 lg:grid-cols-2 pb-20">
      <div className="icon h-17 flex flex-col justify-center items-center px-4 shadow-md hover:bg-[#DBEAFE] -z-1 gap-10">
        <Link to="/rooms/bedroom">
          <div className="flex space-x-12 items-center">
            <div className="flex-col mr-10">
              <h1 className="text-4xl">Bed Room</h1>
              <h3 className="text-xl">4 / 6 devices ON</h3>
            </div>
            <FontAwesomeIcon icon={faBed} fontSize={100} />
          </div>
        </Link>
        <Toogle className="z-10" />
      </div>
      <div className="icon h-17 flex flex-col justify-center items-center px-4 shadow-md hover:bg-[#DBEAFE] -z-1 gap-10">
        <Link to="/rooms/bedroom">
          <div className="flex space-x-12 items-center">
            <div className="flex-col mr-10">
              <h1 className="text-4xl">Kitchen</h1>
              <h3 className="text-xl">3 / 4 devices ON</h3>
            </div>
            <FontAwesomeIcon icon={faKitchenSet} fontSize={100} />
          </div>
        </Link>
        <Toogle className="z-10" />
      </div>
      <div className="icon h-17 flex flex-col justify-center items-center px-4 shadow-md hover:bg-[#DBEAFE] -z-1 gap-10">
        <Link to="/rooms/bedroom">
          <div className="flex space-x-12 items-center">
            <div className="flex-col mr-10">
              <h1 className="text-4xl">Living Room</h1>
              <h3 className="text-xl">0 / 4 devices ON</h3>
            </div>
            <FontAwesomeIcon icon={faCouch} fontSize={100} />
          </div>
        </Link>
        <Toogle className="z-10" />
      </div>
      <div className="icon h-17 flex flex-col justify-center items-center px-4 shadow-md hover:bg-[#DBEAFE] -z-1 gap-10">
        <Link to="/rooms/bedroom">
          <div className="flex space-x-12 items-center">
            <div className="flex-col mr-10">
              <h1 className="text-4xl">Office</h1>
              <h3 className="text-xl">2 / 3 devices ON</h3>
            </div>
            <FontAwesomeIcon icon={faLaptop} fontSize={100} />
          </div>
        </Link>
        <Toogle className="z-10" />
      </div>
    </div>
  );
};

export default Home;
