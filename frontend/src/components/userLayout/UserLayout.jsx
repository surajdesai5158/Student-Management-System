import React from "react";
import { Outlet } from "react-router-dom";


import UserNavbar from "./UserNavbar";
import UserFooter from "./UserFooter";

const UserLayout = () => {
  return (
    <>
      {/* Top Navbar */}
      <UserNavbar />

      {/* Main Content Area */}
      <main style={{ minHeight: "50vh" }}>
        <Outlet />
      </main>

      {/* Footer */}
      <UserFooter />
    </>
  );
};

export default UserLayout;
