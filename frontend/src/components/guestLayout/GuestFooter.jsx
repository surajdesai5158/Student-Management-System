import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const GuestFooter = () => {
  return (
    <footer className="bg-dark text-light pt-4 mt-5">
      <Container>
        <Row>
          {/* About Section */}
          <Col md={4} sm={12} className="mb-3">
            <h5>🎓 Student Management</h5>
            <p>
              A simple and powerful system to manage students, courses,
              attendance, and results efficiently.
            </p>
          </Col>

          {/* Quick Links */}
          <Col md={4} sm={12} className="mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/home" className="text-light text-decoration-none">Home</a></li>
              <li><a href="/about" className="text-light text-decoration-none">About</a></li>
              <li><a href="/contact" className="text-light text-decoration-none">Contact</a></li>
              
            </ul>
          </Col>

          {/* Contact / Social */}
          <Col md={4} sm={12} className="mb-3">
            <h5>Contact</h5>
            <p>Email: surajdesai6876@gmail.com</p>
            <p>Phone: +91 8431925158</p>

            <div className="d-flex gap-3">
              <a href="#" className="text-light fs-5">🌐</a>
              <a href="#" className="text-light fs-5">📘</a>
              <a href="#" className="text-light fs-5">📸</a>
              <a href="#" className="text-light fs-5">🐦</a>
            </div>
          </Col>
        </Row>

        <hr className="border-secondary" />

        {/* Bottom Line */}
        <div className="text-center pb-3">
          © {new Date().getFullYear()} Student Management System | All Rights Reserved
        </div>
      </Container>
    </footer>
  );
};

export default GuestFooter;
