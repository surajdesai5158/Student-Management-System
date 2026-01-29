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

const StudentLogin = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const nevigate = useNavigate();

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
        "http://localhost:7000/studentLogin",
        loginData
      );
        
      setMessage(res.data.message || "Login successful");

      // save token (JWT)
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));


      // redirect later → navigate("/user/home")
      nevigate("/user");
    } catch (err) {
      setError(
        err.response?.data?.message || "Invalid email or password"
      );
    }
  };

  return (
    <Container fluid className="min-vh-100 d-flex align-items-center">
      <Row className="w-100 justify-content-center">
        <Col md={8} lg={6} xl={5}>
          <Card className="border-0 shadow-lg rounded-4 overflow-hidden">
            <Row className="g-0">
              {/* LEFT DESIGN PANEL */}
              <Col
                md={5}
                className="d-none d-md-flex align-items-center justify-content-center text-white p-4"
                style={{
                  background:
                    "linear-gradient(160deg, #0d6efd, #6610f2)",
                }}
              >
                <div className="text-center">
                  <h3 className="fw-bold">Welcome Back</h3>
                  <p className="mt-3 small">
                    Login to access your academic dashboard, attendance,
                    and results.
                  </p>
                </div>
              </Col>

              {/* RIGHT FORM PANEL */}
              <Col md={7} className="p-4">
                <h4 className="text-center mb-3">Student Login</h4>

                {message && <Alert variant="success">{message}</Alert>}
                {error && <Alert variant="danger">{error}</Alert>}

                <Form onSubmit={handleSubmit}>
                  {/* Email */}
                  <Form.Group className="mb-3">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="student@example.com"
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
                      placeholder="Enter your password"
                      value={loginData.password}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  {/* Submit */}
                  <div className="d-grid">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                    >
                      Login
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

export default StudentLogin;
