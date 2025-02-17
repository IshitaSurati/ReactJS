const Product = require("../models/Product");

// ✅ Add a new product
exports.addProduct = async (req, res) => {
  const { title, image, price, description } = req.body;

  if (!title || !image || !price || !description) {
    return res.status(400).json({ message: "All fields (title, image, price, description) are required" });
  }

  if (req.user.role !== "admin" && req.user.role !== "superadmin") {
    return res.status(403).json({ message: "Access Denied" });
  }

  try {
    const newProduct = new Product({
      title,
      image,
      price,
      description,
      adminId: req.user.id, // ✅ Store Admin ID
    });

    await newProduct.save();
    res.json({ message: "Product added successfully" });
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ message: "Error adding product", error });
  }
};

// ✅ Fetch a single product with admin details
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
    let products = await Product.find().populate("adminId", "name email");

    if (req.user.role !== "superadmin") {
      products = products.map(({ _doc }) => {
        const { adminId, ...rest } = _doc;
        return rest;
      });
    }

    res.json(products);  
  } catch (error) {
    console.error("Error fetching all products:", error);
    res.status(500).json({ message: "Error fetching products", error });
  }
};
;
