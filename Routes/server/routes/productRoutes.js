const express = require("express");
const router = express.Router();
const { addProduct, getProductById, getAllProducts } = require("../controllers/ProductController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/add-product", authMiddleware, addProduct);
router.get("/", authMiddleware, getAllProducts);
router.get("/:id", authMiddleware, getProductById);

module.exports = router;
