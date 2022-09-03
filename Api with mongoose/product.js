//creating schema and exporting model for the PRODUCTS collection

const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
  category: String,
});

module.exports = mongoose.model("products", productSchema);
