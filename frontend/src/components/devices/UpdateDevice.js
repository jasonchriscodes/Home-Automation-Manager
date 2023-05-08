import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  Input,
  Container,
  Button,
} from "reactstrap";
import base_url from "./../../services/DeviceService";

const UpdateDevice = (props) => {
  const [device, setDevice] = useState({});
  //-------------- Load data from server by Id
  const getDeviceFromServerById = () => {
    // console.log("id: ", props.param);
    axios.get(`${base_url}/id/${props.location.param}`).then(
      (response) => {
        setDevice(response.data);
        console.log("!! Device Updated Successfully");
        console.log(`${props.location.param}`);
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

  //-------------- Posting the data to server
  const handleForm = (param) => {
    putData(device);
    param.preventDefault();
  };

  const putData = (data) => {
    axios.put(`${base_url}/update`, data).then(
      (response) => {
        console.log("!! Device Updated Successfully");
      },
      (error) => {
        console.log(
          "!! Something went wrong on Server. We are looking at it. !!"
        );
      }
    );
  };

  return (
    <Card body inverse color="info">
      <CardBody>
        <form onSubmit={handleForm}>
          <CardTitle className="text-black">Update Device</CardTitle>
          <Input
            className="border-2 text-black"
            placeholder="Enter the Device Name here."
            value={device.deviceName}
            onChange={(e) => {
              setDevice({ ...device, deviceName: e.target.value });
            }}
          />
          <br />
          <Input
            className="border-2 text-black"
            placeholder="Enter the Room Name here."
            value={device.room}
            onChange={(e) => {
              setDevice({ ...device, room: e.target.value });
            }}
          />
          <Input
            className="border-2 text-black"
            placeholder="Enter the Device Type here."
            value={device.device}
            onChange={(e) => {
              setDevice({ ...device, device: e.target.value });
            }}
          />
          <Input
            className="border-2 text-black"
            placeholder="Enter the Device Status here."
            value={device.status}
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
              Update Device
            </Button>
            <Button
              type="reset"
              color="warning"
              className="text-white bg-red-600"
              onClick={getDeviceFromServerById}
            >
              Clear
            </Button>
          </Container>
        </form>
      </CardBody>
    </Card>
  );
};
export default UpdateDevice;
