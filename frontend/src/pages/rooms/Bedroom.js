import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Curtain from "../devices/Curtain";
import Light from "../devices/Light";
import base_url from "./../../services/DeviceService";
import axios from "axios";

const Bedroom = () => {
  const location = useLocation();

  const [device, setDevice] = useState({});



  const getDeviceFromServerById = () => {
    // console.log("id: ", props.param);
    axios.get(`${base_url}/id/${location.state.deviceId}`).then(
      (response) => {
        setDevice(response.data);
        console.log("!! Device Updated Successfully");
        console.log(`${location.state.deviceId}`);
      },
      (error) => {
        console.log(
          "!! Something went wrong on Server. We are looking at it. !!"
        );
      }
    );
  };
  return (
    <div className="h-full grid grid-cols-1 xs:grid-cols-1 lg:grid-cols-2 pb-20">
      <Light />
      <Curtain />
    </div>
  );
};

export default Bedroom;
