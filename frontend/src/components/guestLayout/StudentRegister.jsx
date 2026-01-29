import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button, Alert } from "react-bootstrap";
import axios from "axios";

const StudentRegister = () => {
  const [formData, setFormData] = useState({
    student_id: "",
    name: "",
    email: "",
    password: "",
    course: "",
    year_semester: "",
    contact: "",
    status: "active",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const res = await axios.post(
        "http://localhost:7000/studentRegister",
        formData
      );

      setMessage(res.data.message || "Student registered successfully");

      // clear form
      setFormData({
        student_id: "",
        name: "",
        email: "",
        password: "",
        course: "",
        year_semester: "",
        contact: "",
        status: "active",
      });
    } catch (err) {
      setError(
        err.response?.data?.message || "Student registration failed"
      );
    }
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={10} lg={8}>
          <Card className="shadow-lg border-0 rounded-4">
            <Row className="g-0">
              {/* LEFT PANEL */}
              <Col
                md={5}
                className="d-flex align-items-center text-white p-4"
                style={{
                  background: "linear-gradient(135deg, #2563eb, #1e40af)",
                }}
              >
                <div>
                  <h2 className="fw-bold">Student Registration</h2>
                  <p className="mt-3">
                    Register students securely and manage academic details.
                  </p>
                </div>
              </Col>

              {/* FORM PANEL */}
              <Col md={7} className="p-4">
                <h4 className="mb-3 text-center">Create Student Account</h4>

                {message && <Alert variant="success">{message}</Alert>}
                {error && <Alert variant="danger">{error}</Alert>}

                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6} className="mb-3">
                      <Form.Control
                        name="student_id"
                        placeholder="Student ID"
                        value={formData.student_id}
                        onChange={handleChange}
                        required
                      />
                    </Col>

                    <Col md={6} className="mb-3">
                      <Form.Control
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Control
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Row>
                    <Col md={6} className="mb-3">
                      <Form.Control
                        name="course"
                        placeholder="Course"
                        value={formData.course}
                        onChange={handleChange}
                      />
                    </Col>

                    <Col md={6} className="mb-3">
                      <Form.Control
                        name="year_semester"
                        placeholder="Year / Semester"
                        value={formData.year_semester}
                        onChange={handleChange}
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6} className="mb-3">
                      <Form.Control
                        name="contact"
                        placeholder="Contact Number"
                        value={formData.contact}
                        onChange={handleChange}
                      />
                    </Col>

                    <Col md={6} className="mb-3">
                      <Form.Select
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                      >
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                      </Form.Select>
                    </Col>
                  </Row>

                  <div className="d-grid mt-4">
                    <Button type="submit" size="lg">
                      Register Student
                    </Button>
                  </div>
                </Form>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default StudentRegister;
