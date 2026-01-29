import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Alert,
} from "react-bootstrap";
import axios from "axios";

const AdminRegister = () => {
  const [formData, setFormData] = useState({
    admin_id: "",
    name: "",
    email: "",
    password: "",
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
        "http://localhost:7000/adminRegister",
        formData
      );

      setMessage(res.data.message || "Admin registered successfully");

      

      // clear form
      setFormData({
        admin_id: "",
        name: "",
        email: "",
        password: "",
      });
    } catch (err) {
      setError(
        err.response?.data?.message || "Admin registration failed"
      );
    }
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="shadow-lg border-0 rounded-4">
            {/* HEADER */}
            <div
              className="text-white text-center py-4 rounded-top"
              style={{
                background: "linear-gradient(135deg, #111827, #374151)",
              }}
            >
              <h3 className="fw-bold">Admin Registration</h3>
              <p className="mb-0 small">Authorized access only</p>
            </div>

            {/* FORM */}
            <Card.Body className="p-4">
              {message && <Alert variant="success">{message}</Alert>}
              {error && <Alert variant="danger">{error}</Alert>}

              <Form onSubmit={handleSubmit}>
                {/* Admin ID */}
                <Form.Group className="mb-3">
                  <Form.Label>Admin ID</Form.Label>
                  <Form.Control
                    type="text"
                    name="admin_id"
                    placeholder="ADMIN_001"
                    value={formData.admin_id}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                {/* Name */}
                <Form.Group className="mb-3">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Enter admin name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                {/* Email */}
                <Form.Group className="mb-3">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="admin@college.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                {/* Password */}
                <Form.Group className="mb-4">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Enter secure password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                {/* Submit */}
                <div className="d-grid">
                  <Button type="submit" variant="dark" size="lg">
                    Register Admin
                  </Button>
                </div>
              </Form>
            </Card.Body>

            {/* FOOTER NOTE */}
            <Card.Footer className="text-center small text-muted">
              This account will have full administrative privileges
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminRegister;
