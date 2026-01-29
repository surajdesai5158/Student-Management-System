import express from "express";
import {
  addReport,
  getAllReports,
  getStudentReports,
  updateReport,
  deleteReport,
  getRegisteredStudents,
} from "../controllers/StudentReportController.js";

const studentrouter = express.Router();

/* ADMIN */
studentrouter.get("/admin/students", getRegisteredStudents);
studentrouter.post("/admin/add-report", addReport);
studentrouter.get("/admin/reports", getAllReports);
studentrouter.put("/admin/update-report/:id", updateReport);
studentrouter.delete("/admin/delete-report/:id", deleteReport);

studentrouter.get(
  "/student/reports",
  getStudentReports
);

export default studentrouter;
