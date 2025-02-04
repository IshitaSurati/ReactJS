const express = require("express");
const multer = require("multer");
const router = express.Router();
const { createProduct, getProducts } = require("../controllers/productController");

// Multer setup to store images in the 'uploads' folder
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });
router.post("/products", upload.single("image"), createProduct);
router.get("/products", getProducts);

module.exports = router;
