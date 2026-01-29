import { useEffect, useState } from "react";
import axios from "axios";

const API = "http://localhost:7000/spi";

export default function AdminAnnualReport() {
  const [students, setStudents] = useState([]);
  const [reports, setReports] = useState([]);
  const [form, setForm] = useState({
    studentId: "",
    year: "",
    marks: "",
    attendance: "",
    result: "Pass",
    remarks: "",
  });

  useEffect(() => {
    fetchStudents();
    fetchReports();
  }, []);

  const fetchStudents = async () => {
    const res = await axios.get(`${API}/admin/students`);
    setStudents(res.data);
  };

  const fetchReports = async () => {
    const res = await axios.get(`${API}/admin/reports`);
    setReports(res.data);
  };

  const addReport = async () => {
    await axios.post(`${API}/admin/add-report`, form);
    setForm({
      studentId: "",
      year: "",
      marks: "",
      attendance: "",
      result: "Pass",
      remarks: "",
    });
    fetchReports();
  };

  const deleteReport = async (id) => {
    if (!window.confirm("Delete report?")) return;
    await axios.delete(`${API}/admin/delete-report/${id}`);
    fetchReports();
  };

  return (
    <div className="container mt-4">
      <h3>📊 Student Annual Reports</h3>

      <div className="card p-3 mb-4">
        <select
          className="form-control mb-2"
          value={form.studentId}
          onChange={(e) => setForm({ ...form, studentId: e.target.value })}
        >
          <option value="">Select Student</option>
          {students.map((s) => (
            <option key={s._id} value={s._id}>
              {s.name} ({s.email})
            </option>
          ))}
        </select>

        <input
          className="form-control mb-2"
          placeholder="Academic Year (2024-25)"
          value={form.year}
          onChange={(e) => setForm({ ...form, year: e.target.value })}
        />

        <input
          className="form-control mb-2"
          placeholder="Marks"
          type="number"
          value={form.marks}
          onChange={(e) => setForm({ ...form, marks: e.target.value })}
        />

        <input
          className="form-control mb-2"
          placeholder="Attendance %"
          type="number"
          value={form.attendance}
          onChange={(e) => setForm({ ...form, attendance: e.target.value })}
        />

        <select
          className="form-control mb-2"
          value={form.result}
          onChange={(e) => setForm({ ...form, result: e.target.value })}
        >
          <option>Pass</option>
          <option>Fail</option>
        </select>

        <textarea
          className="form-control mb-2"
          placeholder="Remarks"
          value={form.remarks}
          onChange={(e) => setForm({ ...form, remarks: e.target.value })}
        />

        <button className="btn btn-primary" onClick={addReport}>
          Add Report
        </button>
      </div>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Student</th>
            <th>Year</th>
            <th>Marks</th>
            <th>Attendance</th>
            <th>Result</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((r) => (
            <tr key={r._id}>
              <td>{r.studentId?.name}</td>
              <td>{r.year}</td>
              <td>{r.marks}</td>
              <td>{r.attendance}%</td>
              <td>{r.result}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteReport(r._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
