const Joi = require("joi");

exports.validateRegisterData = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(12).required(),
  });
  return schema.validate(data);
};

exports.validateLoginData = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(12).required(),
  });
  return schema.validate(data);
};
