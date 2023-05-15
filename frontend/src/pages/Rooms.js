import { Box, useTheme } from "@mui/material";
import axios from "axios";
import VectorMap, { Label, Layer, Tooltip } from "devextreme-react/vector-map";
import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { buildingData, roomsData } from "./../constants";
import base_url from "./../services/DeviceService";
import { tokens } from "./../theme";

const projection = {
  to: ([l, lt]) => [l / 100, lt / 100],
  from: ([x, y]) => [x * 100, y * 100],
};

const Rooms = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const location = useLocation();
  const [device, setDevice] = useState({});
  function customizeTooltip(arg) {
    if (arg.layer.name === "rooms") {
      return {
        text: `Devices On: ${arg.attribute("device")} / ${arg.attribute(
          "totalDevices"
        )}`,
      };
    }
    return null;
  }

  //-------------- Load data from server by Id
  const getDeviceFromServerById = () => {
    console.log("id in room: ", location.state.deviceId);
    axios.get(`${base_url}/id/${location.state.deviceId}`).then(
      (response) => {
        setDevice(response.data);
        console.log("!! Device Updated Successfully");
        console.log("response: ", response);
        console.log("response data: ", response.data);
        console.log("device in room: ", device);
        console.log("device status in room: ", device.status);
      },
      (error) => {
        console.log(
          "!! Something went wrong on Server. We are looking at it. !!"
        );
      }
    );
  };

  useEffect(() => {
    getDeviceFromServerById();
  }, []);

  return (
    <Box m="20px">
      <Box
        display="flex"
        // display="grid"
        // gridTemplateColumns="repeat(1, 1fr)"
        // gridAutoRows="140px"
        height="max-content"
        width="max-content"
        gap="20px"
      >
        <VectorMap
          className="h-1/2 w-full"
          maxZoomFactor={4}
          projection={projection}
        >
          <Layer
            dataSource={buildingData}
            hoverEnabled={false}
            name="building"
          ></Layer>
          <Layer
            dataSource={roomsData}
            name="rooms"
            borderWidth={1}
            color="transparent"
            onClick={() => navigate(`http://localhost:3000/rooms/${roomsData}`)}
            // how to take path property from constants
          >
            <Label enabled={true} dataField="name"></Label>
          </Layer>
          <Tooltip enabled={true} customizeTooltip={customizeTooltip}></Tooltip>
        </VectorMap>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap="20px"
        marginY="20px"
        style={{ backgroundColor: `${colors.primary[400]}` }}
      >
        <NavLink
          className="hover:text-[#3e4396] rounded-md p-2"
          to="bedroom"
          state={{ status: device.status }}
        >
          Bedroom
        </NavLink>
        <NavLink
          className="hover:text-[#3e4396] rounded-md p-2"
          to="kitchen"
          state={{ status: device.status }}
        >
          Kitchen
        </NavLink>
        <NavLink
          className="hover:text-[#3e4396] rounded-md p-2"
          to="livingroom"
          state={{ status: device.status }}
        >
          Livingroom
        </NavLink>
        <NavLink
          className="hover:text-[#3e4396] rounded-md p-2"
          to="office"
          state={{ status: device.status }}
        >
          Office
        </NavLink>
      </Box>
      <Outlet />
    </Box>
  );
};

export default Rooms;
