const mongoose = require("mongoose");

const MangaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = Manga = mongoose.model("manga", MangaSchema);
