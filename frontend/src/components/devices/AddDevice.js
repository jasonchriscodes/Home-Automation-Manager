import { Box, useTheme } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  Input,
  Container,
  Button,
} from "reactstrap";
import { tokens } from "../../theme";
import base_url from "./../../services/DeviceService";
const AddDevice = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [device, setDevice] = useState({});

  const handleForm = (param) => {
    postData(device);
    param.preventDefault();
  };

  const postData = (data) => {
    axios.post(`${base_url}/create`, data).then(
      (response) => {
        console.log("!! New Device Posted Successfully");
      },
      (error) => {
        console.log(
          "!! Something went wrong on Server. We are looking at it. !!"
        );
      }
    );
  };

  return (
    <Card body inverse color="info" className="shadow-md">
      <CardBody className="flex flex-col">
        <form onSubmit={handleForm}>
          <CardTitle className="text-black">New Device</CardTitle>
          <Input
            className="border-2 text-black"
            placeholder="Enter the Device Name here."
            onChange={(e) => {
              setDevice({ ...device, deviceName: e.target.value });
            }}
          />
          <br />
          <Input
            className="border-2 text-black"
            placeholder="Enter the Room Name here."
            onChange={(e) => {
              setDevice({ ...device, room: e.target.value });
            }}
          />
          <Input
            className="border-2 text-black"
            placeholder="Enter the Device Type here."
            onChange={(e) => {
              setDevice({ ...device, device: e.target.value });
            }}
          />
          <Input
            className="border-2 text-black"
            placeholder="Enter the Device Status here."
            onChange={(e) => {
              setDevice({ ...device, status: e.target.value });
            }}
          />
          <br />
          <Container>
            <Button
              type="submit"
              color="success"
              style={{ marginRight: 15 + "px" }}
              className="text-white bg-green-600"
            >
              Post Device
            </Button>
            <Button
              type="reset"
              color="warning"
              className="text-white bg-red-600"
            >
              Clear
            </Button>
          </Container>
        </form>
      </CardBody>
    </Card>
  );
};
export default AddDevice;
