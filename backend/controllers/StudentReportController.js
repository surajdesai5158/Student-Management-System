import StudentReport from "../models/StudentReport.js";
import User from "../models/User.js"; // REGISTERED STUDENTS

/* ================= GET REGISTERED STUDENTS (ADMIN) ================= */
export const getRegisteredStudents = async (req, res) => {
  try {
    const students = await User.find({ role: "student" })
      .select("_id name email")
      .sort({ name: 1 });

    res.json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* ================= ADD REPORT (ADMIN) ================= */
export const addReport = async (req, res) => {
  try {
    const { studentId, year, marks, attendance, result, remarks } = req.body;

    if (!studentId || !year || marks === "" || attendance === "" || !result) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // prevent duplicate report for same year
    const exists = await StudentReport.findOne({ studentId, year });
    if (exists) {
      return res
        .status(400)
        .json({ message: "Report already exists for this year" });
    }

    const report = new StudentReport({
      studentId,
      year,
      marks,
      attendance,
      result,
      remarks,
    });

    await report.save();
    res.status(201).json({ message: "Report added successfully", report });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* ================= GET ALL REPORTS (ADMIN) ================= */
export const getAllReports = async (req, res) => {
  try {
    const reports = await StudentReport.find()
      .populate("studentId", "name email")
      .sort({ createdAt: -1 });

    res.json(reports);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* ================= GET STUDENT REPORTS (USER) ================= */
export const getStudentReports = async (req, res) => {
  try {
    const reports = await StudentReport.find({
      userId: req.params.userId, // logged-in student
    }).sort({ year: -1 });

    res.json(reports);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


/* ================= UPDATE REPORT (ADMIN) ================= */
export const updateReport = async (req, res) => {
  try {
    const report = await StudentReport.findById(req.params.id);
    if (!report) {
      return res.status(404).json({ message: "Report not found" });
    }

    Object.assign(report, req.body);
    await report.save();

    res.json({ message: "Report updated successfully", report });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* ================= DELETE REPORT (ADMIN) ================= */
export const deleteReport = async (req, res) => {
  try {
    await StudentReport.findByIdAndDelete(req.params.id);
    res.json({ message: "Report deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
