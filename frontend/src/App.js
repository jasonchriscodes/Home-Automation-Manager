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

function App() {
  return (
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
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/helpandsupport" element={<HelpAndSupport />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </RootLayout>
    </BrowserRouter>
  );
}

export default App;
