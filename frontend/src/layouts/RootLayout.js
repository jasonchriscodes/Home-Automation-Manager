import Sidebar from "./sidebar";
import Header from "./header";

function RootLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header children={children} />
      </div>
    </div>
  );
}

export default RootLayout;
