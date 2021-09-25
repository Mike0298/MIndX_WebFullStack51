const config = {
  db: "mongodb+srv://MikeOG:1234567890@51shopdb.1xyd7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  jwtSecret: "MikeShopJWTSecret",
};

const dataDict = {
  customer: "customer",
  admin: "admin",
  manager: "manager",
  inStock: "in stock",
  shipped: "shipped",
  success: "success",
  cancel: "cancelled",
};

module.exports = { config, dataDict };
