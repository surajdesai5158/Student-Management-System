import React from "react";
import { Outlet } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import AdminFooter from "./AdminFooter";

const AdminLayout = () => {
  return (
    <div className="admin-layout d-flex flex-column min-vh-100">
      {/* Admin Navbar */}
      <AdminNavbar />

      {/* Main Content */}
      <main className="flex-grow-1">
        <Outlet />
      </main>

      {/* Admin Footer */}
      <AdminFooter />
    </div>
  );
};

export default AdminLayout;
