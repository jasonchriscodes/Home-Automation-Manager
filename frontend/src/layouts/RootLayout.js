import Sidebar from "./sidebar";
import Header from "./header/Header";
import Body from "./body";
import { useLocation } from "react-router-dom";
import { NAVBAR_TEXTS } from "./../constants";

function RootLayout({ children }) {
  const location = useLocation();
  const title = NAVBAR_TEXTS.find((el) => el.page === location.pathname)?.text;
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header title={title} />
        <Body children={children} />
      </div>
    </div>
  );
}

export default RootLayout;
