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
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
 const navigate= useNavigate();
  // handle input change
  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  // handle login submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const res = await axios.post(
        "http://localhost:7000/adminLogin",
        loginData
      );

      setMessage(res.data.message || "Admin login successful");

      // store JWT token
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.admin));

      navigate("/admin")
    } catch (err) {
      setError(
        err.response?.data?.message || "Invalid admin credentials"
      );
    }
  };

  return (
    <Container fluid className="min-vh-100 d-flex align-items-center bg-light">
      <Row className="w-100 justify-content-center">
        <Col md={7} lg={5}>
          <Card className="border-0 shadow-lg rounded-4 overflow-hidden">
            {/* HEADER */}
            <div
              className="text-white text-center py-4"
              style={{
                background: "linear-gradient(135deg, #111827, #1f2937)",
              }}
            >
              <h3 className="fw-bold">Admin Login</h3>
              <p className="mb-0 small">
                Secure administrative access
              </p>
            </div>

            {/* FORM */}
            <Card.Body className="p-4">
              {message && <Alert variant="success">{message}</Alert>}
              {error && <Alert variant="danger">{error}</Alert>}

              <Form onSubmit={handleSubmit}>
                {/* Email */}
                <Form.Group className="mb-3">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="admin@college.com"
                    value={loginData.email}
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
                    value={loginData.password}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                {/* Submit */}
                <div className="d-grid">
                  <Button type="submit" variant="dark" size="lg">
                    Login as Admin
                  </Button>
                </div>
              </Form>
            </Card.Body>

            {/* FOOTER NOTE */}
            <Card.Footer className="text-center small text-muted">
              Authorized personnel only
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminLogin;
