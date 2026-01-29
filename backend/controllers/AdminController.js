import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"; // optional for login token
import nodemailer from 'nodemailer';
import Admin from "../models/Admin.js";
// -------------------- REGISTER --------------------
export const registerAdmin = async (req, res) => {
  try {
    const { admin_id, name, email, password } = req.body;

    // check if user already exists
    const existingUser = await Admin.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Admin already exists ❌" });
    }

    // create new user
    const newAdmin = new Admin({ admin_id, name, email, password });
    await newAdmin.save(); // password will be hashed automatically
    sendEmail(newAdmin);
    res.status(201).json({ message: "Admin registered successfully ✅" });
  } catch (error) {
    res.status(500).json({ message: "Registration failed ❌", error: error.message });
  }
};
const sendEmail = async (newAdmin) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASSWORD,
            },
        });
 
        const mailOptions = {
            from: process.env.EMAIL, // Sender's email address
            to: newAdmin.email, // Receiver's email address
            subject: 'Welcome to Our Service!', // Clear subject for the welcome email
            //remove space before (<p>Hello $ {newUser.name},</p>) to <p>Hello $ {newUser.name},</p> and add backticks from opening of p tag to closign of last p tag
            html: `
            <div>
                <p>Hello ${newAdmin.name},</p>
                <p>Welcome to our service! We're thrilled to have you onboard.</p>
                <p>If you have any questions or need help getting started, feel free to reach out to our support team.</p>
                <p>Best regards,<br/>Your Company Name</p>, // HTML body for better formatting
            </div>`
        };
 
        
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
                return res.status(500).json({ message: 'Failed to send welcome email' });
            }
            console.log('Email sent:', info.response);
        });
    } catch (error) {
        console.error('Error in email function:', error);
        throw new Error(error);
    }
};

        


// -------------------- LOGIN --------------------
export const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // find user by email
    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(400).json({ message: "Invalid credentials ❌" });

    // check password
    const isPasswordValid = await bcrypt.compare(password, admin.password);
    if (!isPasswordValid) return res.status(400).json({ message: "Invalid credentials ❌" });

    // optional: create token for session
    const token = jwt.sign({ id: admin._id }, "secretKey123", { expiresIn: "1h" });

    res.status(200).json({
      message: "Login successful ✅",
      token,
      admin: {
        admin_id: admin._id,
        name: admin.name,
        email: admin.email,
        role: "admin",
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Login failed ❌", error: error.message });
  }
};


import User from "../models/User.js";

// ✅ APPROVE STUDENT
export const approveStudent = async (req, res) => {
  try {
    const { id } = req.params;

    const student = await User.findById(id);

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    if (student.isApproved) {
      return res.status(400).json({
        success: false,
        message: "Student already approved",
      });
    }

    student.isApproved = true;
    await student.save();

    res.status(200).json({
      success: true,
      message: "Student approved successfully",
      student,
    });
  } catch (error) {
    console.error("Approve Error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

// ✅ DELETE STUDENT
export const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;

    const student = await User.findById(id);

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    await User.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Student deleted successfully",
    });
  } catch (error) {
    console.error("Delete Error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};


