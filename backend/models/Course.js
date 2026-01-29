// models/Course.js
import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
  title: String,
  pdfUrl: String,
});

const subjectSchema = new mongoose.Schema({
  name: String,
  notes: [noteSchema],
});

const courseSchema = new mongoose.Schema({
  courseName: String,
  subjects: [subjectSchema],
});

export default mongoose.model("Course", courseSchema);
