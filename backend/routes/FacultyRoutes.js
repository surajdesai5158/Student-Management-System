import express from "express";
import {
  addFaculty,
  getFaculty,
  deleteFaculty,
} from "../controllers/FacultyController.js";
import { upload } from "../middleware/Uploads.js";

const facultyrouter = express.Router();

/* ADMIN */
facultyrouter.post("/admin/add-faculty", upload.single("photo"), addFaculty);
facultyrouter.delete("/admin/delete-faculty/:id", deleteFaculty);

/* USER + ADMIN */
facultyrouter.get("/faculty", getFaculty);

export default facultyrouter;
