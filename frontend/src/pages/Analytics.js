import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "./../theme";
import { mockDataExpenses } from "./../data/mockData";
import { useTheme } from "@mui/material";

const Analytics = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    { field: "date", headerName: "Date", flex: 0.5 },
    {
      field: "light",
      headerName: "Light (in W)",
    },
    {
      field: "curtain",
      headerName: "Curtain (in W)",
    },
    {
      field: "door",
      headerName: "Door (in W)",
    },
    {
      field: "watering",
      headerName: "Watering (in W)",
    },
    {
      field: "bin",
      headerName: "Bin (in W)",
    },
    {
      field: "totalElectricityPerDay",
      headerName: "Total Electricity Per Day (in $)",
      flex: 0.5,
    },
    {
      field: "totalCostPerDay",
      headerName: "Total Cost Per Day (in $)",
      flex: 0.5,
    },
  ];

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
        <DataGrid
          rows={mockDataExpenses}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Analytics;
