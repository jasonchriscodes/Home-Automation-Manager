import React from "react";
import Bin from "../devices/Bin";
import Curtain from "../devices/Curtain";
import Door from "../devices/Door";
import Watering from "../devices/Watering";
import { Box } from "@mui/material";

const Livingroom = () => {
  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(12, 1fr)"
      gridAutoRows="140px"
      gap="20px"
    >
      <Box
        gridColumn="span 3"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Watering />
      </Box>
      <Box
        gridColumn="span 3"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Door />
      </Box>
      <Box
        gridColumn="span 3"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Bin />
      </Box>
      <Box
        gridColumn="span 3"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Curtain />
      </Box>
    </Box>
  );
};

export default Livingroom;
