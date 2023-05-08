import React, { useEffect, useMemo, useState } from "react";
import { Box, Button, Fab } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import axios from "axios";
import base_url from "../../services/DeviceService";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import DeviceActions from "./DeviceActions";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import { Card, CardBody, CardText, CardTitle, Container } from "reactstrap";

const DeviceTable = ({ device, update }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [data, setData] = useState([]);
  const [pageSize, setPageSize] = useState(25);
  const [rowId, setRowId] = useState(null);
  const columns = useMemo(
    () => [
      { field: "deviceId", headerName: "Device ID", width: 200 },
      { field: "deviceName", headerName: "Device Name", editable: true },
      {
        field: "room",
        headerName: "Room",
        editable: true,
      },
      {
        field: "device",
        headerName: "Device Type",
        editable: true,
      },
      {
        field: "status",
        headerName: "Status",
        type: "boolean",
        editable: true,
        renderCell: (params) => {
          return params.value ? (
            <ToggleOnIcon style={{ fill: "green" }} />
          ) : (
            <ToggleOffIcon style={{ fill: "red" }} />
          );
        },
      },
      {
        field: "actions",
        headerName: "Actions",
        type: "actions",
        renderCell: (params) => (
          <DeviceActions {...{ params, rowId, setRowId }} />
        ),
      },
      {
        field: "deleteActions",
        headerName: "Actions",
        type: "actions",
        renderCell: (params) => (
          // <DeviceActions {...{ params, rowId, setRowId }} />
          <Fab
            color="danger"
            onClick={() => {
              deleteDevice(params);
            }}
          >
            Delete
          </Fab>
          // <Button>Delete<Button/>
        ),
      },
      // {
      //   field: "actions",
      //   headerName: "Actions",
      //   width: 400,
      //   renderCell: (params) => {
      //     return (
      //       <div>
      //         <Link
      //           className="btn btn-primary"
      //           to={{ pathname: "/update", param: device.deviceId }}
      //           style={{ marginRight: 15 + "px" }}
      //         >
      //           Edit
      //         </Link>
      //         <Button
      //           color="danger"
      //           onClick={() => {
      //             deleteDevice(device.deviceId);
      //           }}
      //         >
      //           Delete
      //         </Button>
      //       </div>
      //     );
      //   },
      // },
    ],
    [rowId]
  );
  const getDeviceData = async () => {
    try {
      const data = await axios.get("http://localhost:8080/all");
      console.log(data.data);
      setData(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDeviceData();
  }, []);

  const deleteDevice = (params) => {
    console.log("params: ", params.row.deviceId);
    alert("params: ", params.row.deviceId);
    axios.delete(`${base_url}/delete/${params.row.deviceId}`).then(
      (response) => {
        console.log(
          "!! Device " + params.row.deviceId + " Deleted Successfuly !!"
        );
        update(params.row.deviceId);
      },
      (error) => {
        console.log(
          "!! Something went wrong on Server. We are looking at it. !!"
        );
      }
    );
  };

  return (
    <Box m="20px">
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[900],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[900],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <Link to="/add">
          <Button sx={{ backgroundColor: colors.blueAccent[900] }}>
            Add New Device
          </Button>
        </Link>
        <DataGrid
          getRowId={(row) => row.deviceId}
          rows={data}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          rowPerPageOptions={[5, 10, 20]}
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          getRowSpacing={(params) => ({
            top: params.isFirstVisible ? 0 : 5,
            bottom: params.isLastVisible ? 0 : 5,
          })}
          onCellEditCommit={(params) => setRowId(params.id)}
        />
      </Box>
      {/* <h1>test</h1>
      {data.map((item) => {
        return <p>{item.deviceName}</p>;
      })} */}
      {/* <Card body inverse color="info">
        <CardBody>
          <CardTitle className="font-weight-bold">
            {device.deviceName}
          </CardTitle>
          <CardText>{device.room}</CardText>
          <CardText>{device.device}</CardText>
          <CardText>{device.status}</CardText>
          <Container>
            <Link
              className="btn btn-primary"
              to={{ pathname: "/update", param: device.deviceId }}
              style={{ marginRight: 15 + "px" }}
            >
              Edit
            </Link>

            <Button
              color="danger"
              onClick={() => {
                deleteDevice(device.deviceId);
              }}
            >
              Delete
            </Button>
          </Container>
        </CardBody>
      </Card> */}
    </Box>
  );
};
export default DeviceTable;
