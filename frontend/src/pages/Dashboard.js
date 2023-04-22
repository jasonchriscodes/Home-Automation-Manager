import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "./../theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import VerticalShadesIcon from "@mui/icons-material/VerticalShades";
import SensorDoorIcon from "@mui/icons-material/SensorDoor";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import DeleteIcon from "@mui/icons-material/Delete";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import LineChart from "./dashboard/LineChart";
import StatBox from "./dashboard/StatBox";
import ProgressCircle from "./dashboard/ProgressCircle";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box display="flex-column">
          <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>
            Today's Report
          </Typography>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="310 W"
            subtitle="Light Consumption"
            progress="0.75"
            increase="+14%"
            icon={
              <LightbulbIcon
                sx={{ color: colors.blueAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="250 W"
            subtitle="Curtain Consumption"
            progress="0.50"
            increase="+21%"
            icon={
              <VerticalShadesIcon
                sx={{ color: colors.blueAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="165 W"
            subtitle="Door Consumption"
            progress="0.30"
            increase="+5%"
            icon={
              <SensorDoorIcon
                sx={{ color: colors.blueAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="359 W"
            subtitle="Watering Consumption"
            progress="0.80"
            increase="+43%"
            icon={
              <WaterDropIcon
                sx={{ color: colors.blueAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="130 W"
            subtitle="Bin Consumption"
            progress="0.80"
            increase="+43%"
            icon={
              <DeleteIcon
                sx={{ color: colors.blueAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="1,214 W"
            subtitle="Total Energy Consumption"
            progress="0.80"
            increase="+43%"
            icon={
              <ElectricBoltIcon
                sx={{ color: colors.blueAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 6"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="$277.8846"
            subtitle="Total Cost Consumption"
            progress="0.80"
            increase="+43%"
            icon={
              <AttachMoneyIcon
                sx={{ color: colors.blueAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Electricity Bill
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.blueAccent[500]}
              >
                $5000
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.blueAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>

        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
            Comparison Energy Consumption
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="125" />
            <Typography
              variant="h5"
              color={colors.blueAccent[500]}
              sx={{ mt: "15px" }}
            >
              $2000 higher than last month
            </Typography>
            <Typography>
              Includes light, curtain, door, watering bin costs
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
