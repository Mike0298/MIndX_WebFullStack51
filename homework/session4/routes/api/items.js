const express = require("express");
const router = express.Router();

const Item = require("../../models/Item");

router.get("/", async (req, res) => {
  try {
    const items = await Item.find();
    return res.status(200).json(items);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
});

router.post("/", async (req, res) => {
  const itemFields = {
    name: req.body.name,
    description: req.body.description,
    quantity: req.body.quantity,
  };
  try {
    const item = new Item(itemFields);
    await item.save();
    return res.status(200).json(item);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
