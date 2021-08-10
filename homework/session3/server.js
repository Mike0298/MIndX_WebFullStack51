const express = require("express");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());

app.use("/api/manga", require("./routes/api/manga"));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
