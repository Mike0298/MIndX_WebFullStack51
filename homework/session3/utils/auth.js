const jwt = require("jsonwebtoken");

const config = require("../config/config");

module.exports = (req, res, next) => {
  const token = req.header("auth-token");

  if (!token) return res.status(401).send("Unauthorized");

  try {
    const decoded = jwt.verify(token, config.jwtSecret);
    req.user = decoded.user;
    next();
  } catch (err) {
    return res.status(401).send("Invalid token");
  }
};
