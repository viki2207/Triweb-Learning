const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  productName: String,
  description: String,
  price: Number,
  image: String,
});

module.exports = mongoose.model("product", productSchema);
