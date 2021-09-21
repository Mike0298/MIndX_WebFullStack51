const mongoose = require("mongoose");
const { config } = require("./config");

const connectDB = async () => {
  try {
    await mongoose.connect(config.db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
