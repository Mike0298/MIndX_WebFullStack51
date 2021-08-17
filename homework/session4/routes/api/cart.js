const express = require("express");
const router = express.Router();

const Item = require("../../models/Item");
const Reciept = require("../../models/Reciept");
const Cart = require("../../models/Cart");

router.get("/", (req, res) => {
  return res.status(200).json(Cart);
});

router.post("/");

module.exports = router;
