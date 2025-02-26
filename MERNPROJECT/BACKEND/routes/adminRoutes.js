const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Admin = require("../middleware/models/Admin");
const router = express.Router();

// Admin Registration
router.post("/register", async (req, res) => {
    const { username, email, password } = req.body;
    
    try {
        const existingAdmin = await Admin.findOne({ email });
        if (existingAdmin) return res.status(400).json({ message: "Admin already exists" });

        const hashedPassword = await bcrypt.hash(password, 10);
        const newAdmin = new Admin({ username, email, password: hashedPassword });

        await newAdmin.save();
        res.status(201).json({ message: "Admin registered successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

// Admin Login
router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const admin = await Admin.findOne({ email });
        if (!admin) return res.status(404).json({ message: "Admin not found" });

        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

        const token = jwt.sign(
            { adminId: admin._id },
            process.env.JWT_SECRET_KEY,
            { expiresIn: "2h" }
        );

        res.json({ token, message: "Admin login successful" });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

// Protected Admin Dashboard Route
router.get("/dashboard", async (req, res) => {
    res.json({ message: "Welcome to the admin dashboard!" });
});

module.exports = router;
