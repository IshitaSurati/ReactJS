const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require('dotenv').config();

const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).send({ message: "All fields are required." });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const user = await User.create({ name, email, password: hashedPassword });
        res.status(201).send(user);
    } catch (error) {
        res.status(500).send({ message: "Error creating user.", error: error.message });
    }
};

const getUser = async (req, res) => {
    try {
        const query = req.body ;
        const users = await User.find(query);

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

        if (!email || !password) {
            return res.status(400).send({ message: "Email and password are required." });
        }

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

        // Generate JWT token
        const token = jwt.sign({ id: user._id }, process.env.jwtSecretekey, { expiresIn: "1h" });
        res.status(200).send({ message: "Login successful.", token, user });
    } catch (error) {
        res.status(500).send({ message: "Error logging in.", error: error.message });
    }
};

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;

        if (!id) {
            return res.status(400).send({ message: "User ID is required." });
        }

        const user = await User.findByIdAndUpdate(id, updateData, { new: true });
        if (!user) {
            return res.status(404).send({ message: "User not found." });
        }

        res.status(200).send({ message: "User updated successfully.", user });
    } catch (error) {
        res.status(500).send({ message: "Error updating user.", error: error.message });
    }
};

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).send({ message: "User ID is required." });
        }

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
    updateUser,
    deleteUser,
};
