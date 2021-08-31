const express = require("express");
const app = new express();
const ejs = require("ejs");
app.set("view engine", "ejs");

//register public folder
app.use(express.static("public"));

app.listen(5000, () => {
  console.log("App started on port 4000");
});

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/post", (req, res) => {
  res.render("post");
});
