const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  orderItems: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "item",
    },
  ],
  shippingAddress1: {
    type: String,
    required: true,
  },
  shippingAddress2: {
    type: String,
    required: true,
  },
  city: {
    type: String,
  },
  country: {
    type: String,
  },
  phone: {
    type: String,
  },
  status: {
    type: String,
  },
  totalPrice: {
    type: Number,
  },
  dateCreated: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = Order = mongoose.model("order", OrderSchema);
