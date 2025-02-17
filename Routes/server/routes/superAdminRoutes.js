const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Product = require("../models/Product");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/all-products", authMiddleware, async (req, res) => {
  if (req.user.role !== "superadmin") {
    return res.status(403).json({ message: "Access Denied" });
  }
  const products = await Product.find().populate("adminId", "name email");
  res.json(products);
});

module.exports = router;
