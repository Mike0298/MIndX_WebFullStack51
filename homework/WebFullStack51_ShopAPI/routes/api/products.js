const express = require("express");
const router = express.Router();
const { config } = require("../../config/config");

const Product = require("../../models/Product");

//@route    GET    /api/products
//@desc     Get all products
//@access   Public

router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    if (products.length === 0)
      return res.status(404).json({ error: "No products exist" });
    return res.status(200).json(products);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server Error");
  }
});

//@route    GET    /api/products/:id
//@desc     Get product base on id
//@access   Public

router.get("/:id", async (req, res) => {
  try {
    const product = Product.findById(req.params.id);
    if (!product)
      return res.status(404).json({ error: "Product does not exist" });
    return res.status(200).json(product);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server Error");
  }
});

//@route    POST    /api/products/
//@desc     Get product base on id
//@access   Private

router.post("/", async (req, res) => {
  //validation

  let productFields = {};
  productFields.name = req.body.name;
  productFields.description = req.body.description;
  productFields.countInStock = req.body.countInStock;

  if (req.body.image_thumbnail)
    productFields.image_thumbnail = req.body.image_thumbnail;
  if (req.body.image) productFields.image = req.body.image;
  if (req.body.brand) productFields.brand = req.body.brand;
  if (req.body.price) productFields.price = req.body.price;
  if (req.body.category) productFields.category = req.body.category;
  if (req.body.rating) productFields.rating = req.body.rating;

  try {
    let product = await Product.findOne({ name: req.body.name });
    if (product)
      return res
        .status(400)
        .json({ error: "Product with the same name already exist" });
    product = new Product(productFields);
    return res.status(200).json(product);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server erro");
  }
});

//@route    POST    /api/products/:id
//@desc     Update product base on id
//@access   Private

router.post("/:id", async (req, res) => {
  let productFields = {};

  if (req.body.name) productFields.name = req.body.name;
  if (req.body.description) productFields.description = req.body.description;
  if (req.body.countInStock) productFields.countInStock = req.body.countInStock;
  if (req.body.image_thumbnail)
    productFields.image_thumbnail = req.body.image_thumbnail;
  if (req.body.image) productFields.image = req.body.image;
  if (req.body.brand) productFields.brand = req.body.brand;
  if (req.body.price) productFields.price = req.body.price;
  if (req.body.category) productFields.category = req.body.category;
  if (req.body.rating) productFields.rating = req.body.rating;

  try {
    let product = await Product.findById(req.params.id);
    if (!product)
      return res.status(404).json({ error: "Product does not exist" });
    product = await Product.findByIdAndUpdate(
      req.params.id,
      { $set: productFields },
      { new: true }
    );
    return res.status(200).json(product);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server error");
  }
});

//@route    DELETE    /api/products/:id
//@desc     Delete product base on id
//@access   Private

router.delete("/:id", async (req, res) => {
  try {
    let product = await Product.findById(req.params.id);
    if (!product)
      return res.status(404).json({ error: "Product does not exist" });
    await findByIdAndDelete(req.params.id);
    product = await Product.find();
    return res.status(200).json(product);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server error");
  }
});

module.exports = router;
