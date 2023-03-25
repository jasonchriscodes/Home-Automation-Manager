import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Account from "./pages/Account";
import Analytics from "./pages/Analytics";
import Devices from "./pages/Devices";
import Home from "./pages/Home";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <RootLayout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/devices/:deviceId" element={<Devices />} />
          <Route path="/analytics:analyticId" element={<Analytics />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </RootLayout>
    </BrowserRouter>
  );
}

export default App;
