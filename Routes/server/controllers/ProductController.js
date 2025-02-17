const Product = require("../models/Product");

// Add a new product
exports.addProduct = async (req, res) => {
  const { title, image, price, description } = req.body;

  // Validate if all fields are provided
  if (!title || !image || !price || !description) {
    return res.status(400).json({ message: "All fields (title, image, price, description) are required" });
  }

  // Validate if the user is an admin or superadmin
  if (req.user.role !== "admin" && req.user.role !== "superadmin") {
    return res.status(403).json({ message: "Access Denied" });
  }

  const newProduct = new Product({
    title,
    image,
    price,
    description,
    adminId: req.user.id,
  });

  try {
    await newProduct.save();
    res.json({ message: "Product added successfully" });
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ message: "Error adding product", error });
  }
};

// Fetch a product by its ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate("adminId", "name email");
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ message: "Error fetching product", error });
  }
};

// Fetch all products
exports.Allproducts = async (req, res) => {
  try {
    let data = await Product.find();
    res.json(data);  
  } catch (error) {
    console.error("Error fetching all products:", error);
    res.status(500).json({ message: "Error fetching products", error });
  }
};
