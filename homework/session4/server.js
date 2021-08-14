const express = require("express");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 5000;

const app = express();

connectDB();
app.use(express.json());

app.use("/api/items", require("./routes/api/items"));
app.use("/api/cart", require("./routes/api/cart"));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
