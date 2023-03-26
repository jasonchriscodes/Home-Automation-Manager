import Sidebar from "./sidebar";
import Header from "./header";

function RootLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="max-w-5xl flex-1 mx-auto py-4">{children}</main>
      </div>
    </div>
  );
}

export default RootLayout;
