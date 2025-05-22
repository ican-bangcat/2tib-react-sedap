import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Outlet, useLocation } from "react-router-dom";

export default function MainLayout() {
  const location = useLocation();

  // Cek apakah path saat ini adalah halaman error
  const isErrorPage = location.pathname.startsWith("/error");

  if (isErrorPage) {
    return <Outlet />; // Jangan render Sidebar & Header
  }

  return (
    <div id="app-container" className="bg-gray-100 min-h-screen flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}
