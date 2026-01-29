import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const adminSchema = new mongoose.Schema(
  {
    admin_id: {
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
  },
  {
    timestamps: true, // adds createdAt & updatedAt automatically
  }
);
 // Before saving → hash password
      adminSchema.pre("save", async function () {
        if (!this.isModified("password")) return; // only hash if password is new
        this.password = await bcrypt.hash(this.password, 10);
      });


 const Admin = mongoose.model("Admin", adminSchema);
 export default Admin;