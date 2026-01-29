import express from "express";
import {
  addCourse,
  getCourses,
  deleteCourse,
  deleteSubject,
  deleteNote,
} from "../controllers/CourseController.js";
import { upload } from "../middleware/Uploads.js";
import Course from "../models/Course.js";

const router = express.Router();

/* ================= COURSES ================= */
router.post("/add-course", addCourse);
router.get("/courses", getCourses);
router.delete("/delete-course/:courseId", deleteCourse);

/* ================= SUBJECTS ================= */
router.post("/add-subject/:courseId", async (req, res) => {
  const course = await Course.findById(req.params.courseId);
  course.subjects.push({ name: req.body.subjectName });
  await course.save();
  res.json(course);
});

router.delete("/delete-subject/:courseId/:subjectId", deleteSubject);

/* ================= NOTES ================= */
router.post(
  "/add-note/:courseId/:subjectId",
  upload.single("pdf"),
  async (req, res) => {
    const course = await Course.findById(req.params.courseId);
    const subject = course.subjects.id(req.params.subjectId);

    subject.notes.push({
      title: req.body.title,
      pdfUrl: req.file.path,
    });

    await course.save();
    res.json({ message: "Note uploaded successfully" });
  }
);

router.delete(
  "/delete-note/:courseId/:subjectId/:noteId",
  deleteNote
);

export default router;
