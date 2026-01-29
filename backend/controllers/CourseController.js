import Course from "../models/Course.js";
import { deleteFile } from "../utils/DeleteFiles.js";

/* ================= ADD COURSE ================= */
export const addCourse = async (req, res) => {
  try {
    const { courseName } = req.body;
    if (!courseName) {
      return res.status(400).json({ message: "Course name required" });
    }

    const course = new Course({ courseName });
    await course.save();

    res.json(course);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* ================= GET COURSES ================= */
export const getCourses = async (req, res) => {
  try {
    const courses = await Course.find().sort({ createdAt: -1 });
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* ================= DELETE COURSE ================= */
export const deleteCourse = async (req, res) => {
  try {
    const { courseId } = req.params;

    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    course.subjects.forEach(subject => {
      subject.notes.forEach(note => {
        deleteFile(note.pdfUrl);
      });
    });

    await Course.findByIdAndDelete(courseId);
    res.json({ message: "Course deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* ================= DELETE SUBJECT ================= */
export const deleteSubject = async (req, res) => {
  try {
    const { courseId, subjectId } = req.params;

    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    const subject = course.subjects.id(subjectId);
    if (!subject) {
      return res.status(404).json({ message: "Subject not found" });
    }

    subject.notes.forEach(note => {
      deleteFile(note.pdfUrl);
    });

    course.subjects.pull(subjectId);
    await course.save();

    res.json({ message: "Subject deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* ================= DELETE NOTE ================= */
export const deleteNote = async (req, res) => {
  try {
    const { courseId, subjectId, noteId } = req.params;

    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    const subject = course.subjects.id(subjectId);
    if (!subject) {
      return res.status(404).json({ message: "Subject not found" });
    }

    const note = subject.notes.id(noteId);
    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }

    deleteFile(note.pdfUrl);

    subject.notes.pull(noteId);
    await course.save();

    res.json({ message: "Note deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
