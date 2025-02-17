const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  adminId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, 
});

module.exports = mongoose.model("Product", productSchema);
