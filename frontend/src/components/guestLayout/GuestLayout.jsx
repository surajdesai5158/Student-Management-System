import React from "react";
import { Outlet } from "react-router-dom";




import { GuestHeader } from "./GuestHeader";
import GuestFooter from "./GuestFooter";

const GuestLayout = () => {
  return (
    <>
      {/* Top Navbar */}
      <GuestHeader />

      {/* Main Content Area */}
      <main style={{ minHeight: "50vh" }}>
        <Outlet />
      </main>

      {/* Footer */}
      <GuestFooter />
    </>
  );
};

export default GuestLayout;
