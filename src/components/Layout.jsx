import { Outlet } from "react-router-dom";
import Header from "./header.jsx";
import Sidebar from "./sidebar.jsx";
import Footer from "./footer.jsx";

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}
