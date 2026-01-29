import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const AdminNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/adminLogin");
  };

  return (
    <>
      {/* INTERNAL CSS FOR ADMIN NAVBAR */}
      <style>
        {`
          .admin-navbar {
            background: linear-gradient(90deg, #020617, #111827, #1f2937);
          }

          .admin-navbar .navbar-brand {
            font-weight: 700;
            letter-spacing: 1px;
            font-size: 1.2rem;
            color: #38bdf8 !important;
          }

          .admin-navbar .nav-link,
          .admin-navbar .dropdown-toggle {
            color: #e5e7eb !important;
            margin-right: 10px;
            transition: all 0.3s ease;
          }

          .admin-navbar .nav-link:hover,
          .admin-navbar .dropdown-toggle:hover {
            color: #38bdf8 !important;
            transform: translateY(-1px);
          }

          .admin-navbar .dropdown-menu {
            background-color: #020617;
            border: none;
            box-shadow: 0 10px 25px rgba(0,0,0,0.4);
          }

          .admin-navbar .dropdown-item {
            color: #e5e7eb;
          }

          .admin-navbar .dropdown-item:hover {
            background-color: #0ea5e9;
            color: white;
          }
        `}
      </style>

      <Navbar
        expand="lg"
        sticky="top"
        variant="dark"
        className="admin-navbar"
      >
        <Container>
          {/* BRAND */}
          <Navbar.Brand as={Link} to="/admin/dashboard">
            🛡️ Teacher Panel
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="admin-navbar" />
          <Navbar.Collapse id="admin-navbar">
            {/* LEFT LINKS */}
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/admin/dashboard">
                Dashboard
              </Nav.Link>
              <Nav.Link as={Link} to="/admin/students">
                Students
              </Nav.Link>
              <Nav.Link as={Link} to="/admin/courses">
                Courses
              </Nav.Link>
              <Nav.Link as={Link} to="/admin/faculty">
                Faculty
              </Nav.Link>
              
              <Nav.Link as={Link} to="/admin/contacts">
                Contacts
              </Nav.Link>
            </Nav>

            {/* RIGHT LINKS */}
            <Nav>
              <NavDropdown title="Admin" id="admin-dropdown">
                <NavDropdown.Item as={Link} to="/admin/profile">
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleLogout}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default AdminNavbar;
