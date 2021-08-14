const mongoose = require("mongoose");

const RecieptSchema = mongoose.Schema({
  items: [
    {
      item: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "item",
      },
      amount: {
        type: Number,
        required: true,
      },
    },
  ],
});

module.exports = Reciept = mongoose.model("reciept", RecieptSchema);
