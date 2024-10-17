import React, { useState } from "react";
import AdminNavbar from "./AdminNavbar";
import AdminSidebar from "./AdminSidebar";

const AdminDashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div
      className="bg-no-repeat relative  "
      style={{
        backgroundImage: "url('/assets/image/bg-car.jpg')",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container mx-auto ">
        <div className="absolute inset-0 bg-gray-900 bg-opacity-75"></div>
        <div className="relative flex">
          <AdminSidebar
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />
          <div className="w-full">
            <AdminNavbar
              setSidebarOpen={setSidebarOpen}
              sidebarOpen={sidebarOpen}
            />
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardLayout;
