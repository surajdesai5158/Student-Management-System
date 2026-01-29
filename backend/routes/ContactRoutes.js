import express from "express";
import contactUserr, {
  getAllContacts,
  replyToContact,
} from "../controllers/ContactController.js";

const contactrouter = express.Router();

contactrouter.post("/contact", contactUserr);


contactrouter.get("/get", getAllContacts);


contactrouter.put("/reply/:id", replyToContact);

export default contactrouter;
