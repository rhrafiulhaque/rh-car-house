import React, { useState } from "react";
import UserNavbar from "./UserNavbar";
import UserSidebar from "./UserSidebar";

const UserDashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div
      className="bg-no-repeat relative"
      style={{
        backgroundImage: "url('/assets/image/user_dashboard_bg.jpg')",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container mx-auto ">
        <div className="absolute inset-0 bg-gray-900 bg-opacity-75"></div>
        <div className="relative flex">
          <UserSidebar
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />
          <div className="w-full">
            <UserNavbar
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

export default UserDashboardLayout;
