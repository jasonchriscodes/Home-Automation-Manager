import React from "react";
import LockButton from "../../components/LockButton";
import Switch from "./../../components/Switch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const Door = () => {
  return (
    <div className="p-4 shadow-md flex flex-wrap flex-col justify-start bg-white">
      <div className="flex flex-col">
        <div className="flex items-start flex-row justify-between p-3">
          <h1>Door</h1>
          <Switch />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center flex-row justify-center p-3 ml-4">
          <LockButton />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="text-lg font-medium">
          Once tagged, please wait until the tag is beeping...
        </p>
        <div className="flex items-center flex-row justify-center p-4 bg-gray-400 my-7 gap-2 rounded-full">
          <FontAwesomeIcon icon={faTag} />
          <p>Record Tag</p>
        </div>
        <div className="overflow-y-scroll h-40">
          <div className="flex items-center flex-row justify-center p-4 ">
            <FontAwesomeIcon icon={faCircle} fontSize={10} className="pr-2" />
            <p className="text-md font-light">2023.4.18 08:58 close</p>
          </div>
          <div className="flex items-center flex-row justify-center p-4 ">
            <FontAwesomeIcon icon={faCircle} fontSize={10} className="pr-2" />
            <p className="text-md font-light">2023.4.18 08:56 open</p>
          </div>
          <div className="flex items-center flex-row justify-center p-4 ">
            <FontAwesomeIcon icon={faCircle} fontSize={10} className="pr-2" />
            <p className="text-md font-light">2023.4.18 06:36 close</p>
          </div>
          <div className="flex items-center flex-row justify-center p-4 ">
            <FontAwesomeIcon icon={faCircle} fontSize={10} className="pr-2" />
            <p className="text-md font-light">2023.4.18 06:35 open</p>
          </div>
          <div className="flex items-center flex-row justify-center p-4 ">
            <FontAwesomeIcon icon={faCircle} fontSize={10} className="pr-2" />
            <p className="text-md font-light">2023.4.17 06:36 close</p>
          </div>
          <div className="flex items-center flex-row justify-center p-4 ">
            <FontAwesomeIcon icon={faCircle} fontSize={10} className="pr-2" />
            <p className="text-md font-light">2023.4.17 06:35 open</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Door;
