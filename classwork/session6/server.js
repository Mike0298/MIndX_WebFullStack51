const express = require("express");
const mongoose = require("mongoose");

const User = require("./models/User");

const app = express();
const PORT = process.env.PORT || 5000;

const db = "mongodb://localhost/jwt-example";
mongoose.connect(db);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("api running");
});

app.use("/api/user", require("./routes/user"));

app.listen(PORT, console.log(`Server running on port ${PORT}`));
