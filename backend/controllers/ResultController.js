import Result from "../models/Result.js";
import User from "../models/User.js";

/* ================= ADMIN ================= */

/* Add result */
export const addResult = async (req, res) => {
  try {
    const { studentId, courseName, marks, } = req.body;

    if (!studentId || !courseName || marks === undefined) {
      return res.status(400).json({ message: "All fields required" });
    }

    const grade =
      marks >= 85 ? "A" :
      marks >= 70 ? "B" :
      marks >= 50 ? "C" : "F";

    const status = marks >= 40 ? "Pass" : "Fail";

    const result = await Result.create({
      studentId,
      courseName,
      marks,
      grade,
      status,
    });

    res.status(201).json({
      message: "Result added successfully",
      result,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* Update result */
export const updateResult = async (req, res) => {
  try {
    const { marks } = req.body;

    const result = await Result.findById(req.params.id);
    if (!result) {
      return res.status(404).json({ message: "Result not found" });
    }

    const grade =
      marks >= 85 ? "A" :
      marks >= 70 ? "B" :
      marks >= 50 ? "C" : "F";

    const status = marks >= 40 ? "Pass" : "Fail";

    result.marks = marks;
    result.grade = grade;
    result.status = status;

    await result.save();

    res.json({
      message: "Result updated successfully",
      result,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* ================= USER ================= */

/* Get results of one student */
export const getStudentResults = async (req, res) => {
  try {
    const results = await Result.find({
      studentId: req.params.studentId,
    });

    res.json(results);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



export const deleteResults = async (req, res) => {
  try {
    const result = await Result.findById(req.params.id);

    if (!result) {
      return res.status(404).json({
        message: "Result not found",
      });
    }

    await result.deleteOne();

    res.status(200).json({
      message: "Result deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const approveStudent = async (req, res) => {
  try {
    const student = await User.findById(req.params.id);

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    student.isApproved = true;
    await student.save();

    res.status(200).json({
      message: "Student approved successfully",
      student,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};