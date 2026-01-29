import React, { useEffect, useState } from "react";
import { Container, Table, Badge } from "react-bootstrap";
import axios from "axios";

const UserResults = () => {
  const [results, setResults] = useState([]);
  const studentId = localStorage.getItem("studentId"); // after login

  useEffect(() => {
    axios.get(`http://localhost:7000/user/results/student/${studentId}`)
      .then((res) => setResults(res.data));
  }, [studentId]);

  return (
    <Container className="my-4">
      <h3>My Results</h3>

      <Table bordered hover>
        <thead>
          <tr>
            <th>Course</th>
            <th>Marks</th>
            <th>Grade</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {results.map((r) => (
            <tr key={r._id}>
              <td>{r.courseName}</td>
              <td>{r.marks}</td>
              <td>{r.grade}</td>
              <td>
                <Badge bg={r.status === "Pass" ? "success" : "danger"}>
                  {r.status}
                </Badge>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default UserResults;
