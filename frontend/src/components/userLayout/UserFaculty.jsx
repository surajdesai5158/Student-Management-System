import { useEffect, useState } from "react";
import axios from "axios";

export default function UserFaculty() {
  const [faculty, setFaculty] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:7000/api/faculty")
      .then((res) => setFaculty(res.data));
  }, []);

  return (
    <div className="container mt-4">
      <h3>👨‍🏫 Our Faculty</h3>

      <div className="row">
        {faculty.map((f) => (
          <div key={f._id} className="col-md-4 mb-3">
            <div className="card p-3 text-center">
              {f.photo && (
                <img
  src={`http://localhost:7000${f.photo}`}
  alt={f.name}
  className="img-fluid rounded mb-2"
  style={{
    height: "200px",
    width: "100%",
    objectFit: "contain",
    background: "#f4f4f4"
  }}
/>
              )}
              <h5>{f.name}</h5>
              <p>{f.qualification}</p>
              <small>{f.location}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
