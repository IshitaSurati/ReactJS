const express = require("express");
const router = express.Router();
const { addProduct, getProductById, Allproducts } = require("../controllers/ProductController");
const authMiddleware = require("../middleware/authMiddleware");

// Route to add a new product, protected by authMiddleware
router.post("/add-product", authMiddleware, addProduct);

// Route to fetch all products
router.get("/", Allproducts);

// Route to fetch a product by its ID
router.get("/:id", getProductById);

module.exports = router;
