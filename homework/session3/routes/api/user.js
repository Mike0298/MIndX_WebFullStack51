const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const config = require("../../config/config");
const User = require("../../models/User");

const {
  validateRegisterData,
  validateLoginData,
} = require("../../utils/validation");

router.post("/register", async (req, res) => {
  const { error } = validateRegisterData(req.body);
  if (error) return res.status(400).json(error.details);

  let email = await User.findOne({ email: req.body.email });
  if (email) return res.status(400).send("Email already exist");

  let salt = await bcrypt.genSalt(10);
  let password = await bcrypt.hash(req.body.password, salt);

  let user = new User({
    name: req.body.name,
    email: req.body.email,
    password: password,
  });

  try {
    await user.save();

    const token = jwt.sign({ id: user.id }, config.jwtSecret, {
      expiresIn: "3h",
    });

    return res.status(200).json({ token });
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server Error");
  }
});

router.post("/login", async (req, res) => {
  const { error } = validateLoginData(req.body);
  if (error) return res.status(400).json(error.details);

  let user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Invalid Credential");

  try {
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) return res.status(400).send("Invalid Credential");

    const token = jwt.sign({ id: user.id }, config.jwtSecret, {
      expiresIn: "3h",
    });

    return res.status(200).json({ token });
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server Error");
  }
});

module.exports = router;
