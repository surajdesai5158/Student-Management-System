import mongoose from "mongoose";

const resultSchema = new mongoose.Schema(
  {
    studentId: {
      type: String,
      ref: "Student",
      required: true,
    },
    courseName: {
      type: String,
      required: true,
    },
    marks: {
      type: Number,
      required: true,
    },
    grade: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["Pass", "Fail"],
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Result", resultSchema);
