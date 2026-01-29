import express from "express";
import {
  addResult,
  updateResult,
  getStudentResults,
  deleteResults,
  approveStudent,
} from "../controllers/ResultController.js";
import { deleteStudent } from "../controllers/AdminController.js";

const resultrouter = express.Router();

/* Admin */
resultrouter.post("/add", addResult);
resultrouter.put("/:id", approveStudent);

/* User */
resultrouter.get("/student/:studentId", getStudentResults);
/*resultrouter.get("/student", getStudentResults1);*/
resultrouter.delete("/:id", deleteResults);
resultrouter.put("/dashboard/:id", approveStudent);
resultrouter.delete("/dashboard/:id", deleteStudent);

export default resultrouter;
