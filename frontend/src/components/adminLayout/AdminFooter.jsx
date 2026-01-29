import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const AdminFooter = () => {
  return (
    <>
      {/* INTERNAL CSS */}
      <style>
        {`
          .admin-footer {
            background: linear-gradient(90deg, #020617, #111827, #1f2937);
            color: #9ca3af;
            padding: 20px 0;
            margin-top: auto;
          }

          .admin-footer span {
            color: #38bdf8;
            font-weight: 600;
          }

          .admin-footer p {
            margin: 0;
            font-size: 0.9rem;
          }

          .admin-footer .footer-right {
            text-align: right;
          }

          @media (max-width: 768px) {
            .admin-footer .footer-right {
              text-align: center;
              margin-top: 8px;
            }
          }
        `}
      </style>

      <footer className="admin-footer">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="text-center text-md-start">
              <p>
                © {new Date().getFullYear()}{" "}
                <span>Student Management System</span>
              </p>
            </Col>

            <Col md={6} className="footer-right">
              <p>Admin Panel • Secure Access</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default AdminFooter;
