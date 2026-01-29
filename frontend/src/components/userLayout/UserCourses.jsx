import { useEffect, useRef, useState } from "react";
import axios from "axios";

export default function UserCourses() {
  const [courses, setCourses] = useState([]);
  const fetchedRef = useRef(false);

  useEffect(() => {
    if (!fetchedRef.current) {
      fetchCourses();
      fetchedRef.current = true;
    }
  }, []);

  const fetchCourses = async () => {
    try {
      const res = await axios.get("http://localhost:7000/user/courses");
      setCourses(res.data);
    } catch (err) {
      console.error("Failed to load courses");
    }
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-4">🎓 Available Courses</h3>

      {courses.length === 0 && (
        <p className="text-muted">No courses available yet.</p>
      )}

      {courses.map((course) => (
        <CourseCard key={course._id} course={course} />
      ))}
    </div>
  );
}

/* ================= COURSE CARD ================= */

function CourseCard({ course }) {
  return (
    <div className="card mb-4 p-3 shadow-sm">
      <h5 className="mb-3">{course.courseName}</h5>

      {course.subjects?.length === 0 && (
        <p className="text-muted">No subjects added yet.</p>
      )}

      {course.subjects?.map((subject) => (
        <SubjectCard key={subject._id} subject={subject} />
      ))}
    </div>
  );
}

/* ================= SUBJECT CARD ================= */

function SubjectCard({ subject }) {
  return (
    <div className="border rounded p-3 mb-3">
      <h6 className="mb-2">{subject.name}</h6>

      {subject.notes?.length === 0 && (
        <p className="text-muted mb-0">No notes available.</p>
      )}

      <ul className="list-group list-group-flush">
        {subject.notes?.map((note) => (
          <li
            key={note._id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span>📄 {note.title}</span>

            <a
              href={`http://localhost:7000/${note.pdfUrl}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-outline-primary"
            >
              View PDF
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
