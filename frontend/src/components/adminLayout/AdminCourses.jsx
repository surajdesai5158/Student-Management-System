import { useEffect, useRef, useState } from "react";
import axios from "axios";

const API = "http://localhost:7000/admin";

export default function AdminCourses() {
  const [courses, setCourses] = useState([]);
  const [courseName, setCourseName] = useState("");
  const fetchedRef = useRef(false);

  useEffect(() => {
    if (!fetchedRef.current) {
      fetchCourses();
      fetchedRef.current = true;
    }
  }, []);

  const fetchCourses = async () => {
    try {
      const res = await axios.get(`${API}/courses`);
      setCourses(res.data);
    } catch (err) {
      console.error(err);
      alert("Failed to load courses");
    }
  };

  const addCourse = async () => {
    if (!courseName.trim()) return;

    try {
      await axios.post(`${API}/add-course`, { courseName });
      setCourseName("");
      fetchCourses();
    } catch (err) {
      console.error(err);
      alert("Failed to add course");
    }
  };

  const deleteCourse = async (courseId) => {
    if (!window.confirm("Delete this course?")) return;

    try {
      await axios.delete(`${API}/delete-course/${courseId}`);
      fetchCourses();
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert("Failed to delete course");
    }
  };

  return (
    <div className="container mt-4">
      <h3>📘 Manage Courses</h3>

      <div className="card p-3 mb-4">
        <input
          className="form-control"
          placeholder="Course Name"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
        />
        <button className="btn btn-primary mt-2" onClick={addCourse}>
          Add Course
        </button>
      </div>

      {courses.map((course) => (
        <CourseCard
          key={course._id}
          course={course}
          refresh={fetchCourses}
          deleteCourse={deleteCourse}
        />
      ))}
    </div>
  );
}

/* ================= COURSE CARD ================= */

function CourseCard({ course, refresh, deleteCourse }) {
  const [subjectName, setSubjectName] = useState("");

  const addSubject = async () => {
    if (!subjectName.trim()) return;

    try {
      await axios.post(
        `http://localhost:7000/admin/add-subject/${course._id}`,
        { subjectName }
      );
      setSubjectName("");
      refresh();
    } catch (err) {
      console.error(err);
      alert("Failed to add subject");
    }
  };

  const deleteSubject = async (subjectId) => {
    if (!window.confirm("Delete this subject?")) return;

    try {
      await axios.delete(
        `http://localhost:7000/admin/delete-subject/${course._id}/${subjectId}`
      );
      refresh();
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert("Failed to delete subject");
    }
  };

  return (
    <div className="card mb-4 p-3">
      <div className="d-flex justify-content-between align-items-center">
        <h5>{course.courseName}</h5>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => deleteCourse(course._id)}
        >
          Delete Course
        </button>
      </div>

      <div className="mt-2">
        <input
          className="form-control"
          placeholder="Subject Name"
          value={subjectName}
          onChange={(e) => setSubjectName(e.target.value)}
        />
        <button className="btn btn-success mt-2" onClick={addSubject}>
          Add Subject
        </button>
      </div>

      {course.subjects?.map((subject) => (
        <div key={subject._id} className="border rounded p-3 mt-3">
          <div className="d-flex justify-content-between">
            <strong>{subject.name}</strong>
            <button
              className="btn btn-outline-danger btn-sm"
              onClick={() => deleteSubject(subject._id)}
            >
              Delete Subject
            </button>
          </div>

          <NoteUploader
            courseId={course._id}
            subject={subject}
            refresh={refresh}
          />
        </div>
      ))}
    </div>
  );
}

/* ================= NOTE UPLOADER ================= */

function NoteUploader({ courseId, subject, refresh }) {
  const [title, setTitle] = useState("");
  const [pdf, setPdf] = useState(null);

  const uploadNote = async () => {
    if (!title.trim() || !pdf) return;

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("pdf", pdf);

      await axios.post(
        `http://localhost:7000/admin/add-note/${courseId}/${subject._id}`,
        formData
      );

      setTitle("");
      setPdf(null);
      refresh();
    } catch (err) {
      console.error(err);
      alert("Failed to upload note");
    }
  };

  const deleteNote = async (noteId) => {
    if (!window.confirm("Delete this note?")) return;

    try {
      await axios.delete(
        `http://localhost:7000/admin/delete-note/${courseId}/${subject._id}/${noteId}`
      );
      refresh();
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert("Failed to delete note");
    }
  };

  return (
    <>
      <div className="mt-2">
        <input
          className="form-control"
          placeholder="Note Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="file"
          className="form-control mt-2"
          accept="application/pdf"
          onChange={(e) => setPdf(e.target.files[0])}
        />

        <button className="btn btn-warning mt-2" onClick={uploadNote}>
          Upload PDF
        </button>
      </div>

      {subject.notes?.map((note) => (
        <div
          key={note._id}
          className="d-flex justify-content-between align-items-center mt-2"
        >
          <span>📄 {note.title}</span>
          <button
            className="btn btn-sm btn-danger"
            onClick={() => deleteNote(note._id)}
          >
            Delete
          </button>
        </div>
      ))}
    </>
  );
}
