import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 🔹 Fetch students
  const fetchStudents = async () => {
    try {
      const res = await axios.get("http://localhost:7000/studentRegister");
      setStudents(res.data);
    } catch (err) {
      setError("Failed to load students");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // 🔹 Approve student
  const approveStudent = async (id) => {
    try {
      await axios.put(`http://localhost:7000/admin/set/dashboard/${id}`);
      fetchStudents();
    } catch (err) {
      alert("Failed to approve student");
    }
  };

  // 🔹 Delete student
  const deleteStudent = async (id) => {
    if (!window.confirm("Are you sure you want to delete this student?")) return;

    try {
      await axios.delete(`http://localhost:7000/admin/set/dashboard/${id}`);
      fetchStudents();
    } catch (err) {
      alert("Failed to delete student");
    }
  };

  // 🔹 Stats
  const totalStudents = students.length;
  const approvedStudents = students.filter(s => s.isApproved).length;
  const pendingStudents = totalStudents - approvedStudents;

  if (loading) return <h2 style={{ padding: 20 }}>Loading Dashboard...</h2>;
  if (error) return <h2 style={{ padding: 20, color: "red" }}>{error}</h2>;

  return (
    <div style={{ padding: "20px", background: "#f4f6f8", minHeight: "100vh" }}>
      <h1>Admin Dashboard</h1>

      {/* 🔹 Summary Cards */}
      <div style={{ display: "flex", gap: "20px", marginBottom: "30px" }}>
        <Card title="Total Students" value={totalStudents} />
        <Card title="Approved Students" value={approvedStudents} color="green" />
        <Card title="Pending Students" value={pendingStudents} color="red" />
      </div>

      {/* 🔹 Students Table */}
      <div style={{ background: "#fff", padding: "20px", borderRadius: "6px" }}>
        <h2>Student Management</h2>

        <table width="100%" border="1" cellPadding="10" cellSpacing="0">
          <thead style={{ background: "#eee" }}>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {students.length === 0 ? (
              <tr>
                <td colSpan="5" align="center">
                  No students found
                </td>
              </tr>
            ) : (
              students.map((student, index) => (
                <tr key={student._id}>
                  <td>{index + 1}</td>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>
                    {student.isApproved ? (
                      <span style={{ color: "green" }}>Approved</span>
                    ) : (
                      <span style={{ color: "orange" }}>Pending</span>
                    )}
                  </td>
                  <td>
                    {!student.isApproved && (
                      <button
                        onClick={() => approveStudent(student._id)}
                        style={{ marginRight: "10px" }}
                      >
                        Approve
                      </button>
                    )}
                    <button
                      onClick={() => deleteStudent(student._id)}
                      style={{ color: "red" }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// 🔹 Reusable Card Component
const Card = ({ title, value, color = "#333" }) => (
  <div
    style={{
      flex: 1,
      background: "#fff",
      padding: "20px",
      borderRadius: "6px",
      boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    }}
  >
    <h3>{title}</h3>
    <h1 style={{ color }}>{value}</h1>
  </div>
);

export default AdminDashboard;
