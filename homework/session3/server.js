const express = require("express");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 5000;

const app = express();

connectDB();

app.use(express.json());

app.use("/api/manga", require("./routes/api/manga"));
app.use("/api/user", require("./routes/api/user"));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
