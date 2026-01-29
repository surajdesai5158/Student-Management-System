import express from "express";
import { registerUser, loginUser, getAllStudents } from "../controllers/UserController.js";
import { loginAdmin, registerAdmin } from "../controllers/AdminController.js";
import contactUserr, { getAllContacts, replyToContact } from "../controllers/ContactController.js";

const UserRouter = express.Router();

// routes
UserRouter.post("/studentRegister", registerUser); // POST /api/users/register
UserRouter.post("/studentRegister", registerUser); // POST /api/users/register
UserRouter.post("/adminRegister", registerAdmin); // POST /api/users/register
UserRouter.post("/studentLogin", loginUser); // POST /api/users/login
UserRouter.post("/adminLogin", loginAdmin); // POST /api/users/login

UserRouter.post("/contact",contactUserr)
UserRouter.get("/all", getAllContacts);
UserRouter.get("/studentRegister", getAllStudents);
UserRouter.put("/reply/:id", replyToContact);


export default UserRouter;