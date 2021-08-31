const mongoose = require("mongoose");

const CategorySchema = mongoose.Schema({
  name: {
    type: String,
  },
  icon: {
    type: String,
  },
});

module.exports = Category = mongoose.model("category", CategorySchema);
