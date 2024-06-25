const joi = require("joi");

const schema = joi.object().keys({
  title: joi.string().required(),
  author: joi.string().required(),
  words: joi.number().required(),
  catagories: joi.array(),
  content: joi.string(),
  featuredImage: joi.string(),
});

const titleValidate = (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};

module.exports = { titleValidate };
