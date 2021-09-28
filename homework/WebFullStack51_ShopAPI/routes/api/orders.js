const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { config } = require("../../config/config");
const auth = require("../../utils/auth.js");

const Order = require("../../models/Order");
const Product = require("../../models/Product");
const Item = require("../../models/Item");
const User = require("../../models/User");

//@route    GET    /api/orders
//@desc     Get all orders
//@access   Private

router.get("/", auth, async (req, res) => {
  try {
    const orders = await Order.find().sort({ dateCreated: -1 });
    if (orders.length === 0)
      return res.status(404).json({ error: "No order exists" });
    return res.status(200).json(orders);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server Error");
  }
});

//@route    GET    /api/orders/:id
//@desc     Get orders base on id
//@access   Private

router.get("/:id", auth, async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ error: "Order does not exist" });
    return res.status(200).json(order);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server Error");
  }
});

//@route    POST    /api/orders/
//@desc     Create an order
//@access   Private

router.post("/", auth, async (req, res) => {
  //validate order data

  try {
    let orderFields = {};
    orderFields.user = mongoose.Types.ObjectId(req.user.id);
    orderFields.shippingAddress1 = req.body.shippingAddress1;
    orderFields.shippingAddress2 = req.body.shippingAddress2;

    if (req.body.city) orderFields.city = req.body.city;
    if (req.body.country) orderFields.country = req.body.country;
    if (req.body.phone) orderFields.phone = req.body.phone;
    if (req.body.status) orderFields.status = req.body.status;
    if (req.body.totalPrice) orderFields.totalPrice = req.body.totalPrice;

    orderFields.orderItems = [];
    for (let item of req.body.items) {
      const itemFields = {
        quantity: item.quantity,
        product: mongoose.Types.ObjectId(item.product),
      };
      const itemToAdd = new Item(itemFields);
      await itemToAdd.save();
      orderFields.orderItems.push(itemToAdd);
    }

    const order = new Order(orderFields);
    await order.save();
    return res.status(200).json(order);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server Error");
  }
});

//@route    DELETE    /api/orders/:id
//@desc     Delete order base on id
//@access   Private
router.delete("/:id", auth, async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ error: "Order does not exist" });

    if (req.user.id !== order.user.toString())
      return res.status(401).json({ error: "Unauthorized" });

    await Order.findByIdAndRemove(req.params.id);
    const orders = await Order.find({
      user: mongoose.Types.ObjectId(req.user.id),
    });
    return res.status(200).send(orders);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server Error");
  }
});

module.exports = router;
