const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { config, dataDict } = require("../../config/config");
const auth = require("../../utils/auth.js");

const User = require("../../models/User");

//@route    GET    /api/users/
//@desc     Get all users
//@access   Private

router.get("/", auth, async (req, res) => {
  try {
    const users = await User.find();
    if (!users) return res.status(404).json({ error: "There are no user" });
    return res.status(200).json(users);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server Error");
  }
});

//@route    GET    /api/users/:id
//@desc     Get user info base on id
//@access   Private

router.get("/:id", auth, async (req, res) => {
  try {
    const user = User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });
    return res.status(200).json(user);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server Error");
  }
});

//@route    GET    /api/users/get/count
//@desc     Get users count
//@access   Public

router.get("/get/count", async (req, res) => {
  try {
    const customers = await User.find({ role: dataDict.customer });
    if (!customers) return res.status(200).json({ count: 0 });
    return res.status(200).json({ count: customers.length });
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server Error");
  }
});

//@route    POST    /api/users/register
//@desc     Register user
//@access   Public

router.post("/register", async (req, res) => {
  //validation

  //user data
  const salt = await bcrypt.genSalt(10);
  const hasedPassword = await bcrypt.hash(req.body.password, salt);

  const userField = {};
  userField.name = req.body.name;
  userField.email = req.body.email;
  userField.password = hasedPassword;
  userField.phone = req.body.phone;

  if (req.body.street) userField.street = req.body.street;
  if (req.body.city) userField.city = req.body.city;
  if (req.body.country) userField.country = req.body.country;
  if (req.body.avatar) userField.avatar = req.body.avatar;

  try {
    let user = User.findOne({ email: req.body.email });
    if (user) return res.status(400).json({ error: "Email already exist" });
    user = new User(userField);
    await user.save();

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      config.jwtSecret,
      {
        expiresIn: 30000,
      },
      (err, token) => {
        if (err) throw err;
        return res.status(200).json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server Error");
  }
});

//@route    POST    /api/users/login
//@desc     Authenticate user and return token
//@access   Public
router.post("/login", async (req, res) => {
  //validation

  try {
    const user = await user.findOne({ email: req.body.email });
    if (!user) return res.status(400).json({ error: "Invalidate credentials" });

    const isMatched = await bcrypt.compare(req.body.password, user.password);
    if (!isMatched)
      return res.status(400).json({ error: "Invalidate credentials" });

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      config.jwtSecret,
      {
        expiresIn: 30000,
      },
      (err, token) => {
        if (err) throw err;
        return res.status(200).json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server Error");
  }
});

//@route    PUT    /api/users/:id
//@desc     Update user
//@access   Private

router.put("/:id", auth, async (req, res) => {
  let userField = {};
  if (req.body.street) userField.street = req.body.street;
  if (req.body.city) userField.city = req.body.city;
  if (req.body.country) userField.country = req.body.country;
  if (req.body.avatar) userField.avatar = req.body.avatar;

  try {
    let user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });
    user = await User.findByIdAndUpdate(
      req.params.id,
      { $set: userField },
      { new: true }
    );
    return res.status(200).json(user);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server Error");
  }
});

//@route    DELETE    /api/users/:id
//@desc     Delete user
//@access   Private

router.delete("/:id", auth, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });
    await user.remove();
    return res.status(200).json({ success: "User removed" });
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server Error");
  }
});

module.exports = router;
