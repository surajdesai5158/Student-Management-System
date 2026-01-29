import { useEffect, useState } from "react";
import axios from "axios";

export default function UserAnnualReport() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:7000/spi/student/reports")
      .then((res) => setReports(res.data));
  }, []);

  return (
    <div className="container mt-4">
      <h3>📄 My Annual Report</h3>

      {reports.map((r) => (
        <div key={r._id} className="card p-3 mb-3">
          <h5>Year: {r.year}</h5>
          <p>Marks: {r.marks}</p>
          <p>Attendance: {r.attendance}%</p>
          <p>Result: {r.result}</p>
          {r.remarks && <small>Remarks: {r.remarks}</small>}
        </div>
      ))}
    </div>
  );
}
