import React from "react";
import Bin from "../devices/Bin";
import Light from "../devices/Light";
import { Box } from "@mui/material";

const Kitchen = () => {
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
        <Light />
      </Box>
      <Box
        gridColumn="span 3"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Bin />
      </Box>
    </Box>
  );
};

export default Kitchen;
