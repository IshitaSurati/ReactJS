const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require('dotenv').config();

const createUser = async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).send({ message: "All fields are required." });
    }

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).send({ message: "Email already in use." });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const user = await User.create({ name, email, password: hashedPassword });

        res.status(201).send({ message: "User created successfully.", user });
    } catch (error) {
        res.status(500).send({ message: "Error creating user.", error: error.message });
    }
};

const getUser = async (req, res) => {
    try {
        const users = await User.find({});
        if (users.length === 0) {
            return res.status(404).send({ message: "No users found." });
        }

        res.status(200).send(users);
    } catch (error) {
        res.status(500).send({ message: "Error fetching users.", error: error.message });
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).send({ message: "User not found." });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).send({ message: "Invalid credentials." });
        }

        // Generate JWT Token
        const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, {
            expiresIn: "1h" // Token validity
        });

        res.status(200).send({ message: "Login successful.", token });
    } catch (error) {
        res.status(500).send({ message: "Error logging in.", error: error.message });
    }
};


const deleteUser = async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).send({ message: "User ID is required." });
    }

    try {
        const user = await User.findByIdAndDelete(id);
        if (!user) {
            return res.status(404).send({ message: "User not found." });
        }

        res.status(200).send({ message: "User deleted successfully.", user });
    } catch (error) {
        res.status(500).send({ message: "Error deleting user.", error: error.message });
    }
};

module.exports = {
    createUser,
    getUser,
    loginUser,
    deleteUser,
};
