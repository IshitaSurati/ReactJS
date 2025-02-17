const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/add-product", authMiddleware, async (req, res) => {
  const { title, image, price } = req.body;
  const newProduct = new Product({ title, image, price, adminId: req.user.id });
  await newProduct.save();
  res.json({ message: "Product added successfully" });
});

module.exports = router;
