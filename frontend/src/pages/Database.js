import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import base_url from "../services/DeviceService";
import DeviceTable from "../components/devices/DeviceTable";
import { CardTitle } from "reactstrap";

const Database = () => {
  const [devices, setDevices] = useState([]);

  //useEffect should call load from db method
  useEffect(() => {
    getAllDevicesFromServer();
  }, []);

  const updateDevices = (deviceId) => {
    console.log("updateDevices: ", deviceId);
    setDevices(devices.filter((device) => device.deviceId !== deviceId)); //
  };

  const getAllDevicesFromServer = () => {
    axios.get(`${base_url}/all`).then(
      (response) => {
        setDevices(response.data);
        console.log(response);
        console.log("!! All Devices loaded from Server !!", {
          position: "top-center",
        });
      },
      (error) => {
        console.log(
          "!! Something went wrong on Server. We are looking at it. !!"
        );
      }
    );
  };
  return (
    <div className>
      <CardTitle className="display-3">All Devices</CardTitle>
      {devices.length > 0 ? (
        <DeviceTable
          key={devices.deviceId}
          update={updateDevices}
          device={devices}
        />
      ) : (
        "No Devices Available to Show"
      )}
    </div>
  );
};

export default Database;
