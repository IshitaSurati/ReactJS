const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  title: String,
  image: String,
  price: Number,
  adminId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});
module.exports = mongoose.model("Product", productSchema);
