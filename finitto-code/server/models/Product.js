const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  title: String,
  price: Number,
  inStock: Boolean,
  description: String,
  image: String,
  imageArray: [String],
});

module.exports = model("Product", productSchema);
