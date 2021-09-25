const express = require("express");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("Server Running");
});

//api routes
app.use("/api/v1/users", require("./routes/api/users"));
app.use("/api/v1/products", require("./routes/api/products"));
app.use("/api/v1/orders", require("./routes/api/orders"));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
