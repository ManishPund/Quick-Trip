const Joi = require("joi");

module.exports.listingSchema = Joi.object({
  listing: Joi.object({
    title: Joi.string().trim().required(),
    description: Joi.string().trim().required(),
    img_url: Joi.string().allow("", null),
    country: Joi.string().trim().required(),
    location: Joi.string().trim().required(),
    price: Joi.number().required().min(0),
  }).required(),
});
