import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    student_id: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
    },

    course: {
      type: String,
      required: true,
    },

    year_semester: {
      type: String,
      required: true, // e.g. "1st Year", "Semester 3"
    },

    contact: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
     isApproved: {
      type: Boolean,
      default: false, 
    },
     role: {
    type: String,
    enum: ["admin", "student"],
    default: "student",
  },
  },
  {
    timestamps: true, // automatically adds createdAt & updatedAt
  }
);


      
      // Before saving → hash password
      userSchema.pre("save", async function () {
        if (!this.isModified("password")) return ; // only hash if password is new
        this.password = await bcrypt.hash(this.password, 10);
        
      });
      
      const User = mongoose.model("User", userSchema);
      export default User;