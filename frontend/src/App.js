import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Account from "./pages/Account";
import Analytics from "./pages/Analytics";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import HelpAndSupport from "./pages/HelpAndSupport";
import Logout from "./pages/Logout";
import Bedroom from "./pages/rooms/Bedroom";
import Kitchen from "./pages/rooms/Kitchen";
import LivingRoom from "./pages/rooms/LivingRoom";
import Office from "./pages/rooms/Office";
import Rooms from "./pages/Rooms";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Dashboard from "./pages/Dashboard";
import Calendar from "./pages/Calendar";
import Database from "./pages/Database";
import AddDevice from "./components/devices/AddDevice";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <RootLayout>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/rooms" element={<Rooms />}>
                <Route path="bedroom" element={<Bedroom />} />
                <Route path="kitchen" element={<Kitchen />} />
                <Route path="livingroom" element={<LivingRoom />} />
                <Route path="office" element={<Office />} />
              </Route>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/database" element={<Database />} />
              <Route path="/add" element={<AddDevice />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/helpandsupport" element={<HelpAndSupport />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/account" element={<Account />} />
            </Routes>
          </RootLayout>
        </BrowserRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
