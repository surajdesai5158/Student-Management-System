import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const GuestAbout = () => {
  return (
    <>
      {/* TOP SECTION */}
      <section
        style={{
          background: "linear-gradient(135deg, #0d6efd, #0a58ca)",
          color: "white",
          padding: "90px 0",
          textAlign: "center",
        }}
      >
        <Container>
          <h1 className="fw-bold">About Student Management System</h1>
          <p className="mt-3 opacity-75">
            Simplifying academic administration through digital solutions
          </p>
        </Container>
      </section>

      {/* ABOUT CONTENT */}
      <section style={{ padding: "80px 0" }}>
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="mb-4">
              <h2>What is this System?</h2>
              <p className="mt-3">
                The Student Management System is a web-based platform designed
                to help educational institutions manage student information,
                academic records, attendance, and results efficiently.
              </p>
              <p>
                It reduces paperwork, improves accuracy, and provides quick
                access to important academic data.
              </p>
            </Col>

            <Col md={6} className="mb-4">
              <Card className="border-0 shadow-lg rounded-4 p-4">
                <h4 className="fw-semibold">Key Objectives</h4>
                <ul className="mt-3">
                  <li>Centralize student data</li>
                  <li>Improve academic record management</li>
                  <li>Enhance transparency and efficiency</li>
                  <li>Reduce manual work</li>
                </ul>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* TECHNOLOGY SECTION */}
      <section
        style={{
          background: "#f8fafc",
          padding: "80px 0",
        }}
      >
        <Container>
          <h2 className="text-center mb-5">Technology Used</h2>

          <Row className="text-center">
            <Col md={3} className="mb-4">
              <Card className="tech-box h-100">
                <Card.Body>
                  <h4>MongoDB</h4>
                  <p>Database for secure data storage</p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3} className="mb-4">
              <Card className="tech-box h-100">
                <Card.Body>
                  <h4>Express.js</h4>
                  <p>Backend framework for APIs</p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3} className="mb-4">
              <Card className="tech-box h-100">
                <Card.Body>
                  <h4>React.js</h4>
                  <p>Frontend user interface</p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3} className="mb-4">
              <Card className="tech-box h-100">
                <Card.Body>
                  <h4>Node.js</h4>
                  <p>Server-side runtime</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FOOT NOTE */}
      <section
        style={{
          background: "#020617",
          color: "#d1d5db",
          textAlign: "center",
          padding: "40px 20px",
        }}
      >
        <Container>
          <p className="mb-0">
            This project is developed to demonstrate a full-stack MERN
            application for academic management.
          </p>
        </Container>
      </section>

      {/* INTERNAL CSS */}
      <style>
        {`
        .tech-box {
          border: none;
          border-radius: 14px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.08);
          transition: transform 0.3s ease;
        }

        .tech-box:hover {
          transform: translateY(-10px);
        }
        `}
      </style>
    </>
  );
};

export default GuestAbout;
