import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link} from "react-router-dom";

const GuestNavbar = () => {
  

 return (
    <>
      {/* INTERNAL CSS FOR UNIQUE STYLE */}
      <style>
        {`
          .guest-navbar {
            background: linear-gradient(90deg, #0f2027, #203a43, #2c5364);
          }

          .guest-navbar .navbar-brand {
            font-weight: 700;
            letter-spacing: 1px;
            font-size: 1.2rem;
          }

          .guest-navbar .nav-link,
          .guest-navbar .dropdown-toggle {
            color: #e5e7eb !important;
            margin-right: 8px;
            transition: all 0.3s ease;
          }

          .guest-navbar .nav-link:hover,
          .guest-navbar .dropdown-toggle:hover {
            color: #38bdf8 !important;
            transform: translateY(-1px);
          }

          .guest-navbar .dropdown-menu {
            background-color: #020617;
            border: none;
            box-shadow: 0 10px 25px rgba(0,0,0,0.3);
          }

          .guest-navbar .dropdown-item {
            color: #e5e7eb;
            transition: background 0.3s ease;
          }

          .guest-navbar .dropdown-item:hover {
            background-color: #0ea5e9;
            color: white;
          }
        `}
      </style>

      <Navbar
        expand="lg"
        sticky="top"
        className="guest-navbar"
        variant="dark"
      >
        <Container>
          {/* Brand */}
          <Navbar.Brand as={Link} to="/">
            🎓 Student MS
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="guest-navbar" />

          <Navbar.Collapse id="guest-navbar">
            {/* Left Links */}
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>

            {/* Right Links */}
            <Nav>
              {/* Register Dropdown */}
              <NavDropdown title="Register" id="register-dropdown">
                <NavDropdown.Item as={Link} to="/studentRegister">
                  Student Register
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/adminRegister">
                  Admin Register
                </NavDropdown.Item>
              </NavDropdown>

              {/* Login Dropdown */}
              <NavDropdown title="Login" id="login-dropdown">
                <NavDropdown.Item as={Link} to="/studentLogin">
                  Student Login
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/adminLogin">
                  Admin Login
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default GuestNavbar;
