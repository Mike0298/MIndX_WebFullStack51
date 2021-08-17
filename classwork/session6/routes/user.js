const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

const {
  validateRegisterData,
  validateLoginData,
} = require("../utils/validation");

const jwtSecret = "myJWTSecret";

router.post("/register", async (req, res) => {
  const { error } = validateRegisterData(req.body);
  if (error) return res.status(400).send(error.details);

  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("Email already exists");

  try {
    user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(req.body.password, salt);

    await user.save();

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      jwtSecret,
      {
        expiresIn: "3h",
      },
      (err, token) => {
        if (err) throw err;
        return res.status(200).json({ token });
      }
    );
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
});

router.post("/login", async (req, res) => {
  const { error } = validateLoginData(req.body);
  if (error) return res.status(400).send(error.details);

  let user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Email does not exists");

  try {
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) return res.status(400).send("Invalid credential");
    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      jwtSecret,
      {
        expiresIn: "3h",
      },
      (err, token) => {
        if (err) throw err;
        return res.status(200).json({ token });
      }
    );
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
});

const middlewareVerify = (req, res, next) => {
  const token = req.header;
};

// router.get("/", (req, res) => {});

module.exports = router;
