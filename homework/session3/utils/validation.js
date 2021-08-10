const Joi = require("joi");

exports.validateManga = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
  });
  return schema.validate(data);
};
