import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const GuestContact = () => {
  return (
    <>
      {/* HEADER */}
      <section
        style={{
          background: "linear-gradient(135deg, #020617, #1e293b)",
          color: "white",
          padding: "80px 0",
          textAlign: "center",
        }}
      >
        <Container>
          <h1 className="fw-bold">Contact Us</h1>
          <p className="mt-3 opacity-75">
            We’d love to hear from you. Reach out anytime.
          </p>
        </Container>
      </section>

      {/* CONTACT INFO TIMELINE */}
      <section style={{ padding: "80px 0" }}>
        <Container>
          <Row className="text-center">
            <Col md={4} className="mb-4">
              <div className="contact-box">
                <h3>📧</h3>
                <h5>Email</h5>
                <p>surajdesai6876@gmail.com</p>
              </div>
            </Col>

            <Col md={4} className="mb-4">
              <div className="contact-box">
                <h3>📞</h3>
                <h5>Phone</h5>
                <p>+91 8431925158</p>
              </div>
            </Col>

            <Col md={4} className="mb-4">
              <div className="contact-box">
                <h3>📍</h3>
                <h5>Location</h5>
                <p>College Campus, India</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* MESSAGE FORM */}
      <section style={{ background: "#f8fafc", padding: "80px 0" }}>
        <Container>
          <Row className="justify-content-center">
            <Col md={8}>
              <h3 className="text-center mb-4">Send Us a Message</h3>

              <Form>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Control
                      placeholder="Your Name"
                    />
                  </Col>

                  <Col md={6} className="mb-3">
                    <Form.Control
                      type="email"
                      placeholder="Your Email"
                    />
                  </Col>
                </Row>

                <Form.Group className="mb-4">
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Write your message..."
                  />
                </Form.Group>

                <div className="text-center">
                  <Button variant="dark" size="lg">
                    Submit Message
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>

      {/* INTERNAL STYLE */}
      <style>
        {`
        .contact-box {
          background: white;
          padding: 40px 20px;
          border-radius: 14px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.08);
          transition: transform 0.3s ease;
        }

        .contact-box:hover {
          transform: translateY(-10px);
        }

        .contact-box h3 {
          font-size: 2.5rem;
        }
        `}
      </style>
    </>
  );
};

export default GuestContact;
