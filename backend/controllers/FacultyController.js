import Faculty from "../models/Faculty.js";
import { deleteFile } from "../utils/DeleteFiles.js";

/* ================= ADD FACULTY (ADMIN) ================= */
export const addFaculty = async (req, res) => {
  try {
    const { name, qualification, location } = req.body;

    if (!name || !qualification || !location) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const faculty = new Faculty({
      name,
      qualification,
      location,
      photo: req.file ? `/uploads/${req.file.filename}` : "",
    });

    await faculty.save();

    res.status(201).json({
      message: "Faculty added successfully",
      faculty,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* ================= GET FACULTY (USER + ADMIN) ================= */
export const getFaculty = async (req, res) => {
  try {
    const faculty = await Faculty.find().sort({ createdAt: -1 });
    res.json(faculty);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* ================= DELETE FACULTY (ADMIN) ================= */
export const deleteFaculty = async (req, res) => {
  try {
    const faculty = await Faculty.findById(req.params.id);

    if (!faculty) {
      return res.status(404).json({ message: "Faculty not found" });
    }

    if (faculty.photo) {
      deleteFile(faculty.photo);
    }

    await Faculty.findByIdAndDelete(req.params.id);

    res.json({ message: "Faculty deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
