const mongoose = require("mongoose");

const ItemSchema = mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "product",
  },
  quantity: {
    type: Number,
    required: true,
  },
});

module.exports = Item = mongoose.model("item", ItemSchema);
