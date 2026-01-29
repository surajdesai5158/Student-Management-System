import React, { useEffect, useState } from "react";
import { Container, Form, Button, Table, Alert } from "react-bootstrap";
import axios from "axios";

const AdminResults = () => {
  const [results, setResults] = useState([]);
  const [form, setForm] = useState({
    studentId: "",
    courseName: "",
    marks: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Fetch results
  const fetchResults = async () => {
    if (!form.studentId) return;

    try {
      const res = await axios.get(
        `http://localhost:7000/admin/results/student/${form.studentId}`
      );
      setResults(res.data);
    } catch (err) {
      setError("Failed to fetch results");
    }
  };

  useEffect(() => {
    fetchResults();
  }, [form.studentId]);

  // ADD RESULT
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!form.studentId || !form.courseName || !form.marks) {
      setError("All fields are required");
      return;
    }

    try {
      await axios.post("http://localhost:7000/admin/results/add", {
        ...form,
        marks: Number(form.marks),
      });

      setSuccess("Result added successfully");
      setForm({ ...form, courseName: "", marks: "" });
      fetchResults();
    } catch (err) {
      setError(err.response?.data?.message || "Failed to add result");
    }
  };

  // 🗑️ DELETE RESULT
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this result?"
    );
    if (!confirmDelete) return;

    try {
      await axios.delete(
        `http://localhost:7000/admin/results/${id}`
      );
      setSuccess("Result deleted successfully");
      fetchResults();
    } catch (err) {
      setError("Failed to delete result");
    }
  };

  return (
    <Container className="my-4">
      <h3>Admin Results Management</h3>

      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">{success}</Alert>}

      <Form onSubmit={handleSubmit} className="mb-4">
        <Form.Control
          placeholder="Student ID"
          className="mb-2"
          value={form.studentId}
          onChange={(e) =>
            setForm({ ...form, studentId: e.target.value })
          }
        />
        <Form.Control
          placeholder="Course Name"
          className="mb-2"
          value={form.courseName}
          onChange={(e) =>
            setForm({ ...form, courseName: e.target.value })
          }
        />
        <Form.Control
          placeholder="Marks"
          type="number"
          className="mb-2"
          value={form.marks}
          onChange={(e) =>
            setForm({ ...form, marks: e.target.value })
          }
        />
        <Button type="submit">Add Result</Button>
      </Form>

      <Table bordered hover>
        <thead>
          <tr>
            <th>Course</th>
            <th>Marks</th>
            <th>Grade</th>
            <th>Status</th>
            <th>Action</th> {/* NEW */}
          </tr>
        </thead>
        <tbody>
          {results.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center">
                No results found
              </td>
            </tr>
          ) : (
            results.map((r) => (
              <tr key={r._id}>
                <td>{r.courseName}</td>
                <td>{r.marks}</td>
                <td>{r.grade}</td>
                <td>{r.status}</td>
                <td>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDelete(r._id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </Container>
  );
};

export default AdminResults;
