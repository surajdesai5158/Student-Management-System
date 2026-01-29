import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const UserNavbar = () => {
 const navigate = useNavigate();
   const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/studentLogin");
  };
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        {/* Logo / Brand */}
        <Navbar.Brand href="/">
          🎓 Student Management
        </Navbar.Brand>

        {/* Mobile Toggle */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Menu Items */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/user/userhome">Home</Nav.Link>
            <Nav.Link href="/user/students">Students</Nav.Link>
            <Nav.Link href="/user/courses">Courses</Nav.Link>
          
            <Nav.Link href="/user/faculty">Faculty</Nav.Link>
          
            <Nav.Link href="/user" onClick={handleLogout}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default UserNavbar;
