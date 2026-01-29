import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const GuestHome = () => {
  return (
    <>
      {/* INTERNAL CSS */}
      <style>
        {`
        /* HERO */
        .unique-hero {
          background: radial-gradient(circle at top, #4f46e5, #1e1b4b);
          color: white;
          text-align: center;
          padding: 100px 20px;
        }

        .unique-hero h1 {
          font-size: 3rem;
          font-weight: 700;
        }

        .unique-hero p {
          max-width: 700px;
          margin: 20px auto 0;
          opacity: 0.9;
        }

        /* HIGHLIGHTS */
        .unique-highlights {
          padding: 80px 0;
        }

        .highlight-box {
          background: white;
          padding: 40px 25px;
          text-align: center;
          border-radius: 16px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .highlight-box:hover {
          transform: translateY(-12px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
        }

        .highlight-box span {
          font-size: 2.5rem;
          font-weight: bold;
          color: #4f46e5;
        }

        /* FLOW */
        .unique-flow {
          background: #f8fafc;
          padding: 80px 0;
        }

        .unique-flow h2 {
          text-align: center;
          margin-bottom: 40px;
          font-weight: 600;
        }

        .flow-item {
          display: flex;
          align-items: center;
          gap: 15px;
          max-width: 600px;
          margin: 20px auto;
          font-size: 1.1rem;
        }

        .flow-item .dot {
          width: 14px;
          height: 14px;
          background: #4f46e5;
          border-radius: 50%;
        }

        /* FOOT TEXT */
        .unique-footer-text {
          background: #111827;
          color: #d1d5db;
          text-align: center;
          padding: 40px 20px;
          font-size: 1rem;
        }
        `}
      </style>

      {/* HERO SECTION */}
      <section className="unique-hero">
        <Container>
          <h1>Student Management System</h1>
          <p>
            A modern digital platform to manage student data, academics,
            attendance, and performance efficiently.
          </p>
        </Container>
      </section>

      {/* HIGHLIGHTS */}
      <section className="unique-highlights">
        <Container>
          <Row>
            <Col md={4} className="mb-4">
              <div className="highlight-box">
                <span>01</span>
                <h4 className="mt-3">Centralized Records</h4>
                <p>
                  All student information stored securely in one centralized
                  system.
                </p>
              </div>
            </Col>

            <Col md={4} className="mb-4">
              <div className="highlight-box">
                <span>02</span>
                <h4 className="mt-3">Academic Tracking</h4>
                <p>
                  Attendance, courses, and results managed with accuracy and
                  clarity.
                </p>
              </div>
            </Col>

            <Col md={4} className="mb-4">
              <div className="highlight-box">
                <span>03</span>
                <h4 className="mt-3">Modern Technology</h4>
                <p>
                  Built using MERN stack for scalability, security, and speed.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FLOW SECTION */}
      <section className="unique-flow">
        <Container>
          <h2>How the System Works</h2>

          <div className="flow-item">
            <div className="dot"></div>
            <p>Student information is registered and verified digitally</p>
          </div>

          <div className="flow-item">
            <div className="dot"></div>
            <p>Attendance and academic records are updated semester-wise</p>
          </div>

          <div className="flow-item">
            <div className="dot"></div>
            <p>Performance reports and summaries are generated automatically</p>
          </div>
        </Container>
      </section>

      {/* FOOT MESSAGE */}
      <section className="unique-footer-text">
        <Container>
          <p>
            Designed to simplify academic administration and reduce manual work
            in educational institutions.
          </p>
        </Container>
      </section>
    </>
  );
};

export default GuestHome;
