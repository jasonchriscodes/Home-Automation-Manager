import React from "react";
import Curtain from "../devices/Curtain";
import Light from "../devices/Light";
import { Box } from "@mui/material";

const Office = () => {
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
        <Curtain />
      </Box>
      <Box
        gridColumn="span 3"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Light />
      </Box>
    </Box>
  );
};

export default Office;
