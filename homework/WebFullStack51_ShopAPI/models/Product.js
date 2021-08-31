const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image_thumbnail: {
    type: String,
  },
  image: {
    type: String,
  },
  brand: {
    type: String,
  },
  price: {
    type: Number,
  },
  category: {
    type: String,
  },
  rating: {
    type: Number,
    default: 0,
  },
  dateCreated: {
    type: Date,
    default: Date.now(),
  },
  countInStock: {
    type: Number,
    required: true,
  },
});

module.exports = Product = mongoose.model("product", ProductSchema);
