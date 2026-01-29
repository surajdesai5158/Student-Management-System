import mongoose from "mongoose";

const facultySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    photo: {
      type: String, // /uploads/filename.jpg
    },
  },
  { timestamps: true }
);

export default mongoose.model("Faculty", facultySchema);
