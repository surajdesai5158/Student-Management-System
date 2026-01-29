import { useEffect, useState } from "react";
import axios from "axios";

const API = "http://localhost:7000/api";

export default function AdminFaculty() {
  const [faculty, setFaculty] = useState([]);
  const [form, setForm] = useState({
    name: "",
    qualification: "",
    location: "",
  });
  const [photo, setPhoto] = useState(null);

  const fetchFaculty = async () => {
    const res = await axios.get(`${API}/faculty`);
    setFaculty(res.data);
  };

  useEffect(() => {
    fetchFaculty();
  }, []);

  const addFaculty = async () => {
    if (!form.name || !form.qualification || !form.location) return;

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("qualification", form.qualification);
    formData.append("location", form.location);
    if (photo) formData.append("photo", photo);

    await axios.post(`${API}/admin/add-faculty`, formData);

    setForm({ name: "", qualification: "", location: "" });
    setPhoto(null);
    fetchFaculty();
  };

  const deleteFaculty = async (id) => {
    if (!window.confirm("Delete faculty?")) return;

    await axios.delete(`${API}/admin/delete-faculty/${id}`);
    fetchFaculty();
  };

  return (
    <div className="container mt-4">
      <h3>👨‍🏫 Manage Faculty</h3>

      <div className="card p-3 mb-4">
        <input
          className="form-control mb-2"
          placeholder="Faculty Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          className="form-control mb-2"
          placeholder="Qualification"
          value={form.qualification}
          onChange={(e) => setForm({ ...form, qualification: e.target.value })}
        />
        <input
          className="form-control mb-2"
          placeholder="Location"
          value={form.location}
          onChange={(e) => setForm({ ...form, location: e.target.value })}
        />
        <input
          type="file"
          className="form-control mb-2"
          onChange={(e) => setPhoto(e.target.files[0])}
        />
        <button className="btn btn-primary" onClick={addFaculty}>
          Add Faculty
        </button>
      </div>

      {faculty.map((f) => (
        <div key={f._id} className="card p-3 mb-2">
          <div className="d-flex justify-content-between align-items-center">
            <div>
                {f.photo && (
  <img
    src={`http://localhost:7000${f.photo}`}
    alt={f.name}
    style={{
      height: "120px",
      width: "120px",
      objectFit: "contain",
      border: "1px solid #ddd",
      borderRadius: "8px",
      background: "#fafafa"
    }}
  />
)}
              <h5>{f.name}</h5>
              <p>{f.qualification}</p>
              <small>{f.location}</small>
            </div>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => deleteFaculty(f._id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
