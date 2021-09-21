const jwt = require("jsonwebtoken");
const { config } = require("../config/config");

module.exports = function (req, res, next) {
  const token = req.header("x-auth-token");
  if (!token)
    return res.status(401).json({ error: "No token, authorization denied" });
  try {
    const decoded = jwt.verify(token, config.jwtSecret);
    req.user = decoded.user;
    next();
  } catch (err) {
    return res.status(401).json({ error: "Invalid Token" });
  }
};
