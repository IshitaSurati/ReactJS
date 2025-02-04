const Product = require("../models/productModel");
const path = require("path");

// Create a new product
exports.createProduct = async (req, res) => {
  const { name, category, price, description } = req.body;
  const image = req.file ? req.file.filename : null;

  try {
    const newProduct = new Product({
      name,
      category,
      price,
      description,
      image,
    });

    await newProduct.save();
    res.status(201).json({ message: "Product added successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error adding product." });
  }
};


// Get all products 
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    if (products.length === 0) {
      return res.status(404).json({ message: "No products found." });
    }
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching products." });
  }
};
