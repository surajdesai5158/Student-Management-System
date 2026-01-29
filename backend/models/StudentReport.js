import mongoose from "mongoose";

const studentReportSchema = new mongoose.Schema(
  {
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Registered Student
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    marks: {
      type: Number,
      required: true,
    },
    attendance: {
      type: Number, // percentage
      required: true,
    },
    result: {
      type: String,
      enum: ["Pass", "Fail"],
      required: true,
    },
    remarks: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("StudentReport", studentReportSchema);
